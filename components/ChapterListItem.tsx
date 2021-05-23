import React from 'react'
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { chapters, ChapterType } from '../constants/Chapters'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 28,
    marginBottom: 28,
  },
  listHeading: {
    fontSize: 20,
    paddingBottom: 4,
  },
  separator: {
    paddingTop: 8,
    borderBottomWidth: 1,
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
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.listHeading}>{chapterData.chapterNumber}</Text>
      <View style={styles.separator} />
    </TouchableOpacity>
  )
}
