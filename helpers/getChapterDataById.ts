import { useCallback, useEffect, useState } from 'react'
import { ChapterType } from '../hooks/useProjectData'
import getProjectDataById from './getProjectDataById'

export default (projectId: string, chapterId: number) => {
  const [chapter, setChapter] = useState<ChapterType>()
  const project = getProjectDataById(projectId)

  const getChapter = useCallback(() => {
    if (project != undefined) {
      const chapters = project.chapters
      const chapter = chapters?.filter(
        (chapters) => chapters.chapterId === chapterId
      )[0]

      setChapter(chapter)
    }
  }, [chapterId, project])

  useEffect(() => {
    getChapter()
  }, [getChapter])

  return chapter
}
