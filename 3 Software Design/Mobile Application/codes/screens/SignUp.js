import React,{useState} from 'react';
import {
    StyleSheet, Text, View, Button,
    Dimensions,
    TouchableOpacity,
    Platform,
    TextInput,
    StatusBar,
} from 'react-native';

import SignIn from './SignIn';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default function SignUp({navigation}) {
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword:'',
        checkTextInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true,
    });
    //----------------------------------------------------
    //Email
    //----------------------------------------------------
    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                checkTextInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                checkTextInputChange: false
            });
        }
    }
    //----------------------------------------------------
    //Password
    //----------------------------------------------------
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });    
    }

    const updateSecureEntry = (val) => {
        setData({
                ...data,
                secureTextEntry: !data.secureTextEntry
                
            });
    }
    //----------------------------------------------------
    //Confirm password
    //----------------------------------------------------
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val,
        });    
    }

    const updateConfirmSecureEntry = (val) => {
        setData({
                ...data,
                confirmSecureTextEntry: !data.confirmSecureTextEntry
                
            });
    }
     //----------------------------------------------------
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Register now!</Text>
            </View>

            <Animatable.View
                animation={"fadeInUpBig"}
                style={styles.footer}>
                
                <Text style={styles.textFooter}>Email</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Enter Email..."
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val)=>textInputChange(val)}
                    />
                    {data.checkTextInputChange ?
                        <Animatable.View
                            animation={"bounceIn"}
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                    : null}
                </View>

                <Text style={[styles.textFooter, {
                    marginTop:15
                }]}>Password</Text>

                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Enter Password..."
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val)=>handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                        :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <Text style={[styles.textFooter, {
                    marginTop:35
                }]}>Confirm Password</Text>

                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Confirm Password..."
                        secureTextEntry={data.confirmSecureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val)=>handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureEntry}
                    >
                        {data.confirmSecureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                        :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    {/* <Button
                        title="Login"
                        onPress={() => alert('button pressed')}
                        color='#009387'
                    /> */}
                    <TouchableOpacity
                        onPress={() => alert('hi')}
                        style={[styles.signin, {
                            backgroundColor: '#009387',
                            borderColor:'#009387',
                            borderWidth: 1,
                            marginTop: 15,
                            
                        }]}
                    >
                        <Text
                            style={[styles.textSign, {
                                color: 'white'
                            }]}
                        >Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignIn')}
                        style={[styles.signin, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15,
                            
                        }]}
                    >
                        <Text
                            style={[styles.textSign, {
                                color:'#009387'
                            }]}
                        >Sign In</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#009387'
    },
    header:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom:50,
        //fontFamily: 'Nunito-ExtraBoldItalic',
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
        //fontFamily: 'Nunito-ExtraBoldItalic',
    },
    textHeader: {
        color: '#fff',
        fontFamily: 'Nunito-ExtraBoldItalic',
        fontSize: 30,
    },
    textFooter: {
        color: '#05375a',
        fontSize: 18,
        fontFamily: 'Nunito-ExtraBoldItalic',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom:5,
        //fontFamily: 'Nunito-ExtraBoldItalic',
    },
    textInput: {
        flex:1,
        color: '#05375a',
        marginTop: Platform.OS =='ios' ? 0 : -6,
        paddingLeft: 10,
        paddingBottom:0,
        fontFamily: 'Nunito-Italic',
    },
    button: {
        justifyContent:'space-around',
        alignItems: 'center',
        marginTop: 50,
    },
    signin: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize:18,
        fontFamily: 'Nunito-ExtraBoldItalic', 
    },
})