import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { View } from '../components/Themed'
import { Body1, H1Text, H3Text } from '../components/StyledText'
import { colors } from '../constants/Colors'
import { useColorScheme } from 'react-native'
import ProjectCarousel from '../components/ProjectCarousel'
import useProjectData from '../hooks/useProjectData'
import useDynamicTextColor from '../hooks/useDynamicTextColor'
import { HomeScreenProps } from '../types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  alignCenter: {
    textAlign: 'center',
    paddingVertical: 4,
  },
  carousel: {
    paddingVertical: 16,
  },
  body: {
    textAlign: 'center',
    paddingVertical: 4,
  },
})

const translations = {
  title: 'Whispers',
  subtitle: 'A curated collection of audio experiences',
  description1:
    'Whispers are audio experiences created by hand selected independent artists.',
  description2: 'New works are added to the collection regularly.',
}

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const colorScheme = useColorScheme()
  const projects = useProjectData()
  const textColor = useDynamicTextColor()

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
        <View>
          <H1Text color={textColor} style={styles.alignCenter}>
            {translations.title}
          </H1Text>
          <H3Text color={textColor} style={styles.alignCenter}>
            {translations.subtitle}
          </H3Text>
        </View>
        <View style={styles.carousel}>
          {projects && <ProjectCarousel data={projects} />}
        </View>
        <View>
          <Body1 color={textColor} style={styles.body}>
            {translations.description1}
          </Body1>
          <Body1 color={textColor} style={styles.body}>
            {translations.description2}
          </Body1>
        </View>
      </View>
    </SafeAreaView>
  )
}
