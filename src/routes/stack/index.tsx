import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../styles/colors';
import { Welcome } from '../../screens/Welcome';
import { UserIdentification } from '../../screens/UserIdentification';
import { ConfirmationUser } from '../../screens/ConfirmationUser';
import { PlantSave } from '../../screens/PlantSave';
import { MyPlants } from '../../screens/MyPlants';
import { AuthRoutes } from '../tab';

const stackRoutes = createStackNavigator();

const AppRoutes = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: { backgroundColor: colors.white },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stackRoutes.Screen name="ConfirmationUser" component={ConfirmationUser} />
    <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
    <stackRoutes.Screen name="PlantSave" component={PlantSave} />
    <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />

  </stackRoutes.Navigator>
);

export { AppRoutes };
