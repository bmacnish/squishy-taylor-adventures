import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { View } from '../components/Themed'
import CardCarousel from '../components/CardCarousel'
import { colors } from '../constants/Colors'
import { useColorScheme } from 'react-native'
import { HomeParamList } from '../types'
import getProjectDataById from '../helpers/getProjectDataById'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

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

type ProjectScreenProps = NativeStackScreenProps<HomeParamList, 'ProjectScreen'>

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
            <CardCarousel projectId={projectId} chapters={project.chapters} />
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}
