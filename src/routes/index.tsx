import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes as StackRoutes } from './stack';

const Routes = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
);

export { Routes };
