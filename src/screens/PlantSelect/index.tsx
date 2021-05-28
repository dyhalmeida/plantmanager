import React from 'react';
import { 
  StyleSheet,
  View,
  Text, 
} from 'react-native';
import { Header } from '../../components/Header';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const PlantSelect = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar a sua planta?</Text>
    </View>
      <View>
      </View>
      <View style={styles.plants}>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }
});

export { PlantSelect };
