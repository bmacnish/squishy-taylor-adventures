import React from 'react'
import { StyleSheet, View } from 'react-native'
import { chapters } from '../constants/Chapters'
import { projectColors } from '../constants/Colors'
import { LabelText } from './StyledText'

const styles = StyleSheet.create({
  container: {
    backgroundColor: projectColors.orange,
    padding: 12,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginTop: 16,
  },
})

type NextPageProps = {
  chapterId: number
}

export default function NextPage({ chapterId }: NextPageProps) {
  const nextPage = chapters[chapterId].nextPage
  return (
    <View style={styles.container}>
      <LabelText>{`Go to page ${nextPage}`}</LabelText>
    </View>
  )
}
