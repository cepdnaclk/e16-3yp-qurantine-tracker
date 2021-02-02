import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from '@expo/vector-icons/Ionicons'; 
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

//HomeScreen
import HomeScreen from './HomeScreen';

//AboutScreen
import AboutScreen from './AboutScreen';

//ExploreScreen
import ExploreScreen from './ExploreScreen';

//ProfileScreen
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor:'#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={AboutStackScreen}
            options={{
                tabBarLabel: 'Updates',
                tabBarColor:'#694fad',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor:'#1f65ff',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor:'#d02860',
            tabBarIcon: ({ color }) => (
                <IconM name="rocket" color={color} size={26} />
                //ios-aperture
            ),
            }}
            />
    </Tab.Navigator>
);

export default MainTabScreen;

//HomeStack
const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
            backgroundColor:'#009387'
            }
        }}
        >
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                headerTitleStyle: {
                    fontFamily: 'Nunito-ExtraBoldItalic',
                },
                headerLeft: () => (
                <Icon name="ios-menu" size={30} color="white"
                    onPress={() => navigation.openDrawer()}
                />
                )
            }}/>
            </HomeStack.Navigator>
    );
}

//AboutStack
const AboutStackScreen = ({navigation}) => {
    return (
        <AboutStack.Navigator
        screenOptions={{
            // headerTitleAlign: 'center',
            // headerStyle: {
            // backgroundColor:'#1f65ff',
            // }
            headerShown: false
        }}
        >
        <AboutStack.Screen name="About" component={AboutScreen} options={{
                headerTitleStyle: {
                    fontFamily: 'Nunito-ExtraBoldItalic',
                },
                headerLeft: () => (
                <Icon name="ios-menu" size={30} color="white"
                onPress={() => navigation.openDrawer()}
            />
            )
        }}/>
            </AboutStack.Navigator>
    );
}