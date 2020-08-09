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

export default function HappinessScreen(props) {
  const { screenProps } = props;
  const { changeLang, i18n, lang } = screenProps;
  const [
    currentHappiness, 
    setcurrentHappiness, 
  ] = React.useState(7);
  const [
    unique, 
    setUnique, 
  ] = React.useState(1);
  const [
    currentImportPrice, 
    setcurrentImportPrice, 
  ] = React.useState(3);
  const [
    currentOccupiedProvinces, 
    setcurrentOccupiedProvinces, 
  ] = React.useState(3);
  const [
    currentGrain, 
    setCurrentGrain, 
  ] = React.useState(3);
  
  const unfedProvinces = 25 - (currentOccupiedProvinces + currentGrain);
  
  useEffect(() => {
    // Hack to refresh view (fixing render bug)
    setUnique(Math.floor(Math.random() * (+100 - +1)) + +1);
  }, []);

  const importCost = () => {
    return [0,1,2,3,4,5,6,7,8,9,10,11,12].map(importNr => {
      return (
        <View style={styles.tableRow} key={importNr}>
          <Text style={styles.number}>{importNr * currentImportPrice}</Text>
        </View>
      )}
    )
  }
  
  const moveHappiness = () => {
    return [0,1,2,3,4,5,6,7,8,9,10,11,12].map(importNr => {
      return (
        <View style={styles.tableRow} key={importNr}>
          <Text style={styles.number}>{(currentHappiness + importNr) - unfedProvinces}</Text>
        </View>
      )}
    )
  }
  
  return (
    <View style={styles.container} key={unique}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.headerCol}>
            <Text style={styles.headerText}>{i18n.t('appTitle')}</Text>
            <Text style={styles.headerText}>{i18n.t('tabHappiness')}</Text>
          </View>
          {lang === 'en' ? (
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
            <View style={styles.col}>
              <Text style={styles.label}>{i18n.t('currentHappiness')}</Text>
              <TextInput
                numeric
                defaultValue="7"
                keyboardType="numeric"
                style={styles.textInput}
                numberOfLines={1}
                onChangeText={value => setcurrentHappiness(Number(value) || 0)}
              />
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>{i18n.t('importPrice')}</Text>
              <TextInput
                numeric
                defaultValue="3"
                keyboardType="numeric"
                style={styles.textInput}
                numberOfLines={1}
                onChangeText={value => setcurrentImportPrice(Number(value) || 0)}
              />
            </View>
          </View>
        
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>{i18n.t('occupiedProvinces')}</Text>
              <TextInput
                numeric
                defaultValue="8"
                keyboardType="numeric"
                style={styles.textInput}
                numberOfLines={1}
                onChangeText={value => setcurrentOccupiedProvinces(Number(value) || 0)}
              />
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>{i18n.t('grainInStorage')}</Text>
              <TextInput
                numeric
                defaultValue="8"
                keyboardType="numeric"
                style={styles.textInput}
                numberOfLines={1}
                onChangeText={value => setCurrentGrain(Number(value) || 0)}
              />
            </View>
          </View>
          
          <View style={styles.tableWrapper}>
            <View style={styles.table}>
              <View style={styles.tableCol}>
                <View key="header">
                  <Text style={styles.tableColHeading}>
                    <Image source={require('../assets/images/tax.png')} style={{ width: 15, height: 15 }} /> {i18n.t('importCost')}
                  </Text>
                </View>
                {importCost()}
              </View>
              <View style={styles.tableCol}>
                <View key="header">
                  <Text style={styles.tableColHeading}><Image source={require('../assets/images/happiness.png')} style={{ width: 15, height: 15 }} /> {i18n.t('moveHappiness')}</Text>
                </View>
                {moveHappiness()}
              </View>
            </View>
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HappinessScreen.navigationOptions = {
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
    flex: 1,
    flexDirection: 'row',
  },
  headerBtn: {
    backgroundColor: 'transparent',
    opacity: 0.5,
    width: 40
  },
  headerBtnInactive: {
    backgroundColor: 'transparent',
    width: 40
  },
  headerText: {
    color: '#d1aa2a',
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  row: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
  col: {
    width: '50%',
    justifyContent: 'center',
  },
  textInput: {
    maxWidth: '80%',
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 2,
    marginRight:10,
    padding: 5,
    backgroundColor: '#fff'
  },
  label: {
    paddingBottom: 2,
    color: '#5d1713',
  },
  inputFloat: {
    width: '30%'
  },
  h1: {
    fontSize: 24,
    marginBottom: 10,
  },
  sum: {
    marginTop: 30,
  },
  tableWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '50%'
  },
  table: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
  },
  tableRow: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
    height: 30,
    resizeMode: 'contain',
    borderBottomWidth: 1,
    borderBottomColor: '#d3cdbd',
  },
  tableCol: {
    width: 130,
    textAlign: 'left'
  },
  tableColHeading: {
    color: '#5d1713',
  },
  number: {
    color: '#5d1713',
    fontSize: 20,
    textAlign: 'center',
  }
});