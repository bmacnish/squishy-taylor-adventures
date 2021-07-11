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
  cardBackgroundColors,
  CardBackgroundColorsType,
} from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  titleContainer: {
    marginVertical: 24,
  },
  title: {
    textAlign: 'center',
  },
})

type ChapterScreenRouteProp = RouteProp<HomeParamList, 'ChapterScreen'>

type ChapterScreenProps = {
  route: ChapterScreenRouteProp
}

export default function ChapterScreen({ route }: ChapterScreenProps) {
  const { chapterId } = route.params as keyof CardBackgroundColorsType

  const chapter = getChapterById(chapterId)

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: cardBackgroundColors[chapterId] },
      ]}
    >
      <View style={styles.titleContainer}>
        <H2Text style={styles.title}>{toTitleCase(chapter.title)}</H2Text>
      </View>
      <AudioPlayer />
      <DropDownText chapterId={chapterId} />
    </View>
  )
}
