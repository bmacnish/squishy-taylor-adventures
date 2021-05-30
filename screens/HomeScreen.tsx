import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { chapters } from '../constants/Chapters'
import ChapterListItem from '../components/ChapterListItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
})

export default function HomeScreen() {
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
