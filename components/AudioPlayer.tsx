import React, { useEffect, useState } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { Audio, AVPlaybackStatus } from 'expo-av'
import { AntDesign } from '@expo/vector-icons'
import { LabelText } from './StyledText'
import { colors } from '../constants/Colors'
import Slider from '@react-native-community/slider'
import { useCallback } from 'react'
import firebase from 'firebase/app'

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
  },
  controlsContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  sliderContainer: {
    paddingTop: 8,
    alignItems: 'center',
  },
  slider: {
    width: '90%',
    height: 40,
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
  time: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '84%',
  },
})

const RECOMMENCE_BUFFER = 200
const SEEK_BUFFER = 15000

interface AudioPlayerProps {
  chapterId: number
  projectId: string
}

export default function AudioPlayer({
  chapterId,
  projectId,
}: AudioPlayerProps): JSX.Element {
  const [sound, setSound] = useState<Audio.Sound>()
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentDuration, setCurrentDuration] = useState(0)

  function millisToMinutesAndSeconds(millis: number) {
    const minutes = Math.floor(millis / 60000)
    const seconds = Math.floor((millis % 60000) / 1000)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds.toFixed(0)
  }

  const onPlaybackStatusUpdate = useCallback(
    (status: AVPlaybackStatus) => {
      if (status.isLoaded && !isSliding) {
        const currentSliderPosition = status.positionMillis
        const lengthOfTrack = status.durationMillis

        if (lengthOfTrack) {
          setDuration(lengthOfTrack)
          setCurrentDuration(currentSliderPosition)
          setSliderPosition(currentSliderPosition / lengthOfTrack)
        }
      }
    },
    [isSliding]
  )

  const getDownloadUrl = useCallback(async () => {
    const defaultStorage = await firebase.storage()
    const chapterIdString = chapterId.toString()
    const storageRef = await defaultStorage.ref(
      `/${projectId}/${chapterId}.mp3`
    )
    const url = await storageRef.getDownloadURL()

    return url
  }, [chapterId])

  useEffect(() => {
    const initializeAudio = async () => {
      try {
        const uri = await getDownloadUrl()
        const source = {
          uri,
        }

        const { sound } = await Audio.Sound.createAsync(source)

        setSound(sound)
        setIsLoading(false)
      } catch (error) {
        // TODO: Handle error
        console.log(error)
      }
    }
    initializeAudio()
  }, [getDownloadUrl])

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
    }
  }, [onPlaybackStatusUpdate, sound])

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  const playPauseAudio = useCallback(async () => {
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
  }, [isPlaying, sound])

  const skip = useCallback(
    async (direction: 'forward' | 'backward') => {
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
    },
    [sound]
  )

  const onSlidingStart = useCallback(() => {
    setIsSliding(true)
  }, [])

  const onSlidingComplete = useCallback(
    async (value: number) => {
      const currentStatus = await sound?.getStatusAsync()

      if (currentStatus?.isLoaded && currentStatus.durationMillis) {
        const position = value * currentStatus.durationMillis
        await sound?.setPositionAsync(position)
        setIsSliding(false)
        setSliderPosition(value)
      }
    },
    [sound]
  )

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => skip('backward')}
        >
          <AntDesign name="stepbackward" size={24} color={colors.light} />
          <LabelText color={colors.light} style={styles.labelText}>
            BACK
          </LabelText>
        </TouchableOpacity>
        {isLoading ? (
          <ActivityIndicator color={colors.light} />
        ) : (
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
        )}
        <TouchableOpacity style={styles.button} onPress={() => skip('forward')}>
          <AntDesign name="stepforward" size={24} color={colors.light} />
          <LabelText color={colors.light} style={styles.labelText}>
            SKIP
          </LabelText>
        </TouchableOpacity>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={colors.light}
          maximumTrackTintColor={colors.darkblue}
          value={sliderPosition}
          onSlidingStart={onSlidingStart}
          onSlidingComplete={onSlidingComplete}
        />
        <View style={styles.time}>
          <LabelText color={colors.dark}>
            {millisToMinutesAndSeconds(currentDuration)}
          </LabelText>
          <LabelText color={colors.dark}>
            {millisToMinutesAndSeconds(duration)}
          </LabelText>
        </View>
      </View>
    </View>
  )
}
