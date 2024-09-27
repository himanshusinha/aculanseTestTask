import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';

// define your styles
const styles = StyleSheet.create({
  container: {
    height: moderateScale(52),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(16),
    backgroundColor: colors.grey,
  },
  textStyle: {
    fontSize: textScale(16),
  },
});
export default styles;
