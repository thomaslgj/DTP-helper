import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import i18n from 'i18n-js';
// import i18n from '../locales/i18n';
// import * as Localization from 'expo-localization';

import GrainHarvest from '../screens/GrainHarvest';
import EmpireTaxScreen from '../screens/EmpireTaxScreen';
import HappinessScreen from '../screens/HappinessScreen';

// console.log(i18n.translations);
// Choose one of two locales
// const locale = Localization.locale.includes('es') ? 'es_ES' : 'en_GB';
// i18n.locale = locale;

// i18n.translations = {
//   en_GB: {
//     tabEmpireTax: 'Empire Tax',
//     tabGrainHarvest: 'Grain Harvest',
//     tabHappiness: 'Happiness',

//   },
//   es_ES: {
//     tabEmpireTax: 'Impuestos',
//     tabGrainHarvest: 'Cosecha de grano',
//     tabHappiness: 'Felicidad',
//   },
// };

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: GrainHarvest,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Grain harvest',
  tabBarIcon: ({ focused }) => (
    <Image source={require('../assets/images/grain.png')} style={{width: 20, height: 20}} />
  ),
  tabBarOptions: {
    activeTintColor: '#5d1713',
    inactiveTintColor: '#aeaca3',
  },
};

HomeStack.path = '';

const EmpireTaxStack = createStackNavigator(
  {
    EmpireTax: EmpireTaxScreen,
  },
  config
);

EmpireTaxStack.navigationOptions = {
  tabBarLabel: 'Empire tax',
  tabBarIcon: ({ focused }) => (
    <Image source={require('../assets/images/tax.png')} style={{width: 20, height: 20}} />
  ),
  tabBarOptions: {
      activeTintColor: '#5d1713',
      inactiveTintColor: '#aeaca3',
  },
  header: {
    style: {
      backgroundColor: '#5d1713',
    }
  },
};

EmpireTaxStack.path = '';

const HappinessStack = createStackNavigator(
  {
    Happiness: HappinessScreen,
  },
  config
);

HappinessStack.navigationOptions = {
  tabBarLabel: 'Happiness',
  tabBarIcon: ({ focused }) => (
    <Image source={require('../assets/images/happiness.png')} style={{width: 20, height: 20}} />
  ),
  tabBarOptions: {
      activeTintColor: '#5d1713',
      inactiveTintColor: '#aeaca3',
    },
};

HappinessStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  EmpireTaxStack,
  HappinessStack,
});

tabNavigator.path = '';

export default tabNavigator;
