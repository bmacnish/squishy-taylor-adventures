/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type HomeParamList = {
  ProjectScreen: undefined
  ChapterScreen: {
    chapterId: number
    name: string
  }
}
