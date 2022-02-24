import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightText}>Enter Monthly Income:</Text>
      <Text style={styles.heavyText}>$6,245</Text>
      <Text style={styles.lightText}>Current Budget:</Text>

          <View style={styles.overallContainer}>
                <View>
                    <Text style={styles.categoryName}>Bills</Text>
                    <Text style={styles.lightText}>$1,784 Monthly</Text>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>35%</Text>
                </View>
          </View>

          <View style={styles.overallContainer}>
                <View>
                    <Text style={styles.categoryName}>Transportation</Text>
                    <Text style={styles.lightText}>$819 Monthly</Text>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>16%</Text>
                </View>
          </View>

          <View style={styles.overallContainer}>
                <View>
                    <Text style={styles.categoryName}>Health</Text>
                    <Text style={styles.lightText}>$431 Monthly</Text>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>8%</Text>
                </View>
          </View>


          <View style={styles.overallContainer}>
                <View>
                    <Text style={styles.categoryName}>Groceries</Text>
                    <Text style={styles.lightText}>$412 Monthly</Text>
                </View>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>8%</Text>
                </View>
          </View>

          <View>
            <Text style={styles.lightText}>Money Leftover: $115</Text>
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
  categoryDollar: {
    
  },
  overallContainer: {
    width: 360,
    height: 90,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#4A4A4A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
    }
});
