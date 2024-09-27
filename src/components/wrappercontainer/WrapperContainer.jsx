//import liraries
import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';

const WrapperContainer = ({style = {}, children}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...style,
      }}>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </View>
  );
};

export default WrapperContainer;
