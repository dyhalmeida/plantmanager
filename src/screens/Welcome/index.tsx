import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import wateringImage from '../../assets/watering.png';
import colors from '../../styles/colors';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencia suas plantas de forma fácil</Text>
      <Image style={styles.image} source={wateringImage} />
      <Text>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <TouchableOpacity>
        <Text>{'>'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  image: {
    width: 292,
    height: 284,
  },
});

export { Welcome };
