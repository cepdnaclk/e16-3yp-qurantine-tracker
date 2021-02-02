import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {
    StyleSheet, View, TextInput, Image,
    Keyboard, Button,
    TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';

//From react-native-paper
import {
    Avatar, Title, Caption, Paragraph,
    Drawer, Text, TouchableRipple, 
    Switch
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { AuthContext } from '../components/context';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
    'HachiMaruPop-Regular': require('../assets/fonts/Nunito-Italic.ttf'),
    'Nunito-ExtraBoldItalic': require('../assets/fonts/Nunito-ExtraBoldItalic.ttf'),
    'Nunito-ExtraLightItalic': require('../assets/fonts/Nunito-ExtraLightItalic.ttf'),
});

export default function DrawerContent(props) {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    // const [isDarkTheme, setIsDarkTheme] = useState(false);

    const { SignOut } = React.useContext(AuthContext);
    
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
    
    if (fontsLoaded) {
    return (
        <View style = {{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Lorem Ipsum</Title>
                                <Caption style={styles.caption}>loremipsum@gmail.com</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Home'
                            onPress = {()=>{props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Profile'
                            onPress = {()=>{props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="rocket-launch-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Explore'
                            onPress = {()=>{props.navigation.navigate('Explore')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="hospital-box-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Details'
                            onPress = {()=>{props.navigation.navigate('Patients')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cog-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Account Settings'
                            onPress = {()=>{props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline" 
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Support'
                            onPress = {()=>{props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress = {()=>{toggleTheme()}}>
                            <View style = {styles.preference}>
                                <Text style={
                                    {fontFamily:'Nunito-ExtraBoldItalic',color:'grey'}
                                }>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style = {styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label='Sign Out'
                    onPress = {()=>{SignOut()}}
                />
            </Drawer.Section>
        </View>
    );
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
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 17,
        marginTop: 3,
        fontFamily:'Nunito-ExtraBoldItalic',
    },
    caption: {
        fontSize: 14,
        lineHeight: 15,
        fontFamily:'Nunito-ExtraBoldItalic',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 1
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
