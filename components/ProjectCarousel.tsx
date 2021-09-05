import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Body1, H3Text, LabelText } from './StyledText'
import { ProjectType } from '../hooks/useProjectData'
import Map from '../components/Map'
import useDynamicTextColor from '../hooks/useDynamicTextColor'
import { Ionicons } from '@expo/vector-icons'
import HeroImage from './HeroImage'
import { HomeScreenNavigationProp } from '../types'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    height: 400,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  projectCardContainer: {
    flex: 1,
  },
  description: {
    flex: 2,
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  projectTitle: {
    paddingTop: 8,
  },
  lockContainer: {
    flexDirection: 'row-reverse',
  },
  image: {
    height: 200,
    width: 200,
  },
})

interface ProjectCarouselProps {
  data: Array<ProjectType>
}

export default function ProjectCarousel({ data }: ProjectCarouselProps) {
  const sliderWidth = Dimensions.get('window').width
  const itemWidth = Dimensions.get('window').width - 64
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const textColor = useDynamicTextColor()

  const onPress = (projectId: string) => {
    navigation.navigate('ProjectInfoModalScreen', {
      projectId: projectId,
    })
  }

  const renderItem = ({ item }: { item: ProjectType }) => {
    const { metadata, title, artist, projectId } = item
    const { coordinates, shortDescription, heroImage } = metadata

    return (
      <View style={[styles.card]}>
        <TouchableOpacity onPress={() => onPress(projectId)}>
          <View style={styles.projectCardContainer}>
            {coordinates && <Map coordinates={coordinates} />}
            {heroImage && <HeroImage projectId={projectId} />}
            <View style={styles.description}>
              <View>
                <H3Text color={textColor} style={styles.projectTitle}>
                  {title}
                </H3Text>
                <LabelText color={textColor}>by {artist}</LabelText>
              </View>
              <Body1 color={textColor}>{shortDescription}</Body1>
              <View style={styles.lockContainer}>
                <Ionicons name="ios-lock-closed" size={32} color={textColor} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Carousel
        containerCustomStyle={{ flexGrow: 0 }}
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    </View>
  )
}
