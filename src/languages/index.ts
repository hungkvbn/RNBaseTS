import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
// import {getLocales} from 'react-native-localize';
import EN from './resources/en.json';
import VN from './resources/vn.json';
export const resources = {
  en: {
    translation: EN,
  },
  vn: {
    translation: VN,
  },
} as const;
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', // https://www.i18next.com/misc/migration-guide
  fallbackLng: 'en',
  debug: true,
  // lng: getLocales()[0].languageCode,
  lng: 'vn',
  cache: {
    enabled: true,
  },
  resources: resources,
  interpolation: {
    escapeValue: false, // not needed for react as it does escape per default to prevent xss!
  },
});

export default i18n;
