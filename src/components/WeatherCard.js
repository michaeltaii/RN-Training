import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import WeatherIcon from './WeatherIcon';

const WeatherCard = props => {
  const {data, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.date}>{data.date}</Text>
        <Text style={styles.smallTemperature}>{data.temperature}</Text>
        <Text style={styles.weather}>{data.weather}</Text>
      </View>
      <View style={styles.iconContainer}>
        <WeatherIcon weather={data.weather} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '85%',
    marginVertical: 10,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 0,
    paddingVertical: 10,
    elevation: 2,
  },
  iconContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingRight: 40,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
  },
  date: {
    textAlign: 'left',
    color: '#22252A',
    fontWeight: '600',
    fontSize: 16,
    paddingVertical: 5,
  },
  smallTemperature: {
    textAlign: 'center',
    color: '#22252A',
    fontWeight: '500',
    fontSize: 28,
    paddingVertical: 5,
  },
});

export default WeatherCard;
