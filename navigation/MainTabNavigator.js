import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import i18n from '../locales/i18n';

import GrainHarvest from '../screens/GrainHarvest';
import EmpireTaxScreen from '../screens/EmpireTaxScreen';
import HappinessScreen from '../screens/HappinessScreen';

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

HomeStack.navigationOptions = ({ navigation, navigationOptions }) => ({
  tabBarLabel: i18n.t('tabGrainHarvest'),
  tabBarIcon: ({ focused }) => (
    <Image source={require('../assets/images/grain.png')} style={{width: 20, height: 20}} />
  ),
  tabBarOptions: {
    activeTintColor: '#5d1713',
    inactiveTintColor: '#aeaca3',
  }
});

HomeStack.path = '';

const EmpireTaxStack = createStackNavigator(
  {
    EmpireTax: EmpireTaxScreen,
  },
  config
);

EmpireTaxStack.navigationOptions = ({ navigation, navigationOptions }) => ({
  tabBarLabel: i18n.t('tabEmpireTax'),
  tabBarIcon: ({ focused }) => (
    <Image source={require('../assets/images/tax.png')} style={{ width: 20, height: 20 }} />
  ),
  tabBarOptions: {
    activeTintColor: '#5d1713',
    inactiveTintColor: '#aeaca3',
  },
});

EmpireTaxStack.path = '';

const HappinessStack = createStackNavigator(
  {
    Happiness: HappinessScreen,
  },
  config
);

HappinessStack.navigationOptions = ({ navigation, navigationOptions }) => ({
  tabBarLabel: i18n.t('tabHappiness'),
  tabBarIcon: ({ focused }) => (
    <Image source={require('../assets/images/happiness.png')} style={{ width: 20, height: 20 }} />
  ),
  tabBarOptions: {
    activeTintColor: '#5d1713',
    inactiveTintColor: '#aeaca3',
  },
});

HappinessStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  EmpireTaxStack,
  HappinessStack,
});

tabNavigator.path = '';

export default tabNavigator;
