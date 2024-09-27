import {StyleSheet} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(10),
  },
  label: {
    marginBottom: moderateScale(5),
    fontWeight: 'bold',
    color: '#181818',
  },
  picker: {
    height: 50,
    width: '100%',
  },
});
export default styles;
