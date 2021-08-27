import { RouteProp } from '@react-navigation/native'
import React from 'react'
import getProjectDataById from '../helpers/getProjectDataById'
import { HomeParamList } from '../types'
import { Body1, H2Text, LabelText } from '../components/StyledText'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { colors } from '../constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    paddingHorizontal: 16,
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
  const projectId = route.params?.projectId
  const project = getProjectDataById(projectId)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {project !== undefined ? (
          <View>
            <H2Text>{project.title}</H2Text>
            <Body1>by {project.artist}</Body1>
            <LabelText>About</LabelText>
            <Body1>{project.metadata.shortDescription}</Body1>
            <LabelText>Experiencing this work</LabelText>
            <Body1>{project.metadata.additionalInformation}</Body1>
            <LabelText>Credits</LabelText>
            <LabelText>Acknowlegements</LabelText>
            <Body1>{project.metadata.acknowledgements}</Body1>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  )
}
