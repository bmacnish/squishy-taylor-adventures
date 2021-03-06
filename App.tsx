import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import useFirebase from './hooks/useFirebase'
import Navigation from './navigation'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  const firebaseInitialized = useFirebase()

  if (!isLoadingComplete && firebaseInitialized) {
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
