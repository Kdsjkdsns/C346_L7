// Main file : App.js
import React from 'react';
import {View, Text} from 'react-native';


const MyApp = () => {
    return (
        <View style={{marginTop: 40, flex: 1}}>
            <Text style={{fontSize: 24}}>RP Values</Text>
            <Text style={{color: 'green'}}>Excellence</Text>
            <Text style={{backgroundColor: 'yellow'}}>Customer-Centric</Text>
            <Text style={{fontStyle: 'italic'}}>Integrity</Text>
            <Text style={{textAlign: 'center'}}>Teamwork</Text>
            <Text style={{backgroundColor: 'black', color: 'white'}}>"Enterprising</Text>
        </View>
    );
};

export default MyApp;

