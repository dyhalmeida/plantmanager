import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../../components/Header';

const PlantSelect = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { PlantSelect };
