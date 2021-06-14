import * as React from 'react'
import { StyleSheet } from 'react-native'
import { H1Text } from '../components/StyledText'
import { View } from '../components/Themed'

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <H1Text>Settings</H1Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
