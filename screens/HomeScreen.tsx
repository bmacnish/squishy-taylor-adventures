import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { chapters } from '../constants/Chapters'
import ChapterListItem from '../components/ChapterListItem'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
})

export default function HomeScreen() {
  const theme = useTheme()

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
