import React, { useState, useEffect, useMemo } from 'react';
import AppLoading from 'expo-app-loading';
import {View, ActivityIndicator} from 'react-native';

//.................................Navigation...........................................
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//......................................................................................

import { AuthContext} from './components/context';

import { AsyncStorage } from '@react-native-async-storage/async-storage';

//.................................Fonts................................................
import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
  'HachiMaruPop-Regular': require('./assets/fonts/HachiMaruPop-Regular.ttf'),
  'Nunito-Italic': require('./assets/fonts/Nunito-Italic.ttf'),
  'Nunito-ExtraBoldItalic': require('./assets/fonts/Nunito-ExtraBoldItalic.ttf'),
  'Nunito-ExtraLightItalic': require('./assets/fonts/Nunito-ExtraLightItalic.ttf'),
});
//......................................................................................

//----------------------------------Screens---------------------------------------------

//DrawerContent
import DrawerContent from './screens/DrawerContent';

//MainTabScreen
import MainTabScreen from './screens/MainTabScreen';

//SupportScreen
import SupportScreen from './screens/SupportScreen';

//SettingsScreen
import SettingsScreen from './screens/SettingsScreen';

//Patients
import Patients from './screens/Patients';

//RootStackScreen
import RootStackScreen from './screens/RootStackScreen';


//ExploreScreen
import ExploreScreen from './screens/ExploreScreen';

//-------------------------------------------------------------------------------------

//.....................................................................................
const Drawer = createDrawerNavigator();
//.....................................................................................

//-------------------------------------------------------------------------------------
export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  //--------------------------------------------------------------------------------------
  //Authentication
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);
  //--------------------------------------------------------------------------------------
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE-TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading:false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading:false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading:false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading:false,
        };
    }
  };
  //--------------------------------------------------------------------------------------
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  //--------------------------------------------------------------------------------------
  const authContext = useMemo(() => ({
    SignIn: async (foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
        try { 
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e)
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    SignOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try { 
          await AsyncStorage.removeItem('userToken')
        } catch (e) {
          console.log(e)
      }
      dispatch({ type: 'LOGOUT'});
    },
    SignUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      try { 
        userToken = await AsyncStorage.getItem('userToken');
        } catch (e) {
          console.log(e)
      }
      //setIsLoading(false);
      dispatch({ type: 'RETRIEVE-TOKEN', token: userToken});
    },1000);
  }, []);

  //--------------------------------------------------------------------------------------
  if (loginState.isLoading) {
      return (
        <View
        style={{flex:1,justifyContent:'center',alignItems:'center'}}
        >
          <ActivityIndicator size = "large"/>
        </View>
      );
    }

  if (fontsLoaded) {

    return (
      <AuthContext.Provider value = {authContext}>
        <NavigationContainer>
          {loginState.userToken != null ? (
            <Drawer.Navigator drawerContent={props=><DrawerContent{...props}/>}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="Patients" component={Patients} />
              <Drawer.Screen name="ExploreScreen" component={ExploreScreen} />
            </Drawer.Navigator> 
          )
            :
            <RootStackScreen/>
        }
        </NavigationContainer>
      </AuthContext.Provider>
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
//--------------------------------------------------------------------------------------
