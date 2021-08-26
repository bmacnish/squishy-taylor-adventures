import getProjectDataById from './getProjectDataById'

export default (projectId: string, chapterId: number) => {
  const project = getProjectDataById(projectId)
  const chapters = project.chapters

  const result = chapters?.filter(
    (chapters) => chapters.chapterId === chapterId
  )[0]

  return result
}
