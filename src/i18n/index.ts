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
  // React i18next modülünü bağlıyoruz
  .use(initReactI18next)
  // Otomatik dil tespiti için (ama varsayılan dili değiştirmek için öncelik ayarını değiştiriyoruz)
  .use(LanguageDetector)
  // i18n'i başlatma konfigürasyonu
  .init({
    resources,
    lng: 'en', // Varsayılan olarak İngilizce kullan
    fallbackLng: 'en', // Sorun olduğunda İngilizce'ye dön
    debug: false, // Geliştirme aşamasında debug true yapılabilir
    
    detection: {
      order: ['localStorage', 'sessionStorage', 'navigator'], // Önce localStorage'a bak, sonra tarayıcıya
      lookupLocalStorage: 'i18nextLng', // localStorage anahtarı
      caches: ['localStorage'], // Dil tercihini localStorage'da sakla
    },
    
    interpolation: {
      escapeValue: false // React zaten XSS koruması sağladığı için
    }
  });

// Başlangıçta İngilizce'yi zorunlu kıl (tarayıcı otomatik algılama yerine)
if (!localStorage.getItem('i18nextLng')) {
  i18n.changeLanguage('en');
  localStorage.setItem('i18nextLng', 'en');
}

export default i18n;