import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [income, setIncome] = useState(6789);
  const [billsPercent, setBills] = useState(77);

  var bills = income * (billsPercent * 0.01);
  bills = bills.toFixed(0);

  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.lightText}>Enter Monthly Income:</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.heavyText}>$</Text>
      <TextInput style={styles.heavyText}
      keyboardType='numeric'
      placeholder='4236'
      onChangeText={(val) => setIncome(val)}/>
      </View>
      
      <Text style={styles.lightText}>Current Budget:</Text>
        <View style={{height: 690, justifyContent: 'space-evenly'}}>
          <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Bills</Text>
                    <Text style={styles.lightText}>${bills} Monthly</Text>
                </View>
                <View style={styles.percentageContainer}>
                <TextInput style={styles.percentage}
                    keyboardType='numeric'
                    placeholder='35'
                    onChangeText={(val) => setBills(val)}/>
                    <Text style={styles.percentage}>%</Text>
                </View>
          </View>
          <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Transportation</Text>
                    <Text style={styles.lightText}>$819 Monthly</Text>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>16%</Text>
                </View>
          </View>

          <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Health</Text>
                    <Text style={styles.lightText}>$431 Monthly</Text>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>8%</Text>
                </View>
          </View>

          <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Groceries</Text>
                    <Text style={styles.lightText}>$412 Monthly</Text>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>8%</Text>
                </View>
          </View>

          <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Entertainment</Text>
                    <Text style={styles.lightText}>$243 Monthly</Text>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>4%</Text>
                </View>
            </View>

            <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Dining</Text>
                    <Text style={styles.lightText}>$198 Monthly</Text>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>4%</Text>
                </View>
            </View>

            <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Other</Text>
                    <Text style={styles.lightText}>$249 Monthly</Text>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>4%</Text>
                </View>
            </View>
        </View>
            <Text style={styles.lightText}>Money Leftover: $2,109</Text>
            <Text></Text>
      <StatusBar style="auto" />
    </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  lightText: {
    color: '#909090',
    fontSize: 20
  },
  heavyText: {
    color: '#4A4A4A',
    fontSize: 55,
    fontWeight: 'bold'
  },
  categoryName: {
    color: '#4A4A4A',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  overallContainer: {
    width: 360,
    height: 90,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#4A4A4A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },
  percentage: {
    margin: 'auto',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A4A4A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  percentageContainer: {
    height: 60,
    width: 80,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#4A4A4A',
    flexDirection: 'row',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
    }
});
