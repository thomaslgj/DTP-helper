import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
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

HomeStack.navigationOptions = {
  tabBarLabel: 'Grain Harvest',
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
  tabBarLabel: 'Empire Tax',
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
