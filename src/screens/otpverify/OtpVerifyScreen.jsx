import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../components/wrappercontainer/WrapperContainer';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import images from '../../constants/images';
import strings from '../../constants/strings';
import fonts from '../../constants/fonts';
import ButtonComp from '../../components/buttonComp/ButtonComp';
import styles from './styles';
import colors from '../../constants/colors';
import OTPTextView from 'react-native-otp-textinput';
import {useNavigation, useRoute} from '@react-navigation/native';
import navigationString from '../../navigations/navigationString';

const OtpVerifyScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation(); // Get the navigation object
  const route = useRoute();
  const user = route?.params?.user;
  console.log(user, ',,,,,,otp user');
  const handleVerifyOtp = () => {
    if (otp === '1234') {
      navigation.navigate(navigationString.HOME_SCREEN, {user}); // Navigate to HomeScreen on success
    } else {
      Alert.alert('Invalid OTP', 'Please enter the correct OTP.'); // Show alert on failure
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
                    {strings.OTP}
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
                  <OTPTextView
                    textInputStyle={{
                      color: colors.grey,
                      bottom: moderateScale(150),
                    }}
                    handleTextChange={setOtp}
                    inputCount={4}
                    keyboardType="numeric"
                    autoFocus
                    tintColor={colors.black}
                    offTintColor={colors.grey}
                  />
                  <ButtonComp
                    onPress={handleVerifyOtp}
                    text={strings.CONTINUE}
                    style={styles.buttontyle}
                    textStyle={styles.textStyle}
                    activeOpacity={1}
                  />
                </View>
              </ImageBackground>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </WrapperContainer>
  );
};

export default OtpVerifyScreen;
