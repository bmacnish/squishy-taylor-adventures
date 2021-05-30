import { chapters } from '../constants/Chapters'

export default (chapterId: number) => {
  return chapters.filter((chapter) => chapter.chapterId === chapterId)[0]
}
