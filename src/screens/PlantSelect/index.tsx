import React from 'react';
import { 
  StyleSheet,
  View,
  Text, 
  FlatList,
} from 'react-native';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EnvironmentProps {
  key: string;
  title: string;
}
const PlantSelect = () => {
  const [environments, setEnvironments] = React.useState<Array<EnvironmentProps>>([]);
  const [environmentSelected, setEnvironmentSelected] = React.useState('all');

  React.useEffect(() => {

    (async () => {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');
      setEnvironments([
        { key: 'all', title: 'Todos'},
        ...data
      ]);
    })();

  }, []);
  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);
  }

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
