import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import WeatherIcon from './WeatherIcon';

const Card = props => {
    const { data, onPress } = props;
    const Component = onPress ? TouchableOpacity : View;

    return (
        <Component onPress={onPress} style={styles.itemContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.date}>{data.date}</Text>
                <Text style={styles.smallTemperature}>{data.temperature}</Text>
                <Text style={styles.weather}>{data.weather}</Text>
            </View>
            <View style={styles.iconContainer}>
                <WeatherIcon weather={data.weather} />
            </View>
        </Component>
    );
};

const styles = StyleSheet.create({
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

export default Card;
