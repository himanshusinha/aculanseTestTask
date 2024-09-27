import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import WrapperContainer from '../../components/wrappercontainer/WrapperContainer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../constants/images';
import strings from '../../constants/strings';
import fonts from '../../constants/fonts';
import ButtonComp from '../../components/buttonComp/ButtonComp';
import styles from './styles';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../navigations/navigationString';
import TextComp from '../../components/textComp/TextComp';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {moderateScale, textScale} from '../../styles/responsiveSize';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '306081040393-p63e0mnq4o2kpe4tle3hac4vhuqb41jl.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const handleLoginWithPhone = () => {
    navigation.navigate(navigationString.LOGIN_SCREEN);
  };

  const handleLoginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      // Correctly access the user object
      if (response && response.data && response.data.user) {
        const userData = {
          email: response.data.user.email,
          name: response.data.user.name,
          photo: response.data.user.photo,
        };

        setUserInfo(userData);
        console.log(userData, '.....userInfo'); // Log user info

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(
          response.data.idToken,
        );

        // Sign-in the user with the credential
        await auth().signInWithCredential(googleCredential);

        // Navigate to Home Screen
        navigation.navigate(navigationString.HOME_SCREEN, {user: userData});
      } else {
        console.error(
          'User information is not available in the response:',
          response,
        );
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the sign-in process');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign-in is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services are not available');
      } else {
        console.error('Some other error occurred:', error);
      }
    }
  };

  return (
    <WrapperContainer>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag">
            <View style={{flex: 1}}>
              <View style={{flex: 1}}>
                <ImageBackground
                  resizeMode="cover"
                  source={images.bg_two}
                  style={{width: '100%', height: moderateScale(350)}}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <View
                      style={{
                        paddingHorizontal: 40,
                        marginTop: moderateScale(200),
                      }}>
                      <Text
                        style={{
                          color: colors.black,
                          fontFamily: fonts.URBANIST_LIGHT,
                          fontSize: textScale(27),
                          fontWeight: 'bold',
                          bottom: moderateScale(50),
                        }}>
                        {strings.ROVE}
                      </Text>
                      <Text
                        style={{
                          color: colors.grey,
                          fontFamily: fonts.URBANIST_BOLD,
                          fontSize: textScale(25),
                          textAlign: 'flex-start',
                          fontWeight: '400',
                          bottom: moderateScale(50),
                        }}>
                        {strings.WELCOME_YOU}
                      </Text>
                    </View>
                    <Image
                      resizeMode="contain"
                      source={images.human}
                      style={{
                        width: 250,
                        height: 250,
                        alignSelf: 'center',
                        marginTop: moderateScale(40),
                      }}
                    />
                  </View>
                </ImageBackground>

                <ImageBackground
                  resizeMode="contain"
                  source={images.bg_one}
                  style={{
                    width: '100%',
                    height: moderateScale(300),
                    position: 'absolute',
                    bottom: 0,
                  }}>
                  <View
                    style={{
                      paddingHorizontal: moderateScale(30),
                      top: moderateScale(100),
                    }}>
                    <ButtonComp
                      onPress={handleLoginWithPhone}
                      text={strings.LOGIN_WITH_PHONE}
                      style={styles.buttonPhoneStyle}
                      textStyle={styles.textPhonrStyle}
                      activeOpacity={1}
                    />
                    <TextComp style={styles.orTextStyle} text={strings.OR} />
                    <ButtonComp
                      onPress={handleLoginWithGoogle}
                      text={strings.LOGIN_WITH_GMAIL}
                      style={styles.buttonGmailStyle}
                      textStyle={styles.textGmailStyle}
                      activeOpacity={1}
                    />
                  </View>
                </ImageBackground>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

export default WelcomeScreen;
