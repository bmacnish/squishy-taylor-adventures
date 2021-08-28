import { RouteProp } from '@react-navigation/native'
import React from 'react'
import getProjectDataById from '../helpers/getProjectDataById'
import { HomeParamList } from '../types'
import { Body1, H2Text, H4Text } from '../components/StyledText'
import { View, StyleSheet, SafeAreaView, Button, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useColorScheme from '../hooks/useColorScheme'
import { colors } from '../constants/Colors'
import Credits from '../components/Credits'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  subtitle: {
    paddingTop: 16,
    paddingBottom: 4,
  },
})

type ProjectInfoModalRouteProps = RouteProp<
  HomeParamList,
  'ProjectInfoModalScreen'
>

interface ProjectInfoModalProps {
  route: ProjectInfoModalRouteProps
}

export default function ProjectInfoModalScreen({
  route,
}: ProjectInfoModalProps) {
  const colorScheme = useColorScheme()
  const projectId = route.params?.projectId
  const project = getProjectDataById(projectId)

  const onPress = () => {
    Alert.alert('Subscription flow', 'This is a placeholder')
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,

        backgroundColor: colorScheme === 'light' ? colors.light : colors.dark,
      }}
    >
      {project !== undefined ? (
        <>
          <ScrollView style={styles.container}>
            <View>
              <H2Text>{project.title}</H2Text>
              <Body1>by {project.artist}</Body1>
              <H4Text style={styles.subtitle}>About</H4Text>
              <Body1>{project.metadata.shortDescription}</Body1>
              <H4Text style={styles.subtitle}>Experiencing this work</H4Text>
              <Body1>{project.metadata.additionalInformation}</Body1>
              {project.metadata.credits && (
                <Credits credits={project.metadata.credits} />
              )}
              {/* <H4Text>Acknowlegements</H4Text>
            <Body1>{project.metadata.acknowledgements}</Body1> */}
            </View>
          </ScrollView>
          <Button
            title={`Listen to ${project.title}`}
            onPress={onPress}
          ></Button>
        </>
      ) : null}
    </SafeAreaView>
  )
}
