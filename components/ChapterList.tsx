import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { chapters } from '../constants/Chapters'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default function ChapterList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={chapters}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  )
}
