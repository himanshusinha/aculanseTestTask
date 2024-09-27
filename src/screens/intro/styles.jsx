import {StyleSheet} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyle: {
    height: moderateScale(50),
    backgroundColor: colors.grey,
    borderRadius: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    color: colors.white,
    fontFamily: fonts.URBANIST_BOLD,
  },
  imageStyle: {width: '100%', height: 200, top: 10},
  buttonContainer: {marginTop: moderateScale(20)},
});
export default styles;
