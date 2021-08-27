import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { colors } from '../constants/Colors'
import { H2Text } from './StyledText'
import { LinearGradient } from 'expo-linear-gradient'
import { ProjectType } from '../hooks/useProjectData'

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
  projectCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: '94%',
    width: '92%',
  },
  projectTitle: {
    paddingTop: 8,
  },
})

interface ProjectCarouselProps {
  data: Array<ProjectType>
}

export default function ProjectCarousel({ data }: ProjectCarouselProps) {
  const sliderWidth = Dimensions.get('window').width
  const itemWidth = Dimensions.get('window').width - 64
  const navigation = useNavigation()

  const onPress = (projectId: string, projectTitle: string) => {
    navigation.navigate('ProjectScreen', {
      projectId: projectId,
      name: projectTitle,
    })
  }

  const renderItem = ({ item }: { item: ProjectType }) => {
    return (
      <LinearGradient
        colors={[colors.orange, colors.magenta, colors.darkblue]}
        style={[styles.card]}
        start={{ x: 0.1, y: 0.2 }}
      >
        <TouchableOpacity onPress={() => onPress(item.projectId, item.title)}>
          <View style={styles.projectCardContainer}>
            <H2Text
              color={colors.light}
              align="center"
              style={styles.projectTitle}
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
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    </View>
  )
}
