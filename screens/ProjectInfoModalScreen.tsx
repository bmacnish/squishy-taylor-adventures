import React from 'react'
import getProjectDataById from '../helpers/getProjectDataById'
import { HomeParamList } from '../types'
import { Body1, H2Text, H4Text } from '../components/StyledText'
import { View, StyleSheet, SafeAreaView, Button, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useColorScheme from '../hooks/useColorScheme'
import { colors } from '../constants/Colors'
import Credits from '../components/Credits'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import DropDownText from '../components/DropDownText'
import useDynamicTextColor from '../hooks/useDynamicTextColor'

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

const translations = {
  acknowledgements: 'Acknowledgements',
}

type ProjectInfoModalProps = NativeStackScreenProps<
  HomeParamList,
  'ProjectInfoModalScreen'
>

export default function ProjectInfoModalScreen({
  route,
  navigation,
}: ProjectInfoModalProps) {
  const colorScheme = useColorScheme()
  const projectId = route.params?.projectId
  const project = getProjectDataById(projectId)
  const textColor = useDynamicTextColor()

  const onPress = () => {
    Alert.alert('Purchase flow', 'This is a placeholder', [
      {
        text: 'OK',
        onPress: () => {
          navigation.goBack()
        },
      },
    ])
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
              {project.metadata.acknowledgements && (
                <DropDownText
                  labelText={translations.acknowledgements}
                  text={project.metadata.acknowledgements}
                  textColor={textColor}
                />
              )}
            </View>
          </ScrollView>
          {!project.metadata.free && (
            <Button
              color={colors.orange}
              title={`Purchase ${project.title}`}
              onPress={onPress}
            ></Button>
          )}
        </>
      ) : null}
    </SafeAreaView>
  )
}
