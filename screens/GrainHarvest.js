import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import CheckBox from 'react-native-check-box'
// import i18n from 'i18n-js';
// import i18n, { loadLocale } from '../locales/i18n';
import strings from '../locales/localization'
import { changeLanguage } from '../locales/localization'

export default function GrainHarvest(changeLang) {
  const [
    isChecked1, 
    setChecked1, 
  ] = React.useState(false);
  const [
    isChecked2, 
    setChecked2, 
  ] = React.useState(false);
  const [
    isChecked3, 
    setChecked3, 
  ] = React.useState(false);
  const [
    isChecked4, 
    setChecked4, 
  ] = React.useState(false);
  const [
    sum,
    setSum
  ] = React.useState(18);
  
  const updateSum = (value) => {
    if (value === 'isChecked1' && isChecked1) {
      setChecked1(!isChecked1);
      setSum(sum + 3);
    }
    if (value === 'isChecked1' && !isChecked1) {
      setChecked1(!isChecked1);
      setSum(sum - 3);
    }
    if (value === 'isChecked2' && isChecked2) {
      setChecked2(!isChecked2);
      setSum(sum + 3);
    }
    if (value === 'isChecked2' && !isChecked2) {
      setChecked2(!isChecked2);
      setSum(sum - 3);
    }
    if (value === 'isChecked3' && isChecked3) {
      setChecked3(!isChecked3);
      setSum(sum + 3);
    }
    if (value === 'isChecked3' && !isChecked3) {
      setChecked3(!isChecked3);
      setSum(sum - 3);
    }
    if (value === 'isChecked4' && isChecked4) {
      setChecked4(!isChecked4);
      setSum(sum + 6);
    }
    if (value === 'isChecked4' && !isChecked4) {
      setChecked4(!isChecked4);
      setSum(sum - 6);
    }
  }
  
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>{strings.appTitle}</Text>
            <Text style={styles.headerText}>{strings.tabGrainHarvest}</Text>
          </View>
          <View>
            {/* <AppContext.Consumer> */}
              {/* {({lang, toggleLang}) => (
                <button onClick={toggleLang('es_ES')}>Spanish</button>
              )} */}
              {}
            <button onClick={() => changeLanguage('es') }>Spanish</button>
            {/* </AppContext.Consumer> */}
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.label}><Image source={require('../assets/images/region1.png')} style={{ width: 10, height: 10 }} /> {strings.region} 1</Text>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
              style={{flex: 1, padding: 5, width: 30, height: 30}}
              onClick={() => updateSum('isChecked1')}
              isChecked={isChecked1}
              rightText={strings.famishedOrOccupied}
              rightTextStyle={{color: '#5d1713'}}
              checkedImage={<Image source={require('../assets/images/checkbox_checked.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
              unCheckedImage={<Image source={require('../assets/images/checkbox.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
            />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}><Image source={require('../assets/images/region2.png')} style={{ width: 10, height: 10 }} /> {strings.region} 2</Text>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
              style={{flex: 1, padding: 5, width: 30, height: 30}}
              onClick={() => updateSum('isChecked2')}
              isChecked={isChecked2}
              rightText={strings.famishedOrOccupied}
              rightTextStyle={{color: '#5d1713'}}
              checkedImage={<Image source={require('../assets/images/checkbox_checked.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
              unCheckedImage={<Image source={require('../assets/images/checkbox.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
            />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}><Image source={require('../assets/images/region3.png')} style={{ width: 10, height: 10 }} /> {strings.region} 3</Text>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
              style={{flex: 1, padding: 5, width: 30, height: 30}}
              onClick={() => updateSum('isChecked3')}
              isChecked={isChecked3}
              rightText={strings.famishedOrOccupied}
              rightTextStyle={{color: '#5d1713'}}
              checkedImage={<Image source={require('../assets/images/checkbox_checked.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
              unCheckedImage={<Image source={require('../assets/images/checkbox.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
            />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}><Image source={require('../assets/images/region4.png')} style={{ width: 10, height: 10 }} /> {strings.region} 4</Text>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
              style={{flex: 1, padding: 5, width: 30, height: 30}}
              onClick={() => updateSum('isChecked4')}
              isChecked={isChecked4}
              rightText={strings.famishedOrOccupied}
              rightTextStyle={{color: '#5d1713'}}
              checkedImage={<Image source={require('../assets/images/checkbox_checked.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
              unCheckedImage={<Image source={require('../assets/images/checkbox.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
            />
            </View>
          </View>
          
          <Text style={styles.sum}>
            <Image source={require('../assets/images/grain.png')} style={{width: 30, height: 30}} /> {sum}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

GrainHarvest.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e5df',
    color: '#5d1713',
  },
  contentContainer: {
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#5d1713',
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#5d1713'
  },
  headerText: {
    color: '#d1aa2a',
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  row: {
    borderBottomWidth: 2,
    borderBottomColor: '#5d1713',
    paddingTop: 10,
    paddingBottom: 15,
  },
  textInput: {
    height: 40, 
    width: '30%',
    borderColor: 'gray', 
    borderWidth: 2,
    padding: 5,
    backgroundColor: '#fff'
  },
  h1: {
    fontSize: 24,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#5d1713',
    paddingBottom: 10,
  },
  sum: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5d1713',
    alignItems: 'center',
    paddingBottom: 8
  },
});
