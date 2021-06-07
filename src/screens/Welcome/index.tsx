import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import wateringImage from '../../assets/watering.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';

const Welcome = () => {
  const navigation = useNavigation();

  function handleUserIdentificationPage() {
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Text>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={wateringImage}
        />
        <Text style={styles.description}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleUserIdentificationPage}
        >
          <Feather style={styles.icon} name="chevron-right" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  icon: {
    fontSize: 32,
    color: colors.white,
  },
});

export { Welcome };
