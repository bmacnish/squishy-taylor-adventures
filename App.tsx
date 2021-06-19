import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { useFonts } from 'expo-font'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  let [fontsLoaded] = useFonts({
    Mako: require('./assets/fonts/Mako/Mako-Regular.ttf'),
    BungeeShade: require('./assets/fonts/Bungee_Shade/BungeeShade-Regular.ttf'),
  })

  if (!isLoadingComplete && !fontsLoaded) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}
