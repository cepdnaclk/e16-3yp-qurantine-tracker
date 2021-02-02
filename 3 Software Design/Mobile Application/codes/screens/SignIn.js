import React,{useState} from 'react';
import {
    StyleSheet, Text, View, Button,
    Dimensions,
    TouchableOpacity,
    Platform,
    TextInput,
    StatusBar,
    Alert
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import Users from '../Model/users';

import { AuthContext } from '../components/context';

export default function SignIn({navigation}) {
    const [data, setData] = useState({
        username: '',
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword:true
    });

    //----------------------------------------------------
    const { SignIn } = React.useContext(AuthContext);
    //----------------------------------------------------

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                checkTextInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                checkTextInputChange: false,
                isValidUser: false
            });
        }
    }
    
    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword:true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword:false
            });
        }  
    }

    const updateSecureEntry = (val) => {
        setData({
                ...data,
                secureTextEntry: !data.secureTextEntry
                
            });
    }

    //----------------------------------------------------
    const handleValidUser = (val) => {
        if(val.trim().length >= 4){
            setData({
                    ...data,
                    isValidUser:true
                    
            });
        } else {
            setData({
                    ...data,
                    isValidUser:false
                    
            });
        }
    }

    const loginHandle = (userName, password) => {
        const foundUser = Users.filter(item => {
            return userName == item.username && password == item.password;
        });
        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username and password fields cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }
        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }
        SignIn(foundUser);
    }
    //----------------------------------------------------

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={[styles.textHeader, {
                    fontFamily: 'Nunito-ExtraBoldItalic'
                }]}>Login</Text>
            </View>
            
            <Animatable.View
                animation={"fadeInUpBig"}
                style={styles.footer}>
                <Text style={styles.textFooter}>Username</Text>
                {/* UserName */}
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Enter Username..."
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
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
                
                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Username must be 4 characters long</Text>
                    </Animatable.View>
                }

                {/* Password */}
                <Text style={[styles.textFooter, {
                    marginTop:35
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
                
                {data.isValidPassword ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long</Text>
                    </Animatable.View>
                }
                
                {/* Reset Password */}
                <TouchableOpacity>
                    <Text style={{
                        color: '#009387', marginTop: 5,
                        fontFamily:'Nunito-Italic',
                    }}>Forgot password?</Text>
                </TouchableOpacity>

                <View style={styles.button}>
                    {/* signIN */}
                    <TouchableOpacity
                        onPress={() => {loginHandle(data.username, data.password)}}
                        style={[styles.signin, {
                            backgroundColor: '#009387',
                            borderColor:'#009387',
                            borderWidth: 1,
                            marginTop: 15,
                            
                        }]}
                    >
                        <Text
                            style={[styles.textSign, {
                                color: 'white',
                            }]}
                        >Sign In</Text>
                    </TouchableOpacity>

                    {/* signUp */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
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
                        >Sign Up</Text>
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
    errorMsg:{
        color:'red',
        fontFamily: 'Nunito-Italic', 
        marginTop:5
    },
})