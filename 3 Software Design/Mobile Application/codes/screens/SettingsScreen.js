import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {
    StyleSheet, Text, View, Button,
    Image,
} from 'react-native';

export default function SettingsScreen() {
    return (
            <View style={styles.container}>
            <Text Text style={styles.title}>Account Settings</Text>
            <Image
                style={styles.logo}
                source={require('../assets/quarantine-icon.png')}
            />
            </View>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontSize: 30,
            fontFamily: "Nunito-ExtraBoldItalic",
            padding:20,
        },
        subTitle: {
            fontSize: 25,
            padding: 10,
            fontFamily: "Nunito-Italic"
        },
        input: {
            width: '90%',
            backgroundColor: '#fff',
            padding: '1%',
            marginBottom: 10,
            fontFamily: "Nunito-ExtraLightItalic",
        },
        btnContainer: {
            flexDirection: 'row',
            justifyContent: "space-between",
            width: '90%',
        },
        btns: {
            backgroundColor: '#FFD700',
            padding: 15,
            width: '45%',
        },
        btn: {
            fontFamily: "Nunito-ExtraBoldItalic",
            alignSelf: 'center',
        },
        logo: {
            width: 150,
            height: 150,
            padding: 80,
        },
    });

