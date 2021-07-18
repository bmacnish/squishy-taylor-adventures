import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Audio } from 'expo-av'
import { AntDesign } from '@expo/vector-icons'
import { LabelText } from './StyledText'
import { colors } from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    paddingTop: 16,
    paddingBottom: 12,
    borderRadius: 20,
    shadowColor: colors.dark,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
  },
  text: {
    paddingTop: 4,
    color: colors.light,
  },
  labelText: {
    paddingTop: 4,
  },
})

const RECOMMENCE_BUFFER = 200
const SEEK_BUFFER = 15000

export default function AudioPlayer() {
  const [sound, setSound] = useState<Audio.Sound>()
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const initializeAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require(`../assets/audio/chapterAudio/1.mp3`)
      )

      setSound(sound)
    }
    console.log('Running initialize audio')
    initializeAudio()
  }, [])

  const playPauseAudio = async () => {
    if (isPlaying) {
      await sound?.pauseAsync()
      setIsPlaying(false)
      return
    }

    const currentStatus = await sound?.getStatusAsync()
    if (currentStatus?.isLoaded) {
      sound?.setPositionAsync(currentStatus.positionMillis - RECOMMENCE_BUFFER)
    }
    await sound?.playAsync()

    setIsPlaying(true)
  }

  const skip = async (direction: 'forward' | 'backward') => {
    try {
      const currentStatus = await sound?.getStatusAsync()

      if (currentStatus?.isLoaded && direction === 'forward') {
        sound?.setPositionAsync(currentStatus.positionMillis + SEEK_BUFFER)
      } else if (currentStatus?.isLoaded && direction === 'backward') {
        sound?.setPositionAsync(currentStatus.positionMillis - SEEK_BUFFER)
      }

      await sound?.playAsync()

      setIsPlaying(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => skip('backward')}>
        <AntDesign name="stepbackward" size={24} color={colors.light} />
        <LabelText color={colors.light} style={styles.labelText}>
          BACK
        </LabelText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={playPauseAudio}>
        {isPlaying ? (
          <>
            <AntDesign name="pause" size={24} color={colors.light} />
            <LabelText color={colors.light} style={styles.labelText}>
              PAUSE
            </LabelText>
          </>
        ) : (
          <>
            <AntDesign name="caretright" size={24} color={colors.light} />
            <LabelText color={colors.light} style={styles.labelText}>
              PLAY
            </LabelText>
          </>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => skip('forward')}>
        <AntDesign name="stepforward" size={24} color={colors.light} />
        <LabelText color={colors.light} style={styles.labelText}>
          FORWARD
        </LabelText>
      </TouchableOpacity>
    </View>
  )
}
