/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

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
}
