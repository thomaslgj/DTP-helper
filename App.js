import React, { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { CustomI18nextProvider } from './locales/i18n';

import AppNavigator from './navigation/AppNavigator';

import GrainHarvest from './screens/GrainHarvest';
import EmpireTaxScreen from './screens/EmpireTaxScreen';
import HappinessScreen from './screens/HappinessScreen';

const Stack = createAppContainer(createStackNavigator({
  GrainHarvest: { screen: GrainHarvest },
  EmpireTaxScreen: { screen: EmpireTaxScreen },
  HappinessScreen: { screen: HappinessScreen },
}));

class WrappedStack extends React.Component {
  static router = Stack.router;

  render() {
    console.log('this.props', this.props)
    const { i18n } = this.props;
    // When this is working, switch Stack with AppNavigator to get navigation tabs (and inject props)
    return <Stack screenProps={{ i18n }} {...this.props} />;
  }
}

export default function App() {
  return (
    <CustomI18nextProvider>
      <WrappedStack />
    </CustomI18nextProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
});
