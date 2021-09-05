/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type HomeParamList = {
  HomeScreen: undefined
  ProjectScreen: {
    projectId: string
    name?: string
  }
  ChapterScreen: {
    projectId: string
    chapterId: number
    name?: string
  }
  ProjectInfoModalScreen: {
    projectId: string
  }
}

export type HomeScreenProps = NativeStackScreenProps<
  HomeParamList,
  'HomeScreen'
>
export type HomeScreenNavigationProp = HomeScreenProps['navigation']

export type ProjectScreenProps = NativeStackScreenProps<
  HomeParamList,
  'ProjectScreen'
>

export type ProjectScreenNavigationProp = ProjectScreenProps['navigation']
