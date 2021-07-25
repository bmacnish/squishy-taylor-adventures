import useChapterData from '../hooks/useChapterData'

export default (chapterId: number) => {
  const chapters = useChapterData()

  return chapters?.filter((chapter) => chapter.chapterId === chapterId)[0]
}
