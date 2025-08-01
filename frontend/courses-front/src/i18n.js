import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationZh from "./locales/zh/translation.json";


const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
  zh: { translation: translationZh },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
