import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [income, setIncome] = useState(4236);
  const [bills, setBills] = useState(0);
  const [trans, setTrans] = useState(0);
  const [health, setHealth] = useState(0);
  const [grocery, setGrocery] = useState(0);
  const [rec, setRec] = useState(0);
  const [dining, setDining] = useState(0);
  const [other, setOther] = useState(0);

  var billsPercent = 0;
  billsPercent = (bills / income) * 100;
  billsPercent = billsPercent.toFixed(0);

  var transPercent = 0;
  transPercent = (trans / income) * 100;
  transPercent = transPercent.toFixed(0);

  var healthPercent = 0;
  healthPercent = (health / income) * 100;
  healthPercent = healthPercent.toFixed(0);

  var groceryPercent = 0;
  groceryPercent = (grocery / income) * 100;
  groceryPercent = groceryPercent.toFixed(0);

  var recPercent = 0;
  recPercent = (rec / income) * 100;
  recPercent = recPercent.toFixed(0);

  var diningPercent = 0;
  diningPercent = (dining / income) * 100;
  diningPercent = diningPercent.toFixed(0);

  var otherPercent = 0;
  otherPercent = (other / income) * 100;
  otherPercent = otherPercent.toFixed(0);

  var leftover = income - (parseInt(bills) + parseInt(trans) + parseInt(health) + parseInt(grocery) + parseInt(rec) + parseInt(dining) + parseInt(other));

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
                    <View style={{flexDirection: 'row',}}>
                      <Text style={styles.lightText}>$</Text>
                      <TextInput style={styles.lightText}
                          keyboardType='numeric'
                          placeholder='0'
                      onChangeText={(val) => setBills(val)}/>
                      <Text style={styles.lightText}> Monthly</Text>
                    </View>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>{billsPercent}%</Text>
                </View>
          </View>
          <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Transportation</Text>
                    <View style={{flexDirection: 'row',}}>
                      <Text style={styles.lightText}>$</Text>
                      <TextInput style={styles.lightText}
                          keyboardType='numeric'
                          placeholder='0'
                      onChangeText={(val) => setTrans(val)}/>
                      <Text style={styles.lightText}> Monthly</Text>
                    </View>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>{transPercent}%</Text>
                </View>
          </View>

          <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Health</Text>
                    <View style={{flexDirection: 'row',}}>
                      <Text style={styles.lightText}>$</Text>
                      <TextInput style={styles.lightText}
                          keyboardType='numeric'
                          placeholder='0'
                      onChangeText={(val) => setHealth(val)}/>
                      <Text style={styles.lightText}> Monthly</Text>
                    </View>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>{healthPercent}%</Text>
                </View>
          </View>

          <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Groceries</Text>
                    <View style={{flexDirection: 'row',}}>
                      <Text style={styles.lightText}>$</Text>
                      <TextInput style={styles.lightText}
                          keyboardType='numeric'
                          placeholder='0'
                      onChangeText={(val) => setGrocery(val)}/>
                      <Text style={styles.lightText}> Monthly</Text>
                    </View>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>{groceryPercent}%</Text>
                </View>
          </View>

          <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Entertainment</Text>
                    <View style={{flexDirection: 'row',}}>
                      <Text style={styles.lightText}>$</Text>
                      <TextInput style={styles.lightText}
                          keyboardType='numeric'
                          placeholder='0'
                      onChangeText={(val) => setRec(val)}/>
                      <Text style={styles.lightText}> Monthly</Text>
                    </View>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>{recPercent}%</Text>
                </View>
            </View>

            <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Dining</Text>
                    <View style={{flexDirection: 'row',}}>
                      <Text style={styles.lightText}>$</Text>
                      <TextInput style={styles.lightText}
                          keyboardType='numeric'
                          placeholder='0'
                      onChangeText={(val) => setDining(val)}/>
                      <Text style={styles.lightText}> Monthly</Text>
                    </View>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>{diningPercent}%</Text>
                </View>
            </View>

            <View style={styles.overallContainer}>
                <View style={{width: 260}}>
                    <Text style={styles.categoryName}>Other</Text>
                    <View style={{flexDirection: 'row',}}>
                      <Text style={styles.lightText}>$</Text>
                      <TextInput style={styles.lightText}
                          keyboardType='numeric'
                          placeholder='0'
                      onChangeText={(val) => setOther(val)}/>
                      <Text style={styles.lightText}> Monthly</Text>
                    </View>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>{otherPercent}%</Text>
                </View>
            </View>
        </View>
            <Text style={styles.lightText}>Money Leftover: ${leftover}</Text>
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
