import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Audio, AVPlaybackStatus } from 'expo-av'
import { AntDesign } from '@expo/vector-icons'
import { Body1 } from './StyledText'

const styles = StyleSheet.create({
  audioControls: {
    paddingVertical: 12,
    borderRadius: 20,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eee',
  },
  audioControlElement: {
    alignItems: 'center',
  },
})

export default function AudioPlayer() {
  const [sound, setSound] = useState<Audio.Sound | null>()
  const [status, setStatus] = useState<AVPlaybackStatus | null>()

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
    <View style={styles.audioControls}>
      <TouchableOpacity style={styles.audioControlElement} onPress={playAudio}>
        <AntDesign name="playcircleo" size={24} color="black" />
        <Body1 style={{ paddingTop: 4 }}>PLAY</Body1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.audioControlElement} onPress={pauseAudio}>
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
  )
}
