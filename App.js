import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';

const sunny = require('./assets/sunny.png')

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Singapore, Singapore</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Wednesday, 11 Jan 2020 </Text>
        <Text style={styles.temperature}>82</Text>
        <Text style={styles.weather}>Sunny</Text>
        <View style={styles.weatherIconWrapper}>
          <Image source={sunny} style={styles.weatherIcon} />
        </View>
      </View>
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
});

export default App;
