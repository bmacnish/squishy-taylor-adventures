import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Audio, AVPlaybackStatus } from 'expo-av'
import { AntDesign } from '@expo/vector-icons'
import { LabelText } from './StyledText'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderRadius: 20,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eee',
  },
  button: {
    alignItems: 'center',
  },
  text: {
    paddingTop: 4,
    color: 'black',
  },
})

export default function AudioPlayer() {
  const [sound, setSound] = useState<Audio.Sound | null>()

  useEffect(() => {
    const initializeAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require(`../assets/audio/chapterAudio/1.mp3`)
      )

      setSound(sound)
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
      <TouchableOpacity style={styles.button} onPress={playAudio}>
        <AntDesign name="playcircleo" size={24} color="black" />
        <LabelText style={styles.text}>PLAY</LabelText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={pauseAudio}>
        <AntDesign name="pausecircleo" size={24} color="black" />
        <LabelText style={styles.text}>PAUSE</LabelText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={restartAudio}>
        <AntDesign name="sync" size={24} color="black" />
        <LabelText style={styles.text}>RESTART</LabelText>
      </TouchableOpacity>
    </View>
  )
}
