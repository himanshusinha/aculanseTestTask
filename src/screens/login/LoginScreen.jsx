import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import WrapperContainer from '../../components/wrappercontainer/WrapperContainer';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import images from '../../constants/images';
import strings from '../../constants/strings';
import fonts from '../../constants/fonts';
import ButtonComp from '../../components/buttonComp/ButtonComp';
import styles from './styles';
import colors from '../../constants/colors';
import OTPTextView from 'react-native-otp-textinput';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../navigations/navigationString';
import TextInputComp from '../../components/textinputcomp/TextInputComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createTable, getDrivers} from '../../utils/DBHelper';

const LoginScreen = () => {
  const [mobile, setMobile] = useState('');
  const [driversInfo, setDriversInfo] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchDrivers();
    createTable();
  }, []);

  const fetchDrivers = () => {
    getDrivers(setDriversInfo);
  };

  const validateMobile = mobile => {
    const mobileRegex = /^\d{10}$/; // Adjust based on your requirements (e.g., length, format)
    return mobileRegex.test(mobile);
  };

  const handleLogin = async () => {
    // Trim mobile input
    const trimmedMobile = mobile.trim();

    // Validate mobile number
    if (!trimmedMobile) {
      Alert.alert('Validation Error', 'Please enter mobile number');
      return;
    }
    if (!validateMobile(trimmedMobile)) {
      Alert.alert(
        'Validation Error',
        'Please enter a valid mobile number (10 digits).',
      );
      return;
    }

    // Check if user exists
    const user = driversInfo.find(driver => driver.mobile === trimmedMobile);
    console.log(user, '.....user');
    if (user) {
      await AsyncStorage.setItem('userSession', JSON.stringify(user));
      navigation.navigate(navigationString.OTP_VERIFY_SCREEN, {user: user});
    } else {
      Alert.alert(
        'Login Failed',
        'Mobile number not found in database. Please try again.',
      );
    }
  };
  return (
    <WrapperContainer style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1}}>
            <ImageBackground
              resizeMode="cover"
              source={images.bg_two}
              style={{
                width: '100%',
                height: moderateScale(350),
              }}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <View
                  style={{
                    paddingHorizontal: 40,
                    marginBottom: moderateScale(200),
                  }}>
                  <Text
                    style={{
                      color: colors.black,
                      fontFamily: fonts.URBANIST_LIGHT,
                      fontSize: textScale(27),
                      fontWeight: 'bold',
                    }}>
                    {strings.ENTER}
                  </Text>
                  <Text
                    style={{
                      color: colors.grey,
                      fontFamily: fonts.URBANIST_BOLD,
                      fontSize: textScale(25),
                      textAlign: 'flex-start',
                      fontWeight: '400',
                    }}>
                    {strings.YOUR_CREDENTIALS}
                  </Text>
                </View>
              </View>
            </ImageBackground>

            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <ImageBackground
                resizeMode="cover"
                source={images.bg_one}
                style={{
                  width: '100%',
                  height: moderateScale(300),
                  justifyContent: 'flex-end', // Align content to the bottom
                }}>
                <View
                  style={{
                    paddingHorizontal: moderateScale(30),
                    paddingBottom: moderateScale(40), // Padding for the button
                  }}>
                  <TextInputComp
                    value={mobile}
                    placeholder={strings.MOBILE}
                    onChangeText={value => setMobile(value)}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholderTextColor={'#bfbfbf'}
                    keyboardType={'phone-pad'}
                  />
                  <ButtonComp
                    onPress={handleLogin}
                    text={strings.CONTINUE}
                    style={styles.buttontyle}
                    textStyle={styles.textStyle}
                    activeOpacity={1}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: colors.grey,
                        fontFamily: fonts.URBANIST_BOLD,
                        fontSize: textScale(16),
                        textAlign: 'flex-start',
                        fontWeight: '400',
                      }}>
                      Don't have an account
                    </Text>
                    <Pressable
                      onPress={() =>
                        navigation.navigate(navigationString.SIGN_UP_SCREEN)
                      }>
                      <Text
                        style={{
                          color: colors.black,
                          fontFamily: fonts.URBANIST_BOLD,
                          fontSize: textScale(16),
                          textAlign: 'flex-start',
                          fontWeight: 'bold',
                        }}>
                        {' '}
                        Sign Up ?
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </WrapperContainer>
  );
};

export default LoginScreen;
