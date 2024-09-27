import {StyleSheet} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: 'center',
  },
  titleStyle: {
    height: moderateScale(45),
    backgroundColor: colors.grey,
    borderRadius: 10,
  },
  textStyle: {
    fontWeight: 'bold',
  },
  buttontyle: {
    height: moderateScale(50),
    backgroundColor: colors.grey,
    borderRadius: 10,
    borderWidth: 0.5,
    width: '100%',
    borderColor: colors.grey,
    marginTop: moderateScale(140),
  },

  textStyle: {
    fontWeight: 'bold',
    color: colors.white,
  },
});
export default styles;
