import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../constants/Colors'
import getChapterDataById from '../helpers/getChapterDataById'
import getProjectDataById from '../helpers/getProjectDataById'
import { ChapterType } from '../hooks/useProjectData'
import { LabelText } from './StyledText'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    padding: 12,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginTop: 16,
    shadowColor: colors.dark,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
})

type NextPageProps = {
  projectId: string
  chapterId: number
}

export default function NextPage({ projectId, chapterId }: NextPageProps) {
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

  if (chapter?.nextPage) {
    const nextPage = chapter?.nextPage

    return (
      <View style={styles.container}>
        <LabelText>{`Go to page ${nextPage}`}</LabelText>
      </View>
    )
  } else {
    return null
  }
}
