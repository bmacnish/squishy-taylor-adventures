import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { ChapterType } from '../constants/Chapters'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native'
import { H3Text } from './StyledText'
import getChapterDataById from '../helpers/getChapterDataById'

const styles = StyleSheet.create({
  chapterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 4,
    alignItems: 'center',
  },
  separator: {
    borderBottomWidth: 2,
    width: '100%',
    alignSelf: 'center',
    borderBottomColor: '#bbb',
  },
})

interface ChapterListItemPropType {
  chapterData: ChapterType
}

export default function ChapterListItem({
  chapterData,
}: ChapterListItemPropType) {
  const { colors } = useTheme()
  const navigation = useNavigation()

  const onPress = (chapterId: number) => {
    navigation.navigate('ChapterScreen', {
      chapterId: chapterId,
      name: chapterData.chapterNumber,
    })
  }

  return (
    <TouchableOpacity onPress={() => onPress(chapterData.chapterId)}>
      <View style={styles.chapterItem}>
        <H3Text>{chapterData.chapterNumber.toUpperCase()}</H3Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={28}
          color={colors.text}
        />
      </View>
      <View style={[styles.separator, { borderBottomColor: colors.border }]} />
    </TouchableOpacity>
  )
}
