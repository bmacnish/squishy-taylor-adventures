import React from 'react'
import { View, StyleSheet } from 'react-native'
import { chapters } from '../constants/Chapters'
import { useTheme } from '@react-navigation/native'
import CardCarousel from '../components/CardCarousel'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
})

export default function HomeScreen() {
  const theme = useTheme()

  return (
    <View style={styles.container}>
      <CardCarousel chapters={chapters} />
    </View>
  )
}
