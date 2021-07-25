import React, { useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { View } from '../components/Themed'
import CardCarousel from '../components/CardCarousel'
import { Body1, H1Text, H3Text } from '../components/StyledText'
import { colors } from '../constants/Colors'
import { useColorScheme } from 'react-native'
import useChapterData from '../hooks/useChapterData'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    alignItems: 'center',
    paddingBottom: 48,
  },
  subtitle: {
    fontWeight: '300',
  },
})

export default function HomeScreen() {
  let colorScheme = useColorScheme()
  const chapters = useChapterData()

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colorScheme === 'light' ? colors.light : colors.dark,
        },
      ]}
    >
      <View style={styles.title}>
        <H1Text color={colors.orange} style={{ textAlign: 'center' }}>
          Squishy Taylor
        </H1Text>
        <Body1 color={colors.orange}>and the</Body1>
        <H3Text style={styles.subtitle} color={colors.orange}>
          City-wide Ghost Plague
        </H3Text>
      </View>
      <View>{chapters && <CardCarousel chapters={chapters} />}</View>
    </SafeAreaView>
  )
}
