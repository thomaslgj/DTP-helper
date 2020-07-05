import LocalizedStrings from 'react-native-localization';
import english from './en.js'
import spanish from './es.js'

const strings = new LocalizedStrings({
  en: english,
  es: spanish,
});

export const changeLanguage = (languageKey) => {
  strings.setLanguage(languageKey)
}