import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { View } from '../components/Themed'
import CardCarousel from '../components/CardCarousel'
import { H1Text, H3Text } from '../components/StyledText'
import { colors } from '../constants/Colors'
import { useColorScheme } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { HomeParamList } from '../types'
import getProjectDataById from '../helpers/getProjectDataById'
import useProjectData from '../hooks/useProjectData'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: '300',
    textAlign: 'center',
  },
  carousel: {
    paddingVertical: 16,
  },
})

type ProjectScreenRouteProps = RouteProp<HomeParamList, 'ProjectScreen'>

interface ProjectScreenProps {
  route: ProjectScreenRouteProps
}

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
          <View>
            <H1Text style={styles.title} color={colors.orange}>
              {project.title}
            </H1Text>
            <H3Text style={styles.subtitle} color={colors.orange}>
              {project.subtitle}
            </H3Text>
          </View>
          <View style={styles.carousel}>
            {/* This line is the one that is breaking */}
            <CardCarousel projectId={projectId} chapters={project.chapters} />
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}
