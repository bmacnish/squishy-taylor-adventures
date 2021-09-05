import React, { useEffect, useState } from 'react'
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

type CreditType =
  | {
      credits: Record<string, string> | string
    }
  | string

export default function Credits(credits: CreditType) {
  const [roles, setRoles] = useState<Array<string>>()

  useEffect(() => {
    if (typeof credits.credits === 'object') {
      setRoles(Object.keys(credits.credits))
    }
  }, [credits])

  const creditItems = roles?.map((role, index) => {
    const credit = role
    const artist = typeof credits === 'object' ? credits.credits[role] : ''

    return (
      <View style={styles.itemContainer} key={index}>
        <Body1>{credit}</Body1>
        <LabelText style={styles.title}>{artist}</LabelText>
      </View>
    )
  })

  const handleCredits = () => {
    if (typeof credits.credits === 'string') {
      return (
        <>
          <H4Text style={styles.subtitle}>Credits</H4Text>
          <Body1>{credits.credits}</Body1>
        </>
      )
    } else {
      return creditItems
    }
  }

  return <View style={styles.container}>{handleCredits()}</View>
}
