import firebase from 'firebase'
import React, { useCallback, useState, useEffect } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native'
import { colors } from '../constants/Colors'

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    overflow: 'hidden',
  },
})

export default function HeroImage({ projectId }: { projectId: string }) {
  const width = Dimensions.get('window').width - 64
  const [heroImageURL, setHeroImageURL] = useState()

  const getDownloadURL = useCallback(async (projectId) => {
    const defaultStorage = await firebase.storage()
    const projectIdString = projectId.toString()
    const storageRef = await defaultStorage.ref(
      `/${projectIdString}/heroImage.jpg`
    )
    setHeroImageURL(await storageRef.getDownloadURL())
  }, [])

  useEffect(() => {
    getDownloadURL(projectId)
  }, [getDownloadURL, projectId])

  return (
    <View style={styles.imageContainer}>
      {!heroImageURL ? (
        <ActivityIndicator color={colors.dark} />
      ) : (
        <Image
          style={[styles.image, { width: width }]}
          source={{ uri: heroImageURL }}
        />
      )}
    </View>
  )
}
