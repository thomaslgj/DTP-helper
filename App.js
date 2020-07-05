import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import * as Localization from 'expo-localization';
// import i18n from 'i18n-js';
import AppNavigator from './navigation/AppNavigator';
// import { AppContext, lang } from './AppContext'
// import i18n, { loadLocale } from './locales/i18n';


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  // const [language, setLanguage] = useState('en_GB');
  // const context = React.useContext(AppContext);

  // Set the locale once at the beginning of your app.
  // i18n.locale = Localization.locale;

  // Choose one of two locales
  // const locale = Localization.locale.includes('es') ? 'es_ES' : 'en_GB';
  // i18n.locale = locale;
  // // When a value is missing from a language it'll fallback to another language with the key present.
  // i18n.fallbacks = true;
  // const locale = i18n.locale;

  // console.log(locale);

  // useEffect(() => {
  //   init()
  //   console.log('updating')
  // }, [locale]);

  // const init = async () => {
  //   await loadLocale()
  // };


  // const toggleLang = (lang) => {
  //   setLanguage(lang);
  // };

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      // <AppContext.Provider value={language}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator/>
        </View>
      // </AppContext.Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      // require('./assets/images/robot-dev.png'),
      // require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      // ...Ionicons.font,
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
});
