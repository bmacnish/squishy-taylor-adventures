import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../constants/Colors'
import useChapterData from '../hooks/useChapterData'
import { LabelText } from './StyledText'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    padding: 12,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginTop: 16,
    shadowColor: colors.dark,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
})

type NextPageProps = {
  chapterId: number
}

export default function NextPage({ chapterId }: NextPageProps) {
  const chapters = useChapterData()

  if (chapters != undefined) {
    const nextPage = chapters[chapterId].nextPage

    return (
      <View style={styles.container}>
        <LabelText>{`Go to page ${nextPage}`}</LabelText>
      </View>
    )
  } else {
    return null
  }
}
