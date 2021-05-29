import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { chapters, ChapterType } from '../constants/Chapters'

export default function ChapterScreen({ route }) {
  const { chapterId } = route.params

  const getChapterById = (chapterId: number) => {
    return chapters.filter((chapter) => chapter.chapterId === chapterId)[0]
  }

  const chapter = getChapterById(chapterId)

  return (
    <View>
      <Text>{chapter.chapterNumber}</Text>
      <Text>{chapter.title}</Text>
    </View>
  )
}
