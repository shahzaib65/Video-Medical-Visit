import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locals/en.json';
import itTranslation from '../locals/it.json';
import arTranslation from '../locals/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      it: {
        translation: itTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    lng: 'it', // Default language
    fallbackLng: 'it', // Fallback language
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
