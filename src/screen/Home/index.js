import React from 'react';
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import Card from '../../components/Card';
import styles from './styles';
const sunny = require('../../../assets/sunny.png');

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

const Home = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.text}>Wednesday, 11 Jan 2020 </Text>
                <Text style={styles.temperature}>82</Text>
                <Text style={styles.weather}>Sunny</Text>
                <View style={styles.weatherIconWrapper}>
                    <Image source={sunny} style={styles.weatherIcon} />
                </View>
                {dummyData &&
                    dummyData.map(item => {
                        return <Card onPress={() => navigation.navigate('Reminder', { data: item })} key={item.id} data={item} />
                    })}
            </ScrollView>
        </>
    );
};

export default Home;
