import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";

import { EncodeSans_400Regular } from '@expo-google-fonts/encode-sans';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'EncodeSans-Regular': EncodeSans_400Regular, 
  });

  React.useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="tabs" />
      </Stack>
    </QueryClientProvider>
  );
}