import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {
    StyleSheet, Text, View, TextInput, Image,
    Keyboard, Button,
    TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';


import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
    'HachiMaruPop-Regular': require('../assets/fonts/Nunito-Italic.ttf'),
    'Nunito-ExtraBoldItalic': require('../assets/fonts/Nunito-ExtraBoldItalic.ttf'),
    'Nunito-ExtraLightItalic': require('../assets/fonts/Nunito-ExtraLightItalic.ttf'),
});

export default function AboutScreen({ navigation }) {
    
    const [fontsLoaded, setFontsLoaded] = useState(false);
    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text Text style={styles.title}>Welcome to</Text>
                <Text Text style={styles.title}>Notifications Tab</Text>
                <Text style={styles.subTitle}>Nothing to show</Text>
            </View>
        )
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={() => console.log('error')}
            />
        )
    }
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
            fontFamily: "Nunito-ExtraBoldItalic"
        },
        subTitle: {
            fontSize: 25,
            padding: 10,
            fontFamily: "Nunito-ExtraLightItalic"
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
