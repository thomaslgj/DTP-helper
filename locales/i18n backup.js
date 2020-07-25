import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import * as Localization from 'expo-localization';
// import { Localization } from 'expo-localization';
import { en } from './en.json';
import { es } from './es.json';
// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: 'languageDetector',
  async: true, // async detection
  detect: callback => {
    return /*'en'; */ Localization.getLocalizationAsync().then(({ locale }) => {
      callback(locale);
    });
  },
  init: () => { },
  cacheUserLanguage: () => { }
}

i18n
  .use(languageDetector)
  .init({
    fallbackLng: 'en',
    // the translations
    // realworld load that via xhr or bundle those using webpack    
    resources: {
      en: en,
      es: es,
    },
    // have a initial namespace
    ns: ['translation'],
    defaultNS: 'translation',
    debug: true,
  });

export default i18n;