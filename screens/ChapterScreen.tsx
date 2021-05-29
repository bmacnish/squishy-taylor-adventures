import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { chapters } from '../constants/Chapters'
import { Audio, AVPlaybackStatus } from 'expo-av'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
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

  const playAudio = async () => {
    const { sound, status } = await Audio.Sound.createAsync(
      require(`../assets/audio/chapterAudio/1.mp3`)
    )

    setSound(sound)
    setStatus(status)

    await sound.playAsync()
  }

  const pauseAudio = async () => {
    if (status?.isLoaded) {
      sound?.setStatusAsync
    }
    await sound?.pauseAsync()
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
      <Text>{chapter.chapterNumber}</Text>
      <Text>{chapter.title}</Text>
      <TouchableOpacity onPress={playAudio}>
        <Text>Play Audio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pauseAudio}>
        <Text>Pause Audio</Text>
      </TouchableOpacity>
    </View>
  )
}
