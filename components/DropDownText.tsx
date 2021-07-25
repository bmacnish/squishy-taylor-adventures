import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Body1 } from '../components/StyledText'
import getChapterById from '../helpers/getChapterDataById'
import { useTheme } from '@react-navigation/native'
import { colors } from '../constants/Colors'

const styles = StyleSheet.create({
  textToggleBarContainer: {
    flex: 1,
    width: '100%',
  },
  textToggleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 16,
    alignSelf: 'stretch',
    padding: 8,
    borderBottomWidth: 2,
  },
  textContainer: {
    flex: 1,
    paddingBottom: 52,
  },
})

export default function DropDownText({ chapterId }: { chapterId: number }) {
  const [toggleText, setToggleText] = useState(false)

  const chapter = getChapterById(chapterId)

  return (
    <View style={styles.textToggleBarContainer}>
      <View style={[styles.textToggleBar, { borderBottomColor: colors.light }]}>
        <Body1 color={colors.light}>READ ALONG</Body1>
        <TouchableOpacity onPress={() => setToggleText(!toggleText)}>
          {!toggleText ? (
            <AntDesign name="down-square-o" size={24} color={colors.light} />
          ) : (
            <AntDesign name="closesquareo" size={24} color={colors.light} />
          )}
        </TouchableOpacity>
      </View>
      {toggleText && (
        <ScrollView style={styles.textContainer}>
          {chapter && <Body1 color={colors.light}>{chapter.text}</Body1>}
        </ScrollView>
      )}
    </View>
  )
}
