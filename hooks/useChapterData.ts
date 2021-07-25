import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

export interface ChapterType {
  chapterId: number
  chapterNumber: string
  title: string
  text: string
  nextPage?: number
}

export default function useChapterData() {
  const [chapters, setChapters] = useState<Array<ChapterType> | undefined>()

  useEffect(() => {
    getChapters()
  }, [])

  const getChapters = async () => {
    try {
      const value = await AsyncStorage.getItem('@chapters')
      if (value !== null) {
        const result = JSON.parse(value)
        setChapters(result)
      } else {
        // TODO: Handle errors
        console.log('Values missing from the store')
      }
    } catch (error) {
      // TODO: Handle errors
      console.log(error)
    }
  }

  return chapters
}
