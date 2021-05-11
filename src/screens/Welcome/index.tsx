import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import wateringImage from '../../assets/watering.png';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Gerencia suas plantas de forma fácil</Text>
      <Image source={wateringImage} />
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
