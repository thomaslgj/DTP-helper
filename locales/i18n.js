import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

const locale = Localization.locale.includes('es') ? 'es_ES' : 'en_GB';
i18n.defaultLocale = locale
i18n.locale = locale
i18n.fallbacks = true

export const loadLocale = async (lang) => {
    if (i18n.translations[locale] !== null) {
    if (lang) {
      i18n.locale = lang

    } else {
      i18n.locale = locale
    }
    console.log(i18n.locale)
    switch (i18n.locale) {
      case 'es_ES':
        i18n.translations = {es_ES: require('./es.json')};
        break
      default:
      case 'en_GB':
        i18n.translations = { en_GB: require('./en.json')};
        break
      case 'en':
         i18n.translations = { en_GB: require('./en.json')};
        break
      case 'en_US':
         i18n.translations = { en_GB: require('./en.json')};
        break
    }
  }
}

export default i18n