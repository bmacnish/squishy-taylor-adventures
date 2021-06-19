import text from '../assets/text.json'

export interface ChapterType {
  chapterId: number
  chapterNumber: string
  title: string
  text: string
  nextPage?: number
}

export const chapters: Array<ChapterType> = [
  {
    chapterId: 0,
    chapterNumber: 'Welcome',
    title: 'Getting started',
    text: text.prologue,
  },
  {
    chapterId: 1,
    chapterNumber: 'Chapter One',
    title: 'There’s a ghost mystery...',
    text: text.chapterOne,
    nextPage: 16,
  },
  {
    chapterId: 2,
    chapterNumber: 'Chapter Two',
    title: 'The ghost map gets bigger',
    text: text.chapterTwo,
  },
  {
    chapterId: 3,
    chapterNumber: 'Chapter Three',
    title: 'Venture into the night!',
    text: text.chapterThree,
    nextPage: 14,
  },
  {
    chapterId: 4,
    chapterNumber: 'Chapter Four',
    title: 'Venture into the night!',
    text: text.chapterThree,
    nextPage: 24,
  },
  {
    chapterId: 5,
    chapterNumber: 'Chapter Five',
    title: 'Venture into the night!',
    text: text.chapterThree,
    nextPage: 30,
  },
]
