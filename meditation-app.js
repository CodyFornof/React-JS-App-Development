import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View  } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.lightText}>Select Mode:</Text>

        <View style={styles.modeCircle}>
            <Text style={styles.heavyText}>
                5 Minutes
            </Text>
        </View>

        <View style={styles.modeCircle}>
            <Text style={styles.heavyText}>
                10 Minutes
            </Text>
        </View>

        <View style={styles.modeCircle}>
            <Text style={styles.heavyText}>
                15 Minutes
            </Text>
        </View>

        <View style={styles.modeCircle}>
            <Text style={styles.heavyText}>
                25 Minutes
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightText: {
      color: '#909090',
      fontSize: 30
  },
  modeCircle: {
      backgroundColor: 'cyan',
      width: 150,
      height: 150,
      borderRadius: 150/2,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
  },
  heavyText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
