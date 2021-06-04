import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { Header } from '../../components/Header';
import colors from '../../styles/colors';
import waterdrop from '../../assets/waterdrop.png';
import { loadPlants } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { PlantProps } from '../../libs/storage';
import fonts from '../../styles/fonts';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Load } from '../../components/Load';

const MyPlants = () => {

  const [myPlants, setMyPlants] = React.useState<PlantProps[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [nextWaterd, setNextWaterd] = React.useState<string>('');

  React.useEffect(() => {
    (async () => {
      const plantsStoraged = await loadPlants();
      const [plant] = plantsStoraged;

      const nextTime = formatDistance(
        new Date(plant.dateTimeNotification || '').getTime(),
        new Date().getTime(),
        { locale: ptBR }
      );
      setMyPlants(plantsStoraged);
      setLoading(false);
      setNextWaterd(`Não esqueça de regar a ${plant.name} à ${nextTime}`);
    })();
  }, []);

  if (loading) return <Load />;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image style={styles.spotlightImage} source={waterdrop} />
        <Text style={styles.spotlightText}>{nextWaterd}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Próximas regadas</Text>
        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (<PlantCardSecondary data={item} />)}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
  },
  spotlight: {
    marginTop: 20,
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  spotlightImage: {
    width: 60,
    height: 60
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
  },
  plants: {
    flex: 1,
    width: '100%'
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20
  },
});

export { MyPlants }