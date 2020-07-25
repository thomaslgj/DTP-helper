import React, { useEffect, useState } from 'react';
import { useGlobal } from 'reactn';
import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-community/async-storage';

// Try this later
// import { en } from './en';
// import { es } from './es';

export const handleLanguageChange = async (currentLanguage) => {
  await i18n.changeLanguage(currentLanguage)
  await Updates.reloadAsync()
}

export const CustomI18nextProvider = ({ children }) => {
  const [ languages, setLanguages ] = useGlobal([]);
  const [ currentLanguage, setCurrentLanguage ] = useGlobal('');

  const cacheUserLanguage = async locale => {
    try {
      await AsyncStorage.setItem('global:lang', locale)
      console.log('setting lang ', locale)
    } catch (error) {
      console.log('Error setting global language')
    }
  }

  const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: async callback => {
      const locale = await getUserLanguage()
      setCurrentLanguage(locale)
      console.log('setting current lang ', locale)
      setLanguages(Object.keys(i18n.services.resourceStore.data))
      console.log(Object.keys(i18n.services.resourceStore.data))
      callback(locale)
      return 'en'
    },
    init: () => null,
    cacheUserLanguage,
  }
  
  const getUserLanguage = async () => {
    try {
      const cachedLanguage = await AsyncStorage.getItem('global:lang');
      console.log('cached lang ', cachedLanguage);
      return cachedLanguage !== null ? cachedLanguage : getSystemLanguage();
    } catch (error) {
      console.log('Error getting global language');
      return getSystemLanguage();
    }
  }
  
  const getSystemLanguage = () => {
    return Localization.locale
  }
  
  useEffect(() => {
    i18n
      .use(languageDetector)
      .use(initReactI18next)
      .init({
        lng: 'en',
        resources: {
          en: {
            appTitle: "DTP: Tax & Food calculator",
            tabEmpireTax: "Empire Tax",
            tabGrainHarvest: "Grain Harvest",
            tabHappiness: "Happiness",
            region: "Region",
            occupiedProvinces: "Occupied provinces",
            famished: "Famished",
            famishedOrOccupied: "Famished or occupied",
            currentHappiness: "Current happiness",
            importPrice: "Import price",
            grainInStorage: "Grain in storage",
            importCost: "Import cost",
            moveHappiness: "Move happiness"
          },
          es: {
            appTitle: "DTP: Gestor de impuestos y grano",
            tabEmpireTax: "Impuestos",
            tabGrainHarvest: "Cosecha de grano",
            tabHappiness: "Felicidad",
            region: "Región",
            occupiedProvinces: "Provincias ocupadas",
            famished: "Hambruna",
            famishedOrOccupied: "Hambruna u ocupación",
            currentHappiness: "Felicidad actual",
            importPrice: "Precio de importación",
            grainInStorage: "Reservas de grano",
            importCost: "Coste de importación",
            moveHappiness: "Mover marcador de felicidad"
          },
        },
        fallbackLng: 'en',
        keySeparator: false,
        saveMissing: true,
        interpolation: {
          escapeValue: false,
        },
        debug: true,
        react: {
          wait: true
        }
      })

    i18n.on('languageChanged', cacheUserLanguage)

    i18n.on('missingKey', function (lngs, namespace, key) {
      console.warn(`Missing key: ${key}`)
    })
  }, [])
  
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export default i18n