import React from 'react';
import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import * as Notifications from 'expo-notifications';
import { PlantProps } from './src/libs/storage';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  });

  React.useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    )
    return () => subscription.remove();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
};

export default App;
