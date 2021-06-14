import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { ChapterType } from '../constants/Chapters'
import { H1Text, H3Text } from './StyledText'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 400,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: 'white',
  },
  cardImage: {
    borderRadius: 20,
    flex: 1,
  },
  imageContainer: {},
  cardText: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 20,
  },
})

interface CardCarouselProps {
  chapters: Array<ChapterType>
}

export default function CardCarousel({ chapters }: CardCarouselProps) {
  const sliderWidth = Dimensions.get('window').width
  const itemWidth = Dimensions.get('window').width - 64
  const navigation = useNavigation()

  const onPress = (chapterId: number, chapterNumber: string) => {
    navigation.navigate('ChapterScreen', {
      chapterId: chapterId,
      name: chapterNumber,
    })
  }

  const renderItem = ({ item }: { item: ChapterType; index: number }) => {
    return (
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => onPress(item.chapterId, item.chapterNumber)}
      >
        <View style={styles.cardImage}>
          <Image
            style={{
              resizeMode: 'cover',
              borderRadius: 20,
              width: '100%',
              height: '100%',
            }}
            source={require('../assets/images/poppy.png')}
          />
        </View>
        <View style={styles.cardText}>
          <H1Text>{item.chapterNumber}</H1Text>
          <H3Text>{item.title}</H3Text>
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
