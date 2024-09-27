import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  ImageBackground,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/wrappercontainer/WrapperContainer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import images from '../../constants/images';
import strings from '../../constants/strings';
import fonts from '../../constants/fonts';
import ButtonComp from '../../components/buttonComp/ButtonComp';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../navigations/navigationString';

const IntroScreen = () => {
  const navigation = useNavigation();
  const handleLoginWithPhone = () => {
    navigation.navigate(navigationString.WELCOME_SCREEN);
  };
  return (
    <WrapperContainer>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={{
          flex: 1,
        }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag">
            <ImageBackground style={{flex: 1}} source={images.welcome}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingHorizontal: 40,
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: moderateScale(40),
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: fonts.URBANIST_LIGHT,
                      fontSize: textScale(40),
                      fontWeight: '500',
                    }}>
                    {strings.WELCOME}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: fonts.URBANIST_BOLD,
                      fontSize: textScale(45),
                      textAlign: 'flex-start',
                    }}>
                    {strings.ROVE}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: textScale(16),
                      textAlign: 'flex-start',
                      marginTop: 10,
                      fontWeight: '200',
                    }}>
                    {strings.WE_MAKE}
                  </Text>
                  <View style={{marginTop: moderateScale(20)}}>
                    <ButtonComp
                      onPress={handleLoginWithPhone}
                      text={strings.CONTINUE}
                      style={styles.buttonStyle}
                      textStyle={styles.textStyle}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

export default IntroScreen;
