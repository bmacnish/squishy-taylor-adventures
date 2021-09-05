import React from 'react'
import { View, StyleSheet } from 'react-native'
import { H2Text } from '../components/StyledText'
import AudioPlayer from '../components/AudioPlayer'
import DropDownText from '../components/DropDownText'
import getChapterDataById from '../helpers/getChapterDataById'
import { toTitleCase } from '../helpers/textHelpers'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeParamList } from '../types'
import { colors } from '../constants/Colors'
import NextPage from '../components/NextPage'
import { LinearGradient } from 'expo-linear-gradient'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  titleContainer: {
    marginBottom: 24,
  },
  title: {
    textAlign: 'center',
  },
  dropDownText: {
    paddingTop: 24,
    flex: 1,
  },
  nextPage: {
    padding: 16,
  },
})

const translations = {
  dropDownText: 'read along',
}

type ChapterScreenProps = NativeStackScreenProps<HomeParamList, 'ChapterScreen'>

export default function ChapterScreen({ route }: ChapterScreenProps) {
  const { projectId, chapterId } = route.params
  const chapter = getChapterDataById(projectId, chapterId)

  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.magenta, colors.darkblue]}
      start={{ x: -0.1, y: 0 }}
    >
      {chapter && (
        <>
          <View style={styles.titleContainer}>
            <H2Text color={colors.light} style={styles.title}>
              {toTitleCase(chapter.title)}
            </H2Text>
          </View>
          <AudioPlayer chapterId={chapterId} projectId={projectId} />
          {chapter.text && (
            <View style={styles.dropDownText}>
              <DropDownText
                text={chapter.text}
                labelText={translations.dropDownText}
                textColor={colors.light}
              />
            </View>
          )}
          {chapter?.nextPage && (
            <NextPage projectId={projectId} chapterId={chapterId} />
          )}
        </>
      )}
    </LinearGradient>
  )
}
