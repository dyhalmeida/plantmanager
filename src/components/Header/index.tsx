import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileImage from '../../assets/profile.jpeg';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const Header = () => {

  const [username, setUsername] = React.useState<string>('');

  async function getUsernameFromStorage() {
    const username = await AsyncStorage.getItem('@plantmanager:username');
    setUsername(username || '');
  }

  React.useEffect(() => {
    getUsernameFromStorage();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image style={styles.image} source={ProfileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  username: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});

export { Header };
