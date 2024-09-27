import {View, Text, FlatList, Image, Pressable, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createTable, getDrivers} from '../../utils/DBHelper';
import WrapperContainer from '../../components/wrappercontainer/WrapperContainer';
import styles from './styles'; // Import the styles
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import images from '../../constants/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import navigationString from '../../navigations/navigationString';

const HomeScreen = ({onLogout}) => {
  const route = useRoute();
  const [driversInfo, setDriversInfo] = useState([]);
  const navigation = useNavigation();
  const user = route.params?.user; // Check for user data
  console.log(user?.name, ',,,,,,user hime');
  useEffect(() => {
    fetchDrivers();
    createTable();
  }, []);

  const fetchDrivers = () => {
    getDrivers(setDriversInfo);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text>Name: {item.name}</Text>
          <Text>Email: {item.email}</Text>
          <Text>Mobile: {item.mobile}</Text>
          <Text>Reg Number: {item.registration_number}</Text>
          <Text>Vehicle Type: {item.vehicle_type}</Text>
        </View>
        {item.image_uri ? (
          <Image
            source={{uri: item.image_uri}}
            style={styles.image}
            resizeMode="cover"
          />
        ) : null}
      </View>
    );
  };

  const handleLogOut = () => {
    Alert.alert(
      'Logout',
      'Do you want to logout from app?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await onLogout(); // Call the passed logout function
            navigation.navigate(navigationString.INTRO_SCREEN); // Navigate to Intro screen
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <WrapperContainer style={{flex: 1}}>
      <Pressable
        onPress={handleLogOut}
        style={{
          alignItems: 'flex-end',
          margin: moderateScaleVertical(20),
        }}>
        <Image
          source={images.shut_down}
          style={{
            width: moderateScale(40),
            height: moderateScale(40),
          }}
        />
      </Pressable>

      <View style={{alignItems: 'center', marginVertical: moderateScale(20)}}>
        {user?.photo && (
          <Image
            source={{uri: user.photo}}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
        )}
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{user?.name}</Text>
        <Text style={{fontSize: 16, color: 'gray'}}>{user?.email}</Text>
      </View>
      <FlatList
        contentContainerStyle={{marginTop: moderateScale(10)}}
        showsVerticalScrollIndicator={false}
        data={driversInfo}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </WrapperContainer>
  );
};

export default HomeScreen;
