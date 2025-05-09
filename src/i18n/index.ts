import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Dil çevirilerini içe aktarıyoruz
import translationEN from './locales/en.json';
import translationTR from './locales/tr.json';
import translationDE from './locales/de.json';

// Tüm çevirileri bir araya getiriyoruz
const resources = {
  en: {
    translation: translationEN
  },
  tr: {
    translation: translationTR
  },
  de: {
    translation: translationDE
  }
};

i18n
  // Otomatik dil tespiti için
  .use(LanguageDetector)
  // React i18next modülünü bağlıyoruz
  .use(initReactI18next)
  // i18n'i başlatma konfigürasyonu
  .init({
    resources,
    fallbackLng: 'en', // Varsayılan dil
    debug: false, // Geliştirme aşamasında debug true yapılabilir
    
    interpolation: {
      escapeValue: false // React zaten XSS koruması sağladığı için
    }
  });

export default i18n;