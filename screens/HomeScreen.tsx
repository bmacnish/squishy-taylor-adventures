import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { View } from '../components/Themed'
import { chapters } from '../constants/Chapters'
import CardCarousel from '../components/CardCarousel'
import { Body1, H1Text, H3Text } from '../components/StyledText'
import { appColors, projectColors } from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: appColors.white,
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <H1Text color={projectColors.orange} style={{ textAlign: 'center' }}>
          Squishy Taylor
        </H1Text>
        <Body1 color={projectColors.orange}>and the</Body1>
        <H3Text style={styles.subtitle} color={projectColors.orange}>
          City-wide Ghost Plague
        </H3Text>
      </View>
      <View>
        <CardCarousel chapters={chapters} />
      </View>
    </SafeAreaView>
  )
}
