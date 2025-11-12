// Exercise3A
import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {absoluteFill} from "react-native/Libraries/StyleSheet/StyleSheetExports";

const styles = StyleSheet.create({
    BigBox: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
    },
    Child1: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
})

const Exercise3A = () => {
    return (
        <View style={styles.BigBox}>
            <Text style={[styles.Child1, {backgroundColor: 'powderblue'}]}>Child One</Text>
            <Text style={[styles.Child1, {backgroundColor: 'skyblue'}]}>Child Two</Text>
            <Text style={[styles.Child1, {backgroundColor: 'steelblue'}]}>Child Three</Text>
        </View>
    );
};

export default Exercise3A;