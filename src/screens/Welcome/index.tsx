import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import wateringImage from '../../assets/watering.png';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Gerencia suas plantas de forma fácil</Text>
      <Image source={wateringImage} />
      <Text>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <TouchableOpacity>
        <Text>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Welcome };
