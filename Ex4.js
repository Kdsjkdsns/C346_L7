import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    huhu: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    Box: {
        width: 80,
        height: 80,
        borderColor: "whitesmoke",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    boxText: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
});

const Exercise4 = () => {
    return (
        <View style={styles.huhu}>
            <View style={[styles.Box, { backgroundColor: "skyblue" }]}>
                <Text style={styles.boxText}>Square 1</Text>
            </View>
            <View style={[styles.Box, { backgroundColor: "mediumaquamarine" }]}>
                <Text style={styles.boxText}>Square 2</Text>
            </View>
            <View style={[styles.Box, { backgroundColor: "crimson" }]}>
                <Text style={styles.boxText}>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;
