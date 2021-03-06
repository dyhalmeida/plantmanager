 import React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { MaterialIcons } from '@expo/vector-icons';
 import { Platform } from 'react-native';
 import { PlantSelect } from '../../screens/PlantSelect';
 import { MyPlants } from '../../screens/MyPlants';
 import colors from '../../styles/colors';
 
 const Tab = createBottomTabNavigator();
 const AuthRoutes = () => (
   <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.heading,
      labelPosition: 'beside-icon',
      style: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 88
      }
    }}
   >
     <Tab.Screen
      name="Nova Planta"
      component={PlantSelect}
      options={{
        tabBarIcon: (({ size, color }) => (
          <MaterialIcons name="add-circle-outline" size={size}color={color} />
        ))
      }}
     />
     
     <Tab.Screen
      name="Minhas Plantas"
      component={MyPlants}
      options={{
        tabBarIcon: (({ size, color }) => (
          <MaterialIcons name="format-list-bulleted" size={size}color={color} />
        ))
      }}
     />
   </Tab.Navigator>
 )

 export { AuthRoutes }
