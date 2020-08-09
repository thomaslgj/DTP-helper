import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import CheckBox from 'react-native-check-box'

export default function GrainHarvest(props) {
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
          <View style={styles.headerCol}>
            <Text style={styles.headerText}>{i18n.t('appTitle')}</Text>
            <Text style={styles.headerText}>{i18n.t('tabGrainHarvest')}</Text>
          </View>
         
            { lang === 'en' ? (
              <View style={styles.headerLang}>
                <Text style={styles.headerBtnInactive}>
                  <Image source={require('../assets/images/en.png')} style={{ width: 30, height: 30 }} />
                </Text>
                <TouchableOpacity onPress={() => changeLang('es')}>
                  <Text style={styles.headerBtn}>
                    <Image source={require('../assets/images/es.png')} style={{ width: 30, height: 30 }} />
                  </Text>
                </TouchableOpacity>
              </View>
              ) : (
              <View style={styles.headerLang}>
                <TouchableOpacity onPress={() => changeLang('en')}>
                  <Text style={styles.headerBtn}>
                    <Image source={require('../assets/images/en.png')} style={{ width: 30, height: 30 }} />
                  </Text>
                </TouchableOpacity>
                <Text style={styles.headerBtnInactive}>
                  <Image source={require('../assets/images/es.png')} style={{ width: 30, height: 30 }} />
                </Text>
              </View>
            )}
        </View>

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.label}><Image source={require('../assets/images/region1.png')} style={{ width: 10, height: 10 }} /> {i18n.t('region')} 1</Text>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
              style={{flex: 1, padding: 5, width: 30, height: 30}}
              onClick={() => updateSum('isChecked1')}
              isChecked={isChecked1}
              rightText={i18n.t('famishedOrOccupied')}
              rightTextStyle={{color: '#5d1713'}}
              checkedImage={<Image source={require('../assets/images/checkbox_checked.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
              unCheckedImage={<Image source={require('../assets/images/checkbox.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
            />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}><Image source={require('../assets/images/region2.png')} style={{ width: 10, height: 10 }} /> {i18n.t('region')} 2</Text>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
              style={{flex: 1, padding: 5, width: 30, height: 30}}
              onClick={() => updateSum('isChecked2')}
              isChecked={isChecked2}
              rightText={i18n.t('famishedOrOccupied')}
              rightTextStyle={{color: '#5d1713'}}
              checkedImage={<Image source={require('../assets/images/checkbox_checked.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
              unCheckedImage={<Image source={require('../assets/images/checkbox.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
            />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}><Image source={require('../assets/images/region3.png')} style={{ width: 10, height: 10 }} /> {i18n.t('region')} 3</Text>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
              style={{flex: 1, padding: 5, width: 30, height: 30}}
              onClick={() => updateSum('isChecked3')}
              isChecked={isChecked3}
              rightText={i18n.t('famishedOrOccupied')}
              rightTextStyle={{color: '#5d1713'}}
              checkedImage={<Image source={require('../assets/images/checkbox_checked.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
              unCheckedImage={<Image source={require('../assets/images/checkbox.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>}
            />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}><Image source={require('../assets/images/region4.png')} style={{ width: 10, height: 10 }} /> {i18n.t('region')} 4</Text>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
              style={{flex: 1, padding: 5, width: 30, height: 30}}
              onClick={() => updateSum('isChecked4')}
              isChecked={isChecked4}
              rightText={i18n.t('famishedOrOccupied')}
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
    flex: 1,
    flexDirection: 'row',
  },
  headerBtn: {
    backgroundColor: 'transparent',
    opacity: 0.5
  },
  headerBtnInactive: {
    backgroundColor: 'transparent',
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
