import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { chapters } from '../constants/Chapters'
import { AntDesign } from '@expo/vector-icons'
import { Body1, H1Text, H2Text, H4Text } from '../components/StyledText'
import AudioPlayer from '../components/AudioPlayer'
import DropDownText from '../components/DropDownText'
import getChapterById from '../helpers/getChapterDataById'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  h1: {
    paddingTop: 24,
    paddingBottom: 16,
  },
})

export default function ChapterScreen({ route }) {
  const { chapterId } = route.params

  const chapter = getChapterById(chapterId)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <H1Text style={styles.h1}>{chapter.chapterNumber}</H1Text>
        <H4Text>{chapter.title}</H4Text>
      </View>
      <AudioPlayer />
      <DropDownText chapterId={chapterId} />
    </View>
  )
}
