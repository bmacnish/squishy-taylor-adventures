import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { ChapterType } from '../constants/Chapters'
import {
  cardBackgroundColors,
  CardBackgroundColorsType,
} from '../constants/Colors'
import { H1Text, H3Text } from './StyledText'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    height: 400,
    borderRadius: 24,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: '94%',
    width: '92%',
  },
  chapterTitle: {
    paddingTop: 16,
  },
})

interface CardCarouselProps {
  chapters: Array<ChapterType>
}

export default function CardCarousel({ chapters }: CardCarouselProps) {
  const sliderWidth = Dimensions.get('window').width
  const itemWidth = Dimensions.get('window').width - 64
  const navigation = useNavigation()

  const getBackgroundColor = (chapterId: number) => {
    return cardBackgroundColors[chapterId]
  }

  const onPress = (chapterId: number, chapterNumber: string) => {
    navigation.navigate('ChapterScreen', {
      chapterId: chapterId,
      name: chapterNumber,
      headerStyle: {
        backgroundColor: getBackgroundColor(chapterId),
      },
    })
  }

  const renderItem = ({
    item,
    index,
  }: {
    item: ChapterType
    index: number
  }) => {
    const chapterId = item.chapterId as keyof CardBackgroundColorsType

    return (
      <TouchableOpacity
        style={[
          styles.card,
          { backgroundColor: getBackgroundColor(chapterId) },
        ]}
        onPress={() => onPress(item.chapterId, item.chapterNumber)}
      >
        <View style={styles.cardContainer}>
          <H1Text align="center">{item.chapterNumber}</H1Text>
          <H3Text align="center" style={styles.chapterTitle}>
            {item.title}
          </H3Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Carousel
        containerCustomStyle={{ flexGrow: 0 }}
        data={chapters}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    </View>
  )
}
