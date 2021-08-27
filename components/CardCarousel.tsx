import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { colors } from '../constants/Colors'
import { H2Text, H3Text } from './StyledText'
import { LinearGradient } from 'expo-linear-gradient'
import { ChapterType } from '../hooks/useProjectData'
import getProjectDataById from '../helpers/getProjectDataById'

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
  projectId: string
  chapters: ChapterType[]
}

interface IntroductionCard {
  title: string
  subtitle: string
}

export default function CardCarousel({
  projectId,
  chapters,
}: CardCarouselProps) {
  const sliderWidth = Dimensions.get('window').width
  const itemWidth = Dimensions.get('window').width - 64
  const navigation = useNavigation()
  const project = getProjectDataById(projectId)

  const onPress = (
    projectId: string,
    chapterId: number,
    chapterNumber: string
  ) => {
    navigation.navigate('ChapterScreen', {
      projectId: projectId,
      chapterId: chapterId,
      name: chapterNumber,
    })
  }

  const prependedData = [
    {
      title: project?.title ? project.title : '',
      subtitle: 'Before you begin...',
    },
    ...chapters,
  ]

  function isFirstCard(
    card: ChapterType | IntroductionCard
  ): card is IntroductionCard {
    return (card as IntroductionCard).subtitle !== undefined
  }

  const renderItem = ({ item }: { item: ChapterType | IntroductionCard }) => {
    if (!isFirstCard(item)) {
      return (
        <LinearGradient
          colors={[colors.orange, colors.magenta, colors.darkblue]}
          style={[styles.card]}
          start={{ x: 0.1, y: 0.2 }}
        >
          <TouchableOpacity
            onPress={() =>
              onPress(
                projectId,
                item.chapterId,
                item.chapterNumber ? item.chapterNumber : ''
              )
            }
          >
            <View style={styles.cardContainer}>
              <H3Text
                style={styles.chapterNumber}
                color={colors.light}
                align="center"
              >
                {item.chapterNumber}
              </H3Text>
              <H2Text
                color={colors.light}
                align="center"
                style={styles.chapterTitle}
              >
                {item.title}
              </H2Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      )
    } else {
      return (
        <LinearGradient
          colors={[colors.orange, colors.magenta, colors.darkblue]}
          style={[styles.card]}
          start={{ x: 0.1, y: 0.2 }}
        >
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.cardContainer}>
              <H2Text
                color={colors.light}
                align="center"
                style={styles.chapterTitle}
              >
                {item.title}
              </H2Text>
              <H3Text
                style={styles.chapterNumber}
                color={colors.light}
                align="center"
              >
                {item.subtitle}
              </H3Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      )
    }
  }

  return (
    <View style={styles.container}>
      <Carousel
        containerCustomStyle={{ flexGrow: 0 }}
        data={prependedData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        removeClippedSubviews={false}
      />
    </View>
  )
}
