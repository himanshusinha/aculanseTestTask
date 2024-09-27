import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  inputStyle: {
    height: moderateScale(52),
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
    marginBottom: moderateScaleVertical(16),
    borderColor: '#000',
    borderWidth: 0.5,
  },
  textStyle: {
    fontSize: textScale(14),
    flex: 1,
  },
});
export default styles;
