import { API_URL } from "../config";
import i18n from "../../i18n";

import axios from "axios";

export const $api = axios.create({
  baseURL: API_URL,
});

export const tokenName = "labbayPay";

$api.defaults.headers.common["Accept"] = "application/json";

export const initApp = () => {
  const token = localStorage.getItem(tokenName);
  $api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const setToken = (token: any) => {
  console.log(token, "token");

  localStorage.setItem(tokenName, token);
  $api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  localStorage.removeItem(tokenName);
  $api.defaults.headers.common.Authorization = ``;
};

// Language
$api.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = i18n.language.toLowerCase();
  return config;
});

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  $api.defaults.headers.common["Accept-Language"] = lng;
};
