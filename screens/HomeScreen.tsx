import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { View } from '../components/Themed'
import { chapters } from '../constants/Chapters'
import CardCarousel from '../components/CardCarousel'
import { Body1, H1Text, H2Text, H3Text } from '../components/StyledText'
import { appColors } from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: appColors.white,
  },
  title: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  content: {
    flex: 1,
  },
})

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <H1Text style={{ textAlign: 'center' }}>Squishy Taylor</H1Text>
        <Body1>and the</Body1>
        <H3Text>City-wide Ghost Plague</H3Text>
      </View>
      <View style={styles.content}>
        <CardCarousel chapters={chapters} />
      </View>
    </SafeAreaView>
  )
}
