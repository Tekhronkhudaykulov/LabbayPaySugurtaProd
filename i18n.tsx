import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./src/i18/en/translation.json";
import uz from "./src/i18/uz/translation.json";
import ru from "./src/i18/ru/translation.json";

const savedLanguage = localStorage.getItem("i18nextLng") || "uz"; // Agar localStorage'da til bo'lm

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  uz: {
    translation: uz,
  },
};

i18n
  .use(initReactI18next) // i18next bilan react-i18next ni bog'lash
  .init({
    resources,
    lng: savedLanguage, // Sukut bo'yicha til
    fallbackLng: "ru", // Til topilmasa, qaysi tilga o'tish kerak
    interpolation: {
      escapeValue: false, // XSS xavfini oldini olish uchun
    },
  });

export default i18n;
