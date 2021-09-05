import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { View } from '../components/Themed'
import ChapterCarousel from '../components/ChapterCarousel'
import { colors } from '../constants/Colors'
import { useColorScheme } from 'react-native'
import { ProjectScreenProps } from '../types'
import getProjectDataById from '../helpers/getProjectDataById'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  carousel: {
    marginTop: -38,
  },
})

export default function ProjectScreen({ route }: ProjectScreenProps) {
  const colorScheme = useColorScheme()
  const { projectId } = route.params
  const project = getProjectDataById(projectId)

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: colorScheme === 'light' ? colors.light : colors.dark,
        },
      ]}
    >
      {project && (
        <View style={styles.container}>
          <View style={styles.carousel}>
            <ChapterCarousel
              projectId={projectId}
              chapters={project.chapters}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}
