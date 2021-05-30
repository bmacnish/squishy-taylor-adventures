import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native'
import { chapters } from '../constants/Chapters'
import { Audio, AVPlaybackStatus } from 'expo-av'
import { AntDesign } from '@expo/vector-icons'
import { Body1, H1Text, H2Text, H4Text } from '../components/StyledText'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 24,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  audioControls: {
    paddingVertical: 24,
    borderRadius: 20,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'pink',
  },
  audioControlElement: {
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingTop: 24,
  },
})

export default function ChapterScreen({ route }) {
  const [sound, setSound] = useState<Audio.Sound | null>()
  const [status, setStatus] = useState<AVPlaybackStatus | null>()

  const { chapterId } = route.params

  const getChapterById = (chapterId: number) => {
    return chapters.filter((chapter) => chapter.chapterId === chapterId)[0]
  }

  const chapter = getChapterById(chapterId)

  useEffect(() => {
    const initializeAudio = async () => {
      const { sound, status } = await Audio.Sound.createAsync(
        require(`../assets/audio/chapterAudio/1.mp3`)
      )

      setSound(sound)
      setStatus(status)
    }

    initializeAudio()
  }, [])

  const playAudio = async () => {
    await sound?.playAsync()
  }

  const pauseAudio = async () => {
    await sound?.pauseAsync()
  }

  const restartAudio = async () => {
    const { sound, status } = await Audio.Sound.createAsync(
      require(`../assets/audio/chapterAudio/1.mp3`)
    )

    setSound(sound)
    setStatus(status)

    await sound?.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <H1Text>{chapter.chapterNumber}</H1Text>
        <H4Text>{chapter.title}</H4Text>
      </View>
      <View style={styles.audioControls}>
        <TouchableOpacity
          style={styles.audioControlElement}
          onPress={playAudio}
        >
          <AntDesign name="playcircleo" size={24} color="black" />
          <Body1 style={{ paddingTop: 4 }}>PLAY</Body1>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.audioControlElement}
          onPress={pauseAudio}
        >
          <AntDesign name="pausecircleo" size={24} color="black" />
          <Body1 style={{ paddingTop: 4 }}>PAUSE</Body1>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.audioControlElement}
          onPress={restartAudio}
        >
          <AntDesign name="sync" size={24} color="black" />
          <Body1 style={{ paddingTop: 4 }}>RESTART</Body1>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.textContainer}>
        <Body1>{chapter.text}</Body1>
      </ScrollView>
    </View>
  )
}
