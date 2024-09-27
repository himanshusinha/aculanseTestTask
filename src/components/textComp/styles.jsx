import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {textScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: textScale(12),
    color: colors.grey, // Set a default color
  },
});
export default styles;
