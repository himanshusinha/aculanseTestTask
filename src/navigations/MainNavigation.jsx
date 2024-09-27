import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationString from './navigationString';
import * as Screens from '../screens/index';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = async () => {
    const userSession = await AsyncStorage.getItem('userSession');
    setIsLoggedIn(!!userSession);
    setIsLoading(false);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.clear(); // Clear AsyncStorage
    await checkLoginStatus(); // Re-check login status after clearing
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name={navigationString.HOME_SCREEN}
            component={props => (
              <Screens.HomeScreen {...props} onLogout={handleLogout} />
            )}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={navigationString.INTRO_SCREEN}
            component={Screens.IntroScreen}
          />
          <Stack.Screen
            name={navigationString.WELCOME_SCREEN}
            component={Screens.WelcomeScreen}
          />
          <Stack.Screen
            name={navigationString.LOGIN_SCREEN}
            component={Screens.LoginScreen}
          />
          <Stack.Screen
            name={navigationString.SIGN_UP_SCREEN}
            component={Screens.SignUpScreen}
          />
          <Stack.Screen
            name={navigationString.OTP_VERIFY_SCREEN}
            component={Screens.OtpVerifyScreen}
          />
          <Stack.Screen
            name={navigationString.HOME_SCREEN}
            component={props => (
              <Screens.HomeScreen {...props} onLogout={handleLogout} />
            )}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigation;
