import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';
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
  buttonPhoneStyle: {
    height: moderateScale(50),
    backgroundColor: colors.white_primary,
    borderRadius: 10,
    marginBottom: moderateScale(10),
    borderWidth: 0.5,
    borderColor: colors.grey,
    bottom: moderateScale(60),
  },

  textPhonrStyle: {
    fontWeight: 'bold',
    color: colors.grey,
    fontFamily: fonts.URBANIST_BOLD,
  },
  buttonGmailStyle: {
    height: moderateScale(50),
    backgroundColor: colors.grey,
    borderRadius: 10,
    marginBottom: moderateScale(10),
    borderWidth: 0.5,
    borderColor: colors.grey,
    marginBottom: moderateScale(30),
  },

  textGmailStyle: {
    fontWeight: 'bold',
    color: colors.white,
    fontFamily: fonts.URBANIST_BOLD,
  },
  imageStyle: {width: '100%', height: 200, top: 10},
  buttonContainer: {marginTop: moderateScale(20)},

  orTextStyle: {
    color: colors.grey,
    fontSize: textScale(18),
    bottom: moderateScale(35),
    textAlign: 'center',
    fontFamily: fonts.URBANIST_BOLD_ITALIC,
    fontWeight: 'bold',
  },
});
export default styles;
