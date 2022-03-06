import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

export default function App() {

const [pages, setPages] = useState(0);
const [days, setDays] = useState(0);

var answer = (pages / days).toFixed(0);

  return (
    <View style={styles.container}>
      <Text>How many pages?</Text>
          <TextInput style={styles.inputBar}
          onChangeText={(val) => setPages(val)}></TextInput>
      <Text></Text>
      <Text>How many days?</Text>
          <TextInput style={styles.inputBar}
          onChangeText={(val) => setDays(val)}>
          </TextInput>
      <Text></Text>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
      <Text></Text>
      <Text>You must read pages {answer} a day</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBar: {
    height: 40,
    width: 80,
    backgroundColor: 'white',
    borderColor: '#333',
    borderWidth: 6,
    textAlign: 'center'
  },
  button: {
    height: 40,
    width: 80,
    backgroundColor: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
