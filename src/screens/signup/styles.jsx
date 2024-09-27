import {Platform, StyleSheet} from 'react-native';
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
    color: colors.white,
  },
  textStyle: {
    fontWeight: 'bold',
    color: colors.white,
  },
  imageStyle: {width: '70%', height: 100, alignSelf: 'center'},
  buttonContainer: {marginTop: moderateScale(20)},
});
export default styles;
