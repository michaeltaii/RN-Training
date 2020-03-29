import React from 'react';
import { Image, StyleSheet } from 'react-native';

const sunny = require('../../assets/sunny.png');
const rainy = require('../../assets/rainy.png');
const thunderstorm = require('../../assets/thunderstorm.png');

const WeatherIcon = props => {
    switch (props.weather) {
        case 'Sunny':
            return <Image source={sunny} style={styles.iconStyle} />;
        case 'Rainy':
            return <Image source={rainy} style={styles.iconStyle} />;
        case 'Thunderstorm':
            return <Image source={thunderstorm} style={styles.iconStyle} />;
        default:
            return null;
    }
};

const styles = StyleSheet.create({
    iconStyle: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
});

export default WeatherIcon;
