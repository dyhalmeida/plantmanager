import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { SvgFromUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/core'
import { format, isBefore } from 'date-fns';
import { 
  PlantProps, 
} from '../../libs/storage';

import { Button } from '../../components/Button';

import waterdrop from '../../assets/waterdrop.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ParamsProps {
  plant: PlantProps,
}

const PlantSave = () => {

  const [dateTime, setDateTime] = React.useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = React.useState(Platform.OS === 'ios');

  const route = useRoute();
  const { plant } = route.params as ParamsProps;

  function handleChangeTime(event: Event, dateTime: Date | undefined) {

      if (Platform.OS === 'android') {
        setShowDateTimePicker(oldDateTime => !oldDateTime)
      }

      if (dateTime && isBefore(dateTime, new Date())) {
        setDateTime(new Date());
        return Alert.alert('Escolha uma hora futura! ⏰', 'A hora selecionada não pode ser um horário que já passou.', [
          {
            text: 'Certo',
            onPress: () => {},
          }
        ]);
      }
      
      if (dateTime) {
        setDateTime(dateTime);
      }

  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDateTimePicker(oldDateTime => !oldDateTime);
  }

  return (
   <View style={styles.container}>
     <View style={styles.plantInfo}>
        <SvgFromUri uri={plant.photo} height={150} width={150} />
        <Text style={styles.plantName}>
          {plant.name}
        </Text>
        <Text style={styles.plantDescription}>
          {plant.about}
        </Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipView}>
          <Image style={styles.tipImage} source={waterdrop} />
          <Text style={styles.tipText}>
            {plant.water_tips}
          </Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>
        
        {showDateTimePicker && (
          <DateTimePicker value={dateTime} mode="time" display="spinner" onChange={handleChangeTime} />
        )}

        {Platform.OS === 'android' && (
          <TouchableOpacity style={styles.dateTimePickerButton} onPress={handleOpenDateTimePickerForAndroid}>
            <Text style={styles.dateTimePickerText}>
              {`Alterar ${format(dateTime, 'HH:mm')}`}
            </Text>
          </TouchableOpacity>
        )}

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
  dateTimePickerButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 40,
  },  
  dateTimePickerText: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.text,
  }
});

export { PlantSave }