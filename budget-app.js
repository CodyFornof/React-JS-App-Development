import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [current, setCurrent] = useState('home');

  const height = 150;
  const width = 150;
  const seconds = 0;

  function animation() {
    if(seconds < 10){
      this.height = height + 80;
      this.width = width + 80;
      this.seconds = seconds++;
    }else if(seconds >= 10){
      this.seconds = 10;
    }
  }

  const HomeScreen = (
    <View style={styles.container}>
        <Text style={styles.lightText}>Select Mode:</Text>
        <TouchableOpacity
          onPress={() => setCurrent(MedScreen)}>
              <View style={styles.modeCircle}>
                <Text style={styles.heavyText}>
                  5 Minutes
                </Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => setCurrent(MedScreen)}>
              <View style={styles.modeCircle}>
                <Text style={styles.heavyText}>
                  10 Minutes
                </Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => setCurrent(MedScreen)}>
              <View style={styles.modeCircle}>
                <Text style={styles.heavyText}>
                  15 Minutes
                </Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => setCurrent(MedScreen)}>
              <View style={styles.modeCircle}>
                <Text style={styles.heavyText}>
                  25 Minutes
                </Text>
              </View>
          </TouchableOpacity>

    </View>
  );

  const MedScreen = (
    <View style={styles.container}>
          <TouchableOpacity
              onPress={() => {animation(height, width)}}>
            <View style={styles.modeCircle}>
              <Text style={styles.heavyText}>Bigger</Text> 
            </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrent(HomeScreen)}>
            <View style={styles.modeCircle}
            height={height}
            width={width}>
           <Text style={styles.heavyText}>Breathe In</Text> 
            </View>
        </TouchableOpacity>
    </View>
  );

  return current === 'home' ? HomeScreen : current;
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
