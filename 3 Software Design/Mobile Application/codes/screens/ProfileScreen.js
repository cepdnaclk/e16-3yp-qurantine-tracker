import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {
    StyleSheet, Text, View, Button,
    Image,TouchableOpacity
} from 'react-native';

export default function ProfileScreen() {
    return (
            <View style={styles.container}>
            <Text Text style={styles.title}>Profile</Text>
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
                }}
            />
            <View>
                <Text style={styles.subTitle}>Name: Lorem Ipsum</Text>
                <Text style={styles.subTitle}>NIC: 893655463V</Text>
                <Text style={styles.other}>Division: Division</Text>
                <Text style={styles.other}>District: District</Text>
                <Text style={styles.other}>Province: Province</Text>
            </View>
                <TouchableOpacity
                    onPress={()=>{}}
                        style={[styles.btn, {
                        backgroundColor: 'white',
                        borderColor:'#1f65ff',
                        borderWidth: 1,
                        marginTop: 15,
                        padding: 10,
                            
                    }]}
                >
                    <Text
                        style={{
                            color: '#1f65ff',
                            fontFamily: 'Nunito-ExtraBoldItalic'
                        }}
                    >Edit Profile</Text>
                {/* chevron-double-right */}
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
            fontSize: 18,
            padding: 10,
            fontFamily: "Nunito-Italic"
        },
        other: {
            fontSize: 15,
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
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
            flexDirection: 'row',
        fontFamily: "Nunito-ExtraBoldItalic",
    },
        logo: {
            width: 150,
            height: 150,
            padding: 80,
        },
    });

