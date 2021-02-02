import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import {
    StyleSheet, Text, View, Button,
    Image, TouchableOpacity
} from 'react-native';

export default function Patients() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details</Text>
            <Image
                style={styles.logo}
                source={require('../assets/quarantine-icon.png')}
            />
            <Text style={styles.subTitle}>To view the details of a self quarantined person in your area,</Text>
            <Searchbar
                placeholder="Type a name...."
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.s}
                inputStyle={{fontFamily: 'Nunito-Italic',}}
            />
            <Text style={styles.subTitle}>To add the details of a new self quarantined person in your area,</Text>
            <TouchableOpacity
                        onPress={() => {}}
                        style={[styles.signin, {
                            backgroundColor: '#009387',
                            borderColor:'#009387',
                            borderWidth: 1,
                            marginTop: 15,
                            
                        }]}
            >
                <Text
                            style={[styles.textSign, {
                                color: '#fff',
                            }]}
                        >Add New</Text>
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
            fontSize: 30,
            fontFamily: "Nunito-ExtraBoldItalic",
            padding:20,
        },
        subTitle: {
            fontSize: 15,
            padding: 20,
            fontFamily: "Nunito-Italic"
    },
    s: {
            width: '90%',
            borderColor: '#009387',
            borderWidth: 2,
            
    },
    signin: {
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    textSign: {
        fontSize:18,
        fontFamily: 'Nunito-ExtraBoldItalic', 
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

