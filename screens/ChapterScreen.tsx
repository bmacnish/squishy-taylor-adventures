import React from 'react'
import { View, StyleSheet } from 'react-native'
import { H2Text } from '../components/StyledText'
import AudioPlayer from '../components/AudioPlayer'
import DropDownText from '../components/DropDownText'
import getChapterById from '../helpers/getChapterDataById'
import { toTitleCase } from '../helpers/textHelpers'
import { RouteProp } from '@react-navigation/native'
import { HomeParamList } from '../types'
import {
  appColors,
  cardBackgroundColors,
  projectColors,
} from '../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
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

type ChapterScreenRouteProp = RouteProp<HomeParamList, 'ChapterScreen'>

type ChapterScreenProps = {
  route: ChapterScreenRouteProp
}

export default function ChapterScreen({ route }: ChapterScreenProps) {
  const { chapterId } = route.params

  const chapter = getChapterById(chapterId)

  return (
    <LinearGradient
      style={styles.container}
      colors={[projectColors.magenta, projectColors.darkblue]}
      start={{ x: -0.1, y: 0 }}
    >
      <View style={styles.titleContainer}>
        <H2Text color={appColors.white} style={styles.title}>
          {toTitleCase(chapter.title)}
        </H2Text>
      </View>
      <AudioPlayer />
      <DropDownText chapterId={chapterId} />
      <NextPage chapterId={chapterId} />
    </LinearGradient>
  )
}
