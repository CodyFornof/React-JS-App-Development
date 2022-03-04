import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity, Animated, } from 'react-native';

export default function App() {

  const [current, setCurrent] = useState('home');

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };

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
              onPress={fadeOut}>
            <View style={styles.modeCircle}>
              <Text style={styles.heavyText}>Bigger</Text> 
            </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrent(HomeScreen)}>
            <Animated.View style={[
              styles.medCircle,
              {
                opacity: fadeAnim
              }
            ]}>
           <Text style={styles.heavyText}>Breathe In</Text> 
            </Animated.View>
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
      medCircle: {
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
