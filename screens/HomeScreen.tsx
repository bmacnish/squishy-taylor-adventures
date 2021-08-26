import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { View } from '../components/Themed'
import { Body1, H1Text, H3Text } from '../components/StyledText'
import { colors } from '../constants/Colors'
import { useColorScheme } from 'react-native'
import ProjectCarousel from '../components/ProjectCarousel'
import useProjectData from '../hooks/useProjectData'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignItems: 'center',
  },
  carousel: {
    paddingVertical: 16,
  },
  body: {
    textAlign: 'center',
    paddingVertical: 4,
  },
})

export default function HomeScreen() {
  const colorScheme = useColorScheme()
  const projects = useProjectData()

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colorScheme === 'light' ? colors.light : colors.dark,
        },
      ]}
    >
      <View
        style={{
          paddingHorizontal: 16,
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <View style={styles.title}>
          <H1Text color={colors.orange} style={{ textAlign: 'center' }}>
            Whispers
          </H1Text>
          <H3Text style={{ textAlign: 'center' }}>
            A curated collection of audio experiences
          </H3Text>
        </View>
        <View style={styles.carousel}>
          {projects && <ProjectCarousel data={projects} />}
        </View>
        <View style={styles.title}>
          <Body1 style={styles.body}>
            Whispers are audio experiences created by hand selected independent
            artists.
          </Body1>
          <Body1 style={styles.body}>
            New works are added to the collection regularly.
          </Body1>
        </View>
      </View>
    </SafeAreaView>
  )
}
