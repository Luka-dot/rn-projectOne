import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MarkedItem = props => {
    return (
        <TouchableOpacity onPress={props.onMark.bind(this, props.id)} activeOpacity={0.8} onLongPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
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