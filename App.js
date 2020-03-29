import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, ScrollView } from 'react-native';
import Card from './src/components/Card';

const sunny = require('./assets/sunny.png');

const dummyData = [
  {
    id: 0,
    date: '1/4/2020, Wed',
    weather: 'Sunny',
    temperature: '79-87',
  },
  {
    id: 1,
    date: '2/4/2020, Thur',
    weather: 'Rainy',
    temperature: '70-80',
  },
  {
    id: 2,
    date: '3/4/2020. Fri',
    weather: 'Thunderstorm',
    temperature: '76-78',
  },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Singapore, Singapore</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Wednesday, 11 Jan 2020 </Text>
        <Text style={styles.temperature}>82</Text>
        <Text style={styles.weather}>Sunny</Text>
        <View style={styles.weatherIconWrapper}>
          <Image source={sunny} style={styles.weatherIcon} />
        </View>
        {dummyData &&
          dummyData.map(item => {
            return <Card key={item.id} data={item} />;
          })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#2A4755',
  },
  headerText: {
    paddingTop: 60,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    padding: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  weatherIconWrapper: {
    top: -85,
    left: '57%',
  },
  temperature: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
    fontSize: 48,
  },
  weatherWrapper: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  weather: {
    color: 'grey',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  iconStyle: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 0.3,
  },
  iconContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingRight: 40,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  date: {
    textAlign: 'left',
    color: '#22252A',
    fontWeight: '400',
    fontSize: 16,
    paddingVertical: 10,
  },
  smallTemperature: {
    textAlign: 'center',
    color: '#22252A',
    fontWeight: '500',
    fontSize: 28,
    paddingVertical: 10,
  },
});

export default App;
