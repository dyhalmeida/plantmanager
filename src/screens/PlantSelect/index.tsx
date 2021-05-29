import React from 'react';
import { 
  StyleSheet,
  View,
  Text, 
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { Load } from '../../components/Load';
import { api } from '../../services/api';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantsProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string, string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

const PlantSelect = () => {
  const [environments, setEnvironments] = React.useState<Array<EnvironmentProps>>([]);
  const [plants, setPlants] = React.useState<Array<PlantsProps>>([]);
  const [filteredPlants, setFilteredPlants] = React.useState<Array<PlantsProps>>([]);
  const [environmentSelected, setEnvironmentSelected] = React.useState('all');
  const [loading, setLoading] = React.useState(true);
  const [page, setPage]= React.useState(1);
  const [loadingMore, setLoadingMore] = React.useState(false);

  React.useEffect(() => {

    (async () => {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');
      setEnvironments([
        { key: 'all', title: 'Todos'},
        ...data
      ]);
    })();
    
  }, []);
  
  React.useEffect(() => {    
    fetchPlants();
  }, []);

  async function fetchPlants() {
    const { data } = await api.get(`plants_types?_sort=name&_order=asc&_page=${page}&_limit=8`);
      
    if (!data) return setLoading(false);

    if (page > 1) {
      setPlants(oldPlants => [...oldPlants, ...data]);
      setFilteredPlants(oldPlants => [...oldPlants, ...data]);
    } else {
      setPlants(data)
      setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distanceForEnd: number) {
    if (distanceForEnd < 1) return;
    setLoadingMore(true);
    setPage(oldPage => oldPage + 1);
    fetchPlants();
  }

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);
    if (environment === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter(plant => plant.environments.includes(environment));

    setFilteredPlants(filtered)
  }

  if (loading) return <Load />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar a sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton 
              title={item.title} 
              active={item.key === environmentSelected} 
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (<PlantCardPrimary data={item} />)}
          horizontal={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore && <ActivityIndicator color={colors.green} />
          }
        />
      </View>
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
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }
});

export { PlantSelect };
