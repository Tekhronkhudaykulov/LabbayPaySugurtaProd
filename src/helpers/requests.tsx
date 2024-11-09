import { API_URL } from "../config";
import { LoginClientParamsType } from "../types";
import { StepOne } from "../types/steps";
import { $api } from "./api";

export const requests = {
  // CLIENT AUTH
  postLoginClient: (params: LoginClientParamsType) =>
    $api.post(`${API_URL}/auth/login`, params),
  fetchClient: () => $api.post(`${API_URL}/me`),

  //get company and service
  postCompany: () => $api.post(`${API_URL}/get-companies`),
  postCompanyDetail: (company_id: object) =>
    $api.post(`${API_URL}/get-company-services`, company_id),

  //step one

  postStepOne: (params: StepOne) =>
    $api.post(`${API_URL}/get-step-one`, params),

  postStepTwo: (params: any) => $api.post(`${API_URL}/get-step-two`, params),

  postEveryCash: (payload: any) =>
    $api.post(`${API_URL}/save-every-cash`, payload),

  bannerFetch: () => $api.get(`${API_URL}/banners-list`),
};
