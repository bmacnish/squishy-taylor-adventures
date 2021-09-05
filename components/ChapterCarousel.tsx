import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { colors } from '../constants/Colors'
import { Body1, H2Text, H3Text, LabelText } from './StyledText'
import { ChapterType } from '../hooks/useProjectData'
import getProjectDataById from '../helpers/getProjectDataById'
import { ProjectScreenNavigationProp } from '../types'
import useDynamicTextColor from '../hooks/useDynamicTextColor'
import Map, { Coordinates } from '../components/Map'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    height: 400,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey,
  },
  cardContainer: {
    flex: 1,
  },
  mapContainer: {
    flex: 2,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  labelText: {
    paddingBottom: 4,
  },
  chapterTitle: {
    paddingTop: 8,
  },

  chapterNumber: {
    fontWeight: '300',
  },
})

interface ChapterCarouselProps {
  projectId: string
  chapters: ChapterType[]
}

interface IntroductionCard {
  title: string
  subtitle: string
  additionalInformation?: string
  coordinates?: Coordinates
}

export default function ChapterCarousel({
  projectId,
  chapters,
}: ChapterCarouselProps) {
  const textColor = useDynamicTextColor()
  const sliderWidth = Dimensions.get('window').width
  const itemWidth = Dimensions.get('window').width - 64
  const navigation = useNavigation<ProjectScreenNavigationProp>()
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
      additionalInformation: project?.metadata.additionalInformation,
      coordinates: project?.metadata.coordinates,
    },
    ...chapters,
  ]

  function isFirstCard(
    card: ChapterType | IntroductionCard
  ): card is IntroductionCard {
    return (
      (card as IntroductionCard).subtitle !== undefined &&
      (card as IntroductionCard).title !== undefined
    )
  }

  const renderItem = ({ item }: { item: ChapterType | IntroductionCard }) => {
    if (!isFirstCard(item)) {
      const { chapterId, chapterNumber, title } = item
      return (
        <TouchableOpacity
          onPress={() =>
            onPress(projectId, chapterId, chapterNumber ? chapterNumber : '')
          }
        >
          <View style={styles.card}>
            <View>
              <H3Text
                style={styles.chapterNumber}
                color={textColor}
                align="center"
              >
                {chapterNumber}
              </H3Text>
              <H2Text
                color={textColor}
                align="center"
                style={styles.chapterTitle}
              >
                {title}
              </H2Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    } else {
      const { coordinates, additionalInformation } = item

      return (
        <View style={styles.card}>
          <View style={styles.cardContainer}>
            {coordinates && (
              <View style={styles.mapContainer}>
                <Map coordinates={coordinates} />
              </View>
            )}
            <View style={styles.descriptionContainer}>
              <View>
                <LabelText style={styles.labelText}>Before you start</LabelText>
                <Body1>{additionalInformation}</Body1>
              </View>
            </View>
          </View>
        </View>
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
