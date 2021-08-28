import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Body1, H4Text, LabelText } from './StyledText'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  itemContainer: {
    paddingBottom: 4,
  },
  title: {
    fontWeight: '300',
  },
  subtitle: {
    paddingBottom: 4,
  },
})

export default function Credits({ credits }: Record<string, string> | string) {
  const role = Object.keys(credits)

  const creditItems = role.map((role, index) => {
    return (
      <View style={styles.itemContainer} key={index}>
        <Body1>{credits[role]}</Body1>
        <LabelText style={styles.title}>{role}</LabelText>
      </View>
    )
  })

  const handleCredits = () => {
    if (typeof credits === 'string') {
      return (
        <>
          <H4Text style={styles.subtitle}>Credits</H4Text>
          <Body1>{credits}</Body1>
        </>
      )
    } else {
      return creditItems
    }
  }

  return <View style={styles.container}>{handleCredits()}</View>
}
