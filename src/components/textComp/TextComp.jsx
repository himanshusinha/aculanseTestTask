import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const TextComp = ({text = '', style = {}, children, ...props}) => {
  return (
    <Text
      style={{
        ...styles.textStyle,
        ...style,
      }}
      {...props}>
      {text} {children}
    </Text>
  );
};

export default TextComp;
