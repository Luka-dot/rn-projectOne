import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MarkedItem = props => {
    return (
        <View>
        <View style={styles.listItem}>
        <Text>{props.title}</Text>
        </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    listItem: {
        padding: 10,
        marginTop: 5,
        backgroundColor: 'orange',
        borderColor: 'black',
        borderWidth: 1
      }
})

export default MarkedItem;