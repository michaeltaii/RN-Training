import React, {useEffect, useState} from 'react';
import {
  Text,
  StatusBar,
  Image,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import WeatherCard from '../components/WeatherCard';

import {API_KEY, API_URL, LOCATION} from '@env';

const sunny = require('../../assets/sunny.png');

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

const Home = ({navigation}) => {
  const [weatherData, setWeatherData] = useState({
    data: [],
    temp: '30',
    weather: 'Sunny',
  });

  const netInfo = useNetInfo();

  useEffect(() => {
    if (netInfo.isConnected) {
      loadWeatherData();
      loadWeatherForecast();
    } else {
      return Alert.alert('No connection is detected');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [netInfo.isConnected]);

  const loadWeatherData = async () => {
    const url = `${API_URL}/weather?q=${LOCATION}&APPID=${API_KEY}`;
    console.log('function called');

    try {
      await fetch(url)
        .then(response => response.json())
        .then(res => {
          setWeatherData({
            ...weatherData,
            temp: Math.floor((res.main.temp - 273) * (9 / 5) + 32),
            weather: res.weather[0].main,
          });
          console.log(weatherData.temp);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const loadWeatherForecast = async () => {
    console.log('function called');
    const url = `${API_URL}/forecast?q=${LOCATION}&APPID=${API_KEY}`;
    try {
      await fetch(url)
        .then(response => response.json())
        .then(res => {
          console.log(res);
          let data = [];
          res.list.map(weather => {
            const result = {
              id: weather.dt,
              date: weather.dt_txt,
              temperature: Math.floor((weather.main.temp - 273) * (9 / 5) + 32),
              weather: weather.weather[0].main,
            };
            data.push(result);
          });
          setWeatherData({...weatherData, data});
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.dateTime}>Tuesday, 5 Oct 2021 </Text>
        <Text style={styles.weatherTemp}>{weatherData.temp}</Text>
        <Text style={styles.weatherDesc}>{weatherData.weather}</Text>
        <Image source={sunny} style={styles.weatherIcon} />
        {dummyData &&
          dummyData.map(item => {
            return (
              <WeatherCard
                onPress={() => navigation.navigate('Reminder', {data: item})}
                key={item.id}
                data={item}
              />
            );
          })}

        {/* {weatherData.data &&
          weatherData.data.map(item => {
            return (
              <Card
                onPress={() => navigation.navigate('Reminder', {data: item})}
                key={item.id}
                data={item}
              />
            );
          })} */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  dateTime: {
    padding: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  weatherTemp: {
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
  weatherDesc: {
    color: 'grey',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  weatherIcon: {
    top: -85,
    left: '57%',
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

export default Home;
