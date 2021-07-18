import React from 'react'
import { View, StyleSheet } from 'react-native'
import { H2Text } from '../components/StyledText'
import AudioPlayer from '../components/AudioPlayer'
import DropDownText from '../components/DropDownText'
import getChapterById from '../helpers/getChapterDataById'
import { toTitleCase } from '../helpers/textHelpers'
import { RouteProp } from '@react-navigation/native'
import { HomeParamList } from '../types'
import { appColors, cardBackgroundColors } from '../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: appColors.white,
  },
  titleContainer: {
    marginBottom: 24,
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
  const { chapterId } = route.params

  const chapter = getChapterById(chapterId)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <H2Text style={styles.title}>{toTitleCase(chapter.title)}</H2Text>
      </View>
      <AudioPlayer />
      <DropDownText chapterId={chapterId} />
    </SafeAreaView>
  )
}
