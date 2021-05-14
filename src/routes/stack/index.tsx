import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../styles/colors';
import { Welcome } from '../../screens/Welcome';
import { UserIdentification } from '../../screens/UserIdentification';
import { ConfirmationUser } from '../../screens/ConfirmationUser';

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
  </stackRoutes.Navigator>
);

export { AppRoutes };
