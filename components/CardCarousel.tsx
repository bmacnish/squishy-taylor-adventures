import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { ChapterType } from '../constants/Chapters'
import {
  appColors,
  cardBackgroundColors,
  CardBackgroundColorsType,
  projectColors,
} from '../constants/Colors'
import { H1Text, H2Text, H3Text } from './StyledText'
import { LinearGradient } from 'expo-linear-gradient'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    height: 400,
    borderRadius: 24,
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
    paddingTop: 8,
  },
  chapterNumber: {
    fontWeight: '300',
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
      <LinearGradient
        colors={[
          projectColors.orange,
          projectColors.magenta,
          projectColors.darkblue,
        ]}
        style={[styles.card]}
        start={{ x: 0.1, y: 0.2 }}
      >
        <TouchableOpacity
          onPress={() => onPress(item.chapterId, item.chapterNumber)}
        >
          <View style={styles.cardContainer}>
            <H3Text
              style={styles.chapterNumber}
              color={appColors.white}
              align="center"
            >
              {item.chapterNumber}
            </H3Text>
            <H2Text
              color={appColors.white}
              align="center"
              style={styles.chapterTitle}
            >
              {item.title}
            </H2Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
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
