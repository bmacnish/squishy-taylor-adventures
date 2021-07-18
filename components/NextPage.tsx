import React from 'react'
import { StyleSheet, View } from 'react-native'
import { chapters } from '../constants/Chapters'
import { appColors, projectColors } from '../constants/Colors'
import { LabelText } from './StyledText'

const styles = StyleSheet.create({
  container: {
    backgroundColor: projectColors.orange,
    padding: 12,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginTop: 16,
    shadowColor: appColors.black,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
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
