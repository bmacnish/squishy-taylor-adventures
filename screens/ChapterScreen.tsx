import React from 'react'
import { View, StyleSheet } from 'react-native'
import { H2Text } from '../components/StyledText'
import AudioPlayer from '../components/AudioPlayer'
import DropDownText from '../components/DropDownText'
import getChapterDataById from '../helpers/getChapterDataById'
import { toTitleCase } from '../helpers/textHelpers'
import { RouteProp } from '@react-navigation/native'
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
  nextPage: {
    padding: 16,
  },
})

type ChapterScreenRouteProps = RouteProp<HomeParamList, 'ChapterScreen'>

interface ChapterScreenProps {
  route: ChapterScreenRouteProps
}

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
          <AudioPlayer chapterId={chapterId} />
          <DropDownText projectId={projectId} chapterId={chapterId} />
          {chapter?.nextPage && (
            <NextPage projectId={projectId} chapterId={chapterId} />
          )}
        </>
      )}
    </LinearGradient>
  )
}
