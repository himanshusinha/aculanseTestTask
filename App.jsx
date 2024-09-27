import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigations/MainNavigation';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
