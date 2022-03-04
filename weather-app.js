import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar}>Bakersfield, CA</TextInput>
      <Text style={styles.temperature}>72°</Text>
      <Text style={styles.highAndLow}>79°|54°    </Text>
      <View style={styles.weeklyForecast}>
          <View style={styles.forecastRow}>
              <Text style={styles.weekday}>Today</Text>
              <Text style={styles.weekday}>☀️ 54°|79°</Text>
          </View>
          <View style={styles.forecastRow}>
              <Text style={styles.weekday}>Fri</Text>
              <Text style={styles.weekday}>🌧️ 48°|59°</Text>
          </View>
          <View style={styles.forecastRow}>
              <Text style={styles.weekday}>Sat</Text>
              <Text style={styles.weekday}>🌧️ 43°|54°</Text>
          </View>
          <View style={styles.forecastRow}>
              <Text style={styles.weekday}>Sun</Text>
              <Text style={styles.weekday}>☁️ 40°|60°</Text>
          </View>
          <View style={styles.forecastRow}>
              <Text style={styles.weekday}>Mon</Text>
              <Text style={styles.weekday}>☀️ 36°|63°</Text>
          </View>
          <View style={styles.forecastRow}>
              <Text style={styles.weekday}>Tue</Text>
              <Text style={styles.weekday}>☀️ 39°|71°</Text>
          </View>
          <View style={styles.forecastRow}>
              <Text style={styles.weekday}>Wed</Text>
              <Text style={styles.weekday}>☀️ 42°|70°</Text>
          </View>
      </View>
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
  searchBar: {
    backgroundColor: '#8E8E8E',
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    margin: 'auto'
  },
  temperature: {
    fontSize: 68,
    margin: 'auto'
  },
  highAndLow: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto'
  },
  weeklyForecast: {
    height: 280,
    width: 360,
    borderColor: '#8E8E8E',
    borderRadius: 10,
    borderWidth: 6,
    display: 'flex',
    flexDirection: 'column',
  },
  weekday: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  forecastRow: {
    height: 40,
    width: 340,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
