import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Body1 } from '../components/StyledText'
import useDynamicTextColor from '../hooks/useDynamicTextColor'

const styles = StyleSheet.create({
  textToggleBarContainer: {
    flex: 1,
    width: '100%',
  },
  textToggleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignSelf: 'stretch',
    padding: 8,
    borderBottomWidth: 2,
  },
  labelText: {
    textTransform: 'uppercase',
  },
  textContainer: {
    flex: 1,
    paddingBottom: 52,
  },
})

export default function DropDownText({
  text,
  textColor,
  labelText,
}: {
  text: string
  textColor?: string
  labelText: string
}) {
  const [toggleText, setToggleText] = useState(false)
  const defaultTextColor = useDynamicTextColor()
  const color = textColor ? textColor : defaultTextColor

  return (
    <View style={styles.textToggleBarContainer}>
      <View style={[styles.textToggleBar, { borderBottomColor: color }]}>
        <Body1 color={color} style={styles.labelText}>
          {labelText}
        </Body1>
        <TouchableOpacity onPress={() => setToggleText(!toggleText)}>
          {!toggleText ? (
            <AntDesign name="down-square-o" size={24} color={color} />
          ) : (
            <AntDesign name="closesquareo" size={24} color={color} />
          )}
        </TouchableOpacity>
      </View>
      {toggleText && (
        <ScrollView style={styles.textContainer}>
          <Body1 color={color}>{text}</Body1>
        </ScrollView>
      )}
    </View>
  )
}
