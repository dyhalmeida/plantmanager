import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Button } from '../../components/Button';

import waterdrop from '../../assets/waterdrop.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const PlantSave = () => {


  return (
   <View style={styles.container}>
     <View style={styles.plantInfo}>
        <Text style={styles.plantName}>
        </Text>
        <Text style={styles.plantDescription}>
        </Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipView}>
          <Image style={styles.tipImage} source={waterdrop} />
          <Text style={styles.tipText}>
          </Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>
        <Button text="Cadastrar planta" onPress={() => {}} />
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
  }, 
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15,
  },
  plantDescription: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20,
  },
  tipView: {
    position: 'relative',
    bottom: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    fontSize: 17,
    textAlign: 'justify',
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
});

export { PlantSave }