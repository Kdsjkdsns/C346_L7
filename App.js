// Main file : App.js
import React from 'react';
import {View, Text} from 'react-native';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3A from './Ex3A';
import Ex3B from './Ex3B';
import Ex3C from './Ex3C';
import Ex3D from './Ex3D';
import Ex3E from './Ex3E';
import Ex4 from './Ex4';

const MyApp = () => {
    return (
        <View style={{marginTop: 40, flex: 1}}>
            <Text style={{fontSize: 30}}>Lesson 7 exercises:</Text>
            {/*<Ex1 />*/}
            {/*<Ex2 />*/}
            {/*<Ex3A />*/}
            {/*<Ex3B />*/}
            {/*<Ex3C />*/}
            {/*<Ex3D />*/}
            {/*<Ex3E />*/}
            <Ex4 />
        </View>
    );
};

export default MyApp;