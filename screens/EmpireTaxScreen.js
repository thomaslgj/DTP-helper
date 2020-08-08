import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import CheckBox from 'react-native-check-box';

export default function EmpireTaxScreen(props) {
  const { screenProps } = props;
  const { changeLang, i18n, lang } = screenProps;
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
    occupiedProvinces1, setOccupiedProvinces1 
  ] = React.useState(0);
  const [
    occupiedProvinces2, setOccupiedProvinces2 
  ] = React.useState(0);
  const [
    occupiedProvinces3, setOccupiedProvinces3 
  ] = React.useState(0);
  const [
    occupiedProvinces4, setOccupiedProvinces4 
  ] = React.useState(0);
  const [
    regionValues,
    setRegionValues
  ] = React.useState([
    {
      region: 1,
      famished: false,
      occupiedProvinces: 0,
    },
    {
      region: 2,
      famished: false,
      occupiedProvinces: 0,
    },
    {
      region: 3,
      famished: false,
      occupiedProvinces: 0,
    },
    {
      region: 4,
      famished: false,
      occupiedProvinces: 0,
    },
  ]);
  const [
    sum,
    setSum
  ] = React.useState(25);
  
    const getCheckBoxFromRegion = (region) => {
      if (region === 1) {
        return isChecked1;
      }
      if (region === 2) {
        return isChecked2;
      }
      if (region === 3) {
        return isChecked3;
      }
      if (region === 4) {
        return isChecked4;
      }
    }
  
    const getOccupiedProvincesFromRegion = (region) => {
      if (region === 1) {
        return occupiedProvinces1;
      }
      if (region === 2) {
        return occupiedProvinces2;
      }
      if (region === 3) {
        return occupiedProvinces3;
      }
      if (region === 4) {
        return occupiedProvinces4;
      }
    }
    
    useEffect(() => {
      const tempSum = regionValues.reduce((accumulator, region) => {
        if (region.famished) {
          return accumulator - 6;
        }
        return accumulator - region.occupiedProvinces
      }, 25)
      
      if (tempSum !== sum) {
        setSum(tempSum)
      }
    }, [regionValues]);
    
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.headerCol}>
            <Text style={styles.headerText}>{i18n.t('appTitle')}</Text>
            <Text style={styles.headerText}>{i18n.t('tabEmpireTax')}</Text>
          </View>
          <View style={styles.headerLang}>
            {lang === 'en' ? (
              <TouchableOpacity onPress={() => changeLang('es')}>
                <Text style={styles.headerBtn}>
                  <Image source={require('../assets/images/es.png')} style={{ width: 30, height: 30 }} />
                </Text>
              </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => changeLang('en')}>
                  <Text style={styles.headerBtn}>
                    <Image source={require('../assets/images/en.png')} style={{ width: 30, height: 30 }} />
                  </Text>
                </TouchableOpacity>
              )}
          </View>
        </View>
        
        <View style={styles.content}>
          
          <Text style={styles.topLabel}><Image source={require('../assets/images/region1.png')} style={{ width: 10, height: 10 }} /> {i18n.t('region')} 1</Text>
          <View style={styles.row}>
            <View style={styles.col}>
              <CheckBox
                style={{flex: 1, padding: 5}}
                onClick={() => (setChecked1(!isChecked1), setRegionValues([
                  ...regionValues.filter(region => region.region !== 1),
                  {
                    region: 1,
                    famished: !isChecked1,
                    occupiedProvinces: getOccupiedProvincesFromRegion(1)
                  },
                ]))}
                isChecked={isChecked1}
                rightText={"Famished"}
                rightTextStyle={{color: '#5d1713'}}
                checkedImage={<Image source={require('../assets/images/checkbox_checked.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
                unCheckedImage={<Image source={require('../assets/images/checkbox.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
              />
            </View>
            <View style={styles.col}>
            {!isChecked1 &&
              <View>
                <Text style={styles.label}>{i18n.t('occupiedProvinces')}:</Text>
                <View
                style={styles.input}>
                  <TextInput
                  numeric="true"
                  keyboardType="numeric"
                  numberOfLines={1}
                  returnKeyLabel='Done' 
                  returnKeyType='done' 
                  onChangeText={value => setRegionValues([
                    ...regionValues.filter(region => region.region !== 1),
                    {
                      region: 1,
                      famished: isChecked1,
                      occupiedProvinces: Number(value)
                    },
                  ])}
                  />
                </View>
              </View>
            }
            </View>
          </View>
          
          <Text style={styles.topLabel}><Image source={require('../assets/images/region2.png')} style={{ width: 10, height: 10 }} /> {i18n.t('region')} 2</Text>
          <View style={styles.row}>
            <View style={styles.col}>
              <CheckBox
                style={{flex: 1, padding: 5}}
                onClick={() => (setChecked2(!isChecked2), setRegionValues([
                  ...regionValues.filter(region => region.region !== 2),
                  {
                    region: 2,
                    famished: !isChecked2,
                    occupiedProvinces: getOccupiedProvincesFromRegion(2)
                  },
                ]))}
                isChecked={isChecked2}
                rightText={"Famished"}
                rightTextStyle={{color: '#5d1713'}}
                checkedImage={<Image source={require('../assets/images/checkbox_checked.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
                unCheckedImage={<Image source={require('../assets/images/checkbox.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
              />
            </View>
            <View style={styles.col}>
            {!isChecked2 &&
              <View>
                <Text style={styles.label}>{i18n.t('occupiedProvinces')}:</Text>
                <View
                style={styles.input}>
                  <TextInput
                  clearTextOnFocus
                  keyboardType="numeric"
                  numberOfLines={1}
                  returnKeyLabel='Done' 
                  returnKeyType='done' 
                  onChangeText={value => setRegionValues([
                    ...regionValues.filter(region => region.region !== 2),
                    {
                      region: 2,
                      famished: isChecked2,
                      occupiedProvinces: Number(value)
                    },
                  ])}
                  />
                </View>
              </View>
            }
            </View>
          </View>
          
          
          <Text style={styles.topLabel}><Image source={require('../assets/images/region3.png')} style={{ width: 10, height: 10 }} /> {i18n.t('region')} 3</Text>
          <View style={styles.row}>
            <View style={styles.col}>
              <CheckBox
                style={{flex: 1, padding: 5}}
                onClick={() => (setChecked3(!isChecked3), setRegionValues([
                  ...regionValues.filter(region => region.region !== 3),
                  {
                    region: 3,
                    famished: !isChecked3,
                    occupiedProvinces: getOccupiedProvincesFromRegion(3)
                  },
                ]))}
                isChecked={isChecked3}
                rightText={"Famished"}
                rightTextStyle={{color: '#5d1713'}}
                checkedImage={<Image source={require('../assets/images/checkbox_checked.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
                unCheckedImage={<Image source={require('../assets/images/checkbox.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
              />
            </View>
            <View style={styles.col}>
            {!isChecked3 &&
              <View>
                <Text style={styles.label}>{i18n.t('occupiedProvinces')}:</Text>
                <View
                style={styles.input}>
                  <TextInput
                  clearTextOnFocus
                  keyboardType="numeric"
                  numberOfLines={1}
                  returnKeyLabel='Done' 
                  returnKeyType='done' 
                  onChangeText={value => setRegionValues([
                    ...regionValues.filter(region => region.region !== 3),
                    {
                      region: 3,
                      famished: isChecked3,
                      occupiedProvinces: Number(value)
                    },
                  ])}
                  />
                </View>
              </View>
            }
            </View>
          </View>
          
          
          
          <Text style={styles.topLabel}><Image source={require('../assets/images/region4.png')} style={{ width: 10, height: 10 }} /> {i18n.t('region')} 4</Text>
          <View style={styles.row}>
            <View style={styles.col}>
              <CheckBox
                style={{flex: 1, padding: 5}}
                onClick={() => (setChecked4(!isChecked4), setRegionValues([
                  ...regionValues.filter(region => region.region !== 4),
                  {
                    region: 4,
                    famished: !isChecked4,
                    occupiedProvinces: getOccupiedProvincesFromRegion(4)
                  },
                ]))}
                isChecked={isChecked4}
                rightText={"Famished"}
                rightTextStyle={{color: '#5d1713'}}
                checkedImage={<Image source={require('../assets/images/checkbox_checked.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
                unCheckedImage={<Image source={require('../assets/images/checkbox.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
              />
            </View>
            <View style={styles.col}>
            {!isChecked4 &&
              <View>
                <Text style={styles.label}>{i18n.t('occupiedProvinces')}:</Text>
                <View
                style={styles.input}>
                  <TextInput
                  clearTextOnFocus
                  keyboardType="numeric"
                  numberOfLines={1}
                  returnKeyLabel='Done' 
                  returnKeyType='done' 
                  onChangeText={value => setRegionValues([
                    ...regionValues.filter(region => region.region !== 4),
                    {
                      region: 4,
                      famished: isChecked4,
                      occupiedProvinces: Number(value)
                    },
                  ])}
                  />
                </View>
              </View>
            }
            </View>
          </View>
          
          <Text style={styles.sum}>
            <Image source={require('../assets/images/tax.png')} style={{width: 30, height: 30}} /> {sum}
          </Text>
        </View>
      </ScrollView>
    </View>  
  );
}

EmpireTaxScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e5df',
  },
  contentContainer: {
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#5d1713',
    paddingTop: 40,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: '#5d1713',
    flexDirection: 'row',
    flex: 1,
  },
  headerCol: {
    width: '75%',
  },
  headerLang: {
    width: '35%',
    alignItems: 'center',
  },
  headerBtn: {
    backgroundColor: 'transparent',
    color: '#d1aa2a',
  },
  headerText: {
    color: '#d1aa2a',
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  row: {
    paddingTop: 5,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#5d1713',
  },
  col: {
    width: '50%',
  },
  label: {
    paddingTop: 10,
    paddingBottom: 2,
    color: '#5d1713',
  },
  placeholder: {
  },
  topLabel: {
    fontWeight: 'bold',
    color: '#5d1713',
    marginTop: 20,
    marginBottom: -10,
    paddingBottom: 2,
    fontSize: 17,
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 5,
    backgroundColor: '#fff',
    marginTop: 4,
    marginBottom: 10,
    width: 100,
    height: 30
  },
  sum: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5d1713',
    flex: 1,
    paddingBottom: 8
  }
});
