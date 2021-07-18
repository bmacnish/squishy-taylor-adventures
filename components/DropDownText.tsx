import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Body1 } from '../components/StyledText'
import getChapterById from '../helpers/getChapterDataById'
import { useTheme } from '@react-navigation/native'
import { appColors } from '../constants/Colors'

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
  const { colors } = useTheme()

  const [toggleText, setToggleText] = useState(false)

  const chapter = getChapterById(chapterId)

  return (
    <View style={styles.textToggleBarContainer}>
      <View
        style={[styles.textToggleBar, { borderBottomColor: appColors.white }]}
      >
        <Body1 color={appColors.white}>READ ALONG</Body1>
        <TouchableOpacity onPress={() => setToggleText(!toggleText)}>
          {!toggleText ? (
            <AntDesign name="down-square-o" size={24} color={appColors.white} />
          ) : (
            <AntDesign name="closesquareo" size={24} color={appColors.white} />
          )}
        </TouchableOpacity>
      </View>
      {toggleText && (
        <ScrollView style={styles.textContainer}>
          <Body1 color={appColors.white}>{chapter.text}</Body1>
        </ScrollView>
      )}
    </View>
  )
}
