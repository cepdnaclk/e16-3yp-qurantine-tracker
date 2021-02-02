import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {
    StyleSheet, Text, View, Button,
    TouchableOpacity,
    Image, Linking, 
} from 'react-native';

export default function ExploreScreen() {
    return (
            <View style={styles.container}>
            <Text Text style={styles.title}>COVID‑19 Information</Text>
            <Text Text style={styles.subTitle}>Click on the buttons below to get updated with
            the latest COVID‑19 NEWS...</Text>
            <TouchableOpacity
                    onPress={() => {
                Linking.openURL('https://covid19.who.int/?gclid=Cj0KCQiA6t6ABhDMARIsAONIYyzpULzmntTarhuOx3hh1w1KrDoCtm4wBkIFXkzlXQjXRX5nzRBdkpoaAlw0EALw_wcB');
            }}
                    style={styles.btn}>
                    <Text style={styles.b}>WHO COVID-19 Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
                    onPress={() => {
                Linking.openURL('https://www.who.int/srilanka');
            }}
                    style={styles.btn}>
                    <Text style={styles.b}>WHO Sri Lanka</Text>
            </TouchableOpacity>

            <TouchableOpacity
                    onPress={() => {
                Linking.openURL('https://covid19.gov.lk/');
            }}
                        style={styles.btn}
                >
                    <Text style={styles.b} >Sri Lanka’s Response to Covid-19</Text>
            </TouchableOpacity>

            <TouchableOpacity
                    onPress={() => {
                Linking.openURL('https://www.hpb.health.gov.lk/en');
            }}
                        style={styles.btn}
                >
                    <Text style={styles.b}>Health Promotion Bureau</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                    onPress={() => {
                Linking.openURL('https://news.google.com/covid19/map?hl=en-US&mid=%2Fm%2F06m_5&gl=US&ceid=US%3Aen');
            }}
                        style={styles.btn}
                >
                    <Text style={styles.b}>COVID‑19 News Google NEWS</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => {
                    Linking.openURL('https://www.google.com/intl/en_lk/covid19/?utm_source=google&utm_medium=referral&utm_campaign=covid-19-SERP');
                }}
                style={styles.btn}
                >
                    <Text style={styles.b}>COVID‑19 Information and Resources</Text>
                </TouchableOpacity>
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
            fontSize: 25,
            fontFamily: "Nunito-ExtraBoldItalic",
            padding:20,
        },
        subTitle: {
            fontSize: 18,
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
            borderRadius:5,
            width: '95%',
            backgroundColor: '#fff',
            borderColor: '#d02860',
            borderWidth: 1,
            marginTop: 15,
            padding: 10,
    },
    b: {
        color: '#d02860',
        fontFamily: 'Nunito-ExtraBoldItalic' 
        },
        logo: {
            width: 150,
            height: 150,
            padding: 80,
        },
    });

