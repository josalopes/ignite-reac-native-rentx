import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';


import theme from './src/styles/theme'

import { Routes } from './src/routes/';

// import { Home } from './src/screens/Home';
// import { CarDetails } from './src/screens/CarDetails';
// import { Schedule } from './src/screens/Schedule';
// import { ScheduleDetails } from './src/screens/ScheduleDetails';
// import { ScheduleComplete } from './src/screens/ScheduleComplete';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });
  
  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content"/>
      <Routes />
    </ThemeProvider>
  );
}

