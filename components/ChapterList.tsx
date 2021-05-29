import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { chapters } from '../constants/Chapters'
import ChapterListItem from './ChapterListItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})

export default function ChapterList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={chapters}
        keyExtractor={(item) => item.chapterNumber}
        renderItem={({ item }) => <ChapterListItem chapterData={item} />}
      />
    </View>
  )
}
