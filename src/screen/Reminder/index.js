import React from 'react';
import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native';
import styles from './styles';

const dummyData = [
    {
        id: 0,
        reminder: 'Bring umbrella',
    },
    {
        id: 1,
        reminder: 'Go to the park',
    },
];

const Reminder = ({ route }) => {
    const { data } = route.params;

    const renderItem = (item) => {
        return <View style={styles.itemContainer}>
            <Text style={styles.reminder}>{item.reminder}</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.details}>{data.weather}</Text>
                <Text style={styles.details}>{data.date}</Text>
            </View>
        </View>
    }

    return (
        <>
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.container}>
                <FlatList
                    data={dummyData}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </>
    );
};

export default Reminder;
