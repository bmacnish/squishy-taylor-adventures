import * as React from 'react'
import { StyleSheet } from 'react-native'

import { View } from '../components/Themed'
import ChapterList from '../components/ChapterList'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ChapterList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})