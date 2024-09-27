// CustomPicker.js
import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

const CustomPicker = ({
  selectedValue,
  onValueChange,
  items,
  placeholder,
  placeholderTextColor,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{placeholder}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}>
        <Picker.Item label={placeholder} value="" />
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))
        ) : (
          <Picker.Item label="No options available" value="" />
        )}
      </Picker>
    </View>
  );
};

export default CustomPicker;
