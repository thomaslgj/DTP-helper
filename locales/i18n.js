import React, { useEffect, useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-community/async-storage';

import en from './en';
import es from './es';

const languageDetector = {
  type: 'languageDetector',
  async: true, // async detection
  detect: async callback => {
    const locale = await this.getUserLanguage();
    this.setState((state) => ({
      ...state,
      options: {
        lng: locale
      },
    }))
    callback(locale);
  },
  init: () => { },
  cacheUserLanguage: () => { }
}

export class CustomI18nextProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      languages: [],
      options: {
        lng: 'en',
        resources: {
          en: {
            common: en
          },
          es: {
            common: es
          },
        },
        ns: ['common'],
        defaultNS: 'common',
        debug: false,
      }
    };
  }

  cacheUserLanguage = async locale => {
    try {
      await AsyncStorage.setItem('global:lang', locale)
      console.log('setting lang ', locale)
      this.setState((state) => ({
        ...state,
        options: {
          lng: locale
        },
      }))
      console.log('setting lang state', this.state.options.lng)
      
    } catch (error) {
      console.log('Error setting global language')
    }
  }

  getUserLanguage = async () => {
    try {
      const cachedLanguage = await AsyncStorage.getItem('global:lang');
      console.log('cached lang ', cachedLanguage);
      return cachedLanguage !== null ? cachedLanguage : this.getSystemLanguage();
    } catch (error) {
      console.log('Error getting global language');
      return this.getSystemLanguage();
    }
  }

  getSystemLanguage = () => {
    return Localization.locale
  }

  initTranslations = async () => {
    await i18n
      .use(languageDetector)
      .use(initReactI18next)
      .init(this.state.options)
  }

  handleLanguageChange = async (currentLanguage) => {
    await i18n.changeLanguage(currentLanguage)
    this.setState((state) => ({
      ...state,
      options: {
        lng: currentLanguage
      },
    }))
  }

  componentDidMount() {
    this.initTranslations();
  }

  render () {
    i18n.on('languageChanged', this.cacheUserLanguage);
    const lang = this.state.options.lng
    console.log('this.state', this.state)
    
    i18n.on('missingKey', function (lngs, namespace, key) {
      console.warn(`Missing key: ${key}`);
    })
    
    return <I18nextProvider>{React.cloneElement(this.props.children, { changeLang: this.handleLanguageChange, i18n: i18n, lang: lang })}</I18nextProvider>
  }

}

export default i18n