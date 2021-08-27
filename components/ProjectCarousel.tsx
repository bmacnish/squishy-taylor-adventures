import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { colors } from '../constants/Colors'
import { Body1, H2Text, H3Text } from './StyledText'
import { ProjectType } from '../hooks/useProjectData'
import Map from '../components/Map'
import useDynamicTextColor from '../hooks/useDynamicTextColor'
import { Ionicons } from '@expo/vector-icons'

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
    padding: 8,
  },
  projectTitle: {
    paddingTop: 8,
  },
  lockContainer: {
    flexDirection: 'row-reverse',
  },
})

interface ProjectCarouselProps {
  data: Array<ProjectType>
}

export default function ProjectCarousel({ data }: ProjectCarouselProps) {
  const sliderWidth = Dimensions.get('window').width
  const itemWidth = Dimensions.get('window').width - 64
  const navigation = useNavigation()
  const textColor = useDynamicTextColor()
  const coordinates = {
    latitude: -37.8136,
    longitude: 144.9631,
  }

  const onPress = (projectId: string, projectTitle: string) => {
    navigation.navigate('ProjectScreen', {
      projectId: projectId,
      name: projectTitle,
    })
  }

  const renderItem = ({ item }: { item: ProjectType }) => {
    return (
      <View style={[styles.card]}>
        <TouchableOpacity onPress={() => onPress(item.projectId, item.title)}>
          <View style={styles.projectCardContainer}>
            <Map coordinates={coordinates} />
            <View style={styles.description}>
              <View>
                <H2Text color={textColor} style={styles.projectTitle}>
                  {item.title}
                </H2Text>
                <H3Text color={textColor}>by The Inhabitors</H3Text>
              </View>
              <Body1 color={textColor}>
                Ghosts are appearing across the city and Squishy Taylor,
                11-year-old ninja-spy and super-sleuth, is hot on their trail.
              </Body1>
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
