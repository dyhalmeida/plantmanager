import React from 'react';
import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

import { Welcome } from './src/screens/Welcome';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Welcome />;
};

export default App;
