import { store } from '@/store';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import "./globals.css";

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={DefaultTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <StatusBar style="auto" />
      </PaperProvider>
    </ReduxProvider>
  );
}
