import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        padding: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.3
    },
    reminder: {
        fontWeight: '400',
        fontSize: 16
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    details: {
        fontSize: 12,
        color: 'grey'
    }

});

export default styles;
