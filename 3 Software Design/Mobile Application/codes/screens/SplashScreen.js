import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import {
    StyleSheet, Text, View, Button, Dimensions,
    Image, TouchableOpacity, StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

import SignIn from './SignIn';

export default function SplashScreen({navigation}) {
            return (
                <View style={styles.container}>
                    <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                    <View style={styles.header}>
                        <Text style={[styles.hText, {
                            fontFamily: 'Nunito-ExtraBoldItalic'
                        }]}>Qurantine Tracker</Text>
                        <Animatable.Image
                            //delay={1500}
                            animation={"bounceIn"}
                            source={require('../assets/quarantine-icon.png')}
                            style={styles.logo}
                            resizeMode='stretch'
                        />
                    </View>
                    <Animatable.View
                        style={styles.footer}
                        animation={"fadeInUpBig"}
                    >
                        <Text style={[styles.title, {
                            fontFamily: 'Nunito-ExtraBoldItalic'
                        }]}>For a safe Sri Lanka.</Text>
                        <Text style={styles.text}>Sign in here</Text>
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={()=>navigation.navigate('SignIn')}
                                style={[styles.signin, {
                                backgroundColor: '#009387',
                                borderColor:'#009387',
                                borderWidth: 1,
                                marginTop: 15,
                            
                        }]}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Nunito-ExtraBoldItalic'
                            }}
                                >Get Started</Text>
                                {/* chevron-double-right */}
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </View>
            )
}

const { height } = Dimensions.get("screen");
const heightLogo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#009387'
    },
    header:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        //fontWeight: 'bold',
    },
    hText: {
        fontSize: 30,
        padding: 30,
        fontFamily: 'Nunito-ExtraBoldItalic',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        //fontFamily: 'Nunito-ExtraBoldItalic',
    },
    logo: {
        width: heightLogo,
        height:heightLogo,
    },
    title: {
        color: '#05375a',
        fontSize: 25,
        fontFamily: 'Nunito-ExtraBoldItalic',
    },
    text: {
        color: 'grey',
        marginTop: 5,
        fontFamily: 'Nunito-Italic',
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    signin: {
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        flexDirection:'row'
        
    },
    textSign: {
        color: 'white',
    },
})