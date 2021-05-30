import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { chapters } from '../constants/Chapters'
import { AntDesign } from '@expo/vector-icons'
import { Body1, H1Text, H2Text, H4Text } from '../components/StyledText'
import AudioPlayer from '../components/AudioPlayer'

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
  textToggleBarContainer: {
    flex: 1,
    width: '100%',
  },
  textToggleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 16,
    alignSelf: 'stretch',
    padding: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  textContainer: {
    flex: 1,
    paddingBottom: 52,
  },
})

export default function ChapterScreen({ route }) {
  const [toggleText, setToggleText] = useState(false)

  const { chapterId } = route.params

  const getChapterById = (chapterId: number) => {
    return chapters.filter((chapter) => chapter.chapterId === chapterId)[0]
  }

  const chapter = getChapterById(chapterId)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <H1Text style={styles.h1}>{chapter.chapterNumber}</H1Text>
        <H4Text>{chapter.title}</H4Text>
      </View>
      <AudioPlayer />
      <View style={styles.textToggleBarContainer}>
        <View style={styles.textToggleBar}>
          <Body1>READ ALONG</Body1>
          <TouchableOpacity onPress={() => setToggleText(!toggleText)}>
            {!toggleText ? (
              <AntDesign name="down-square-o" size={24} color="black" />
            ) : (
              <AntDesign name="closesquareo" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        {toggleText && (
          <ScrollView style={styles.textContainer}>
            <Body1>{chapter.text}</Body1>
          </ScrollView>
        )}
      </View>
    </View>
  )
}
