import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "../src/locales/en/translation.json";
import jpTranslation from "../src/locales/jp/translation.json";

i18n
  .use(LanguageDetector) // Use the language detector
  .use(initReactI18next) // Passes i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      jp: {
        translation: jpTranslation,
      },
    },
    fallbackLng: "en", // Default language if the detected language is not available
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
