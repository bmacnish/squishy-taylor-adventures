import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ChapterType } from '../constants/Chapters'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 8,
  },
  chapterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  listHeading: {
    fontSize: 20,
  },
  separator: {
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
    borderBottomColor: '#bbb',
  },
})

interface ChapterListItemPropType {
  chapterData: ChapterType
}

export default function ChapterListItem({
  chapterData,
}: ChapterListItemPropType) {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('ChapterScreen')
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.chapterItem}>
        <Text style={styles.listHeading}>
          {chapterData.chapterNumber.toUpperCase()}
        </Text>
        <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
      </View>
      <View style={styles.separator} />
    </TouchableOpacity>
  )
}
