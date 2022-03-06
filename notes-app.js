import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.notes}></TextInput>
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
  notes: {
    minHeight: 90,
    width: 100,
    backgroundColor: '#333333',
    color: 'white',
    fontSize: 18,
    flexDirection: 'row',
    flexWrap: "wrap",
    overflow: "scroll"
  }
});
