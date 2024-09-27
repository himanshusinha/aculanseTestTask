//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

// create a component
const ButtonComp = ({
  onPress = () => {},
  text = '',
  style = {},
  leftImg = null,
  textStyle = {},
  isLoading = false,
  activeOpacity,
}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...style}}
      onPress={onPress}
      activeOpacity={activeOpacity}>
      {!!leftImg ? <Image source={leftImg} /> : <View />}

      {isLoading ? (
        <ActivityIndicator size={'small'} color={'white'} />
      ) : (
        <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
      )}

      <View />
    </TouchableOpacity>
  );
};

//make this component available to the app
export default ButtonComp;
