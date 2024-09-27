import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const TextInputComp = ({
  value = '',
  onChangeText,
  placeholder = '',
  secureText = false,
  onPressSecure = () => {},
  inputStyle = {},
  textStyle = {},
  autoCapitalize,
  autoCorrect,
  placeholderTextColor,
  ...props
}) => {
  return (
    <View
      style={{
        ...styles.inputStyle,
        ...inputStyle,
      }}>
      <TextInput
        style={{
          ...styles.textStyle,
          ...textStyle,
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        {...props}
      />
      {!!secureText ? (
        <Text style={{...styles.textStyle, flex: 0}} onPress={onPressSecure}>
          {secureText}
        </Text>
      ) : null}
    </View>
  );
};

export default TextInputComp;
