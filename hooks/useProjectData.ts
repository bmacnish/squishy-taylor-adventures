import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback, useEffect, useState } from 'react'

export interface ProjectType {
  projectId: string
  title: string
  subtitle: string
  chapters: Array<ChapterType>
}

export interface ChapterType {
  chapterId: number
  chapterNumber?: string
  title: string
  text: string
  nextPage?: number
}

export default function useProjectData() {
  const [projects, setProjects] = useState<Array<ProjectType> | []>([])

  const getProjects = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@projects')
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (error) {
      // TODO: Handle errors
      console.log(error)
    }
  }, [])

  useEffect(() => {
    const foo = async () => {
      const result = await getProjects()
      setProjects(result.projects)
    }

    foo()
  }, [getProjects])

  return projects
}
