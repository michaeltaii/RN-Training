import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

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

const Reminder = ({route}) => {
  const {data} = route.params;

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.rmd}>{item.reminder}</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.details}>{data.weather}</Text>
          <Text style={styles.details}>{data.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={dummyData}
          renderItem={renderItem}
          keyExtractor={key => key.id}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 25,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  rmd: {
    fontSize: 16,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    fontSize: 12,
    color: 'grey',
  },
});

export default Reminder;
