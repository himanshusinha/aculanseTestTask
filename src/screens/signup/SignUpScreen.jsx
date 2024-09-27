import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import WrapperContainer from '../../components/wrappercontainer/WrapperContainer';
import TextInputComp from '../../components/textinputcomp/TextInputComp';
import images from '../../constants/images';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import strings from '../../constants/strings';
import {useNavigation} from '@react-navigation/native';
import {createTable, insertDriver} from '../../utils/DBHelper';
import CustomPicker from '../../components/custompicker/CustomPicker';
import {vehicleTypes} from '../../constants/constant';
import ButtonComp from '../../components/buttonComp/ButtonComp';
import styles from './styles';
import {launchImageLibrary} from 'react-native-image-picker';
import navigationString from '../../navigations/navigationString';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [imageUri, setImageUri] = useState('');

  useEffect(() => {
    createTable();
  }, []);

  const showAlert = message => {
    Alert.alert('Please fill all fields', message, [{text: 'OK'}]);
  };

  const saveDriverInfo = () => {
    const driver = {
      name,
      email,
      mobile,
      registration_number: regNumber,
      vehicle_type: vehicleType,
      image_uri: imageUri,
    };
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const mobileRegex = /^\d{10}$/;
    const regNumberRegex = /^[A-Za-z0-9\s]+$/;

    if (!name.trim() || !nameRegex.test(name)) {
      showAlert('Please enter a valid name.');
      return;
    }
    if (!email.trim() || !emailRegex.test(email)) {
      showAlert('Please enter a valid email.');
      return;
    }
    if (!mobile.trim() || !mobileRegex.test(mobile)) {
      showAlert('Please enter a valid mobile number (10 digits).');
      return;
    }
    if (!regNumber.trim() || !regNumberRegex.test(regNumber)) {
      showAlert('Please enter a valid registration number.');
      return;
    }
    if (!vehicleType) {
      showAlert('Please select a vehicle type.');
      return;
    }
    if (!imageUri) {
      showAlert('Please select an image.');
      return;
    }

    insertDriver(driver);
    clearForm();
    navigation.navigate(navigationString.HOME_SCREEN);
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setMobile('');
    setRegNumber('');
    setVehicleType('');
    setImageUri('');
  };

  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel && response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <WrapperContainer style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        enableOnAndroid={true}
        extraScrollHeight={20} // Add some extra space
        keyboardShouldPersistTaps="handled">
        <View style={{flex: 1}}>
          <ImageBackground
            resizeMode="cover"
            source={images.bg_two}
            style={{width: '100%', height: moderateScale(350)}}>
            <View style={{flex: 1, justifyContent: 'center'}}></View>
          </ImageBackground>

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <ImageBackground
              resizeMode="cover"
              source={images.bg_one}
              style={{
                width: '100%',
                height: moderateScale(300),
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  paddingHorizontal: moderateScale(30),
                  paddingBottom: moderateScale(40),
                }}>
                <TextInputComp
                  value={name}
                  placeholder={strings.NAME}
                  onChangeText={setName}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  placeholderTextColor={'#bfbfbf'}
                />
                <TextInputComp
                  value={email}
                  placeholder={strings.EMAIL}
                  onChangeText={setEmail}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  placeholderTextColor={'#bfbfbf'}
                  keyboardType={'email-address'}
                />
                <TextInputComp
                  value={mobile}
                  placeholder={strings.MOBILE}
                  onChangeText={setMobile}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  keyboardType={'number-pad'}
                  placeholderTextColor={'#bfbfbf'}
                />
                <TextInputComp
                  value={regNumber}
                  placeholder={strings.REGISTERATON_NUMBER}
                  onChangeText={setRegNumber}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  keyboardType={'default'}
                  placeholderTextColor={'#bfbfbf'}
                />
                <CustomPicker
                  selectedValue={vehicleType}
                  onValueChange={setVehicleType}
                  items={vehicleTypes}
                  placeholder="Select Vehicle Type"
                  placeholderTextColor={'#bfbfbf'}
                />
                <ButtonComp
                  onPress={selectImage}
                  text="Select Image"
                  style={styles.titleStyle}
                  textStyle={styles.textStyle}
                />
              </View>

              {imageUri ? (
                <Image
                  resizeMode="cover"
                  source={{uri: imageUri}}
                  style={styles.imageStyle}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  source={{
                    uri: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
                  }}
                  style={styles.imageStyle}
                />
              )}

              <View
                style={{
                  marginTop: moderateScale(30),
                  paddingHorizontal: moderateScale(30),
                  paddingBottom: moderateScale(10),
                }}>
                <ButtonComp
                  onPress={saveDriverInfo}
                  text="Sign Up"
                  style={styles.titleStyle}
                  textStyle={styles.textStyle}
                />
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default SignUpScreen;
