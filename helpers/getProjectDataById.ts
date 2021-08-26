import useProjectData from '../hooks/useProjectData'

export default (projectId: string) => {
  const projects = useProjectData()

  return projects?.filter((project) => project.projectId === projectId)[0]
}
