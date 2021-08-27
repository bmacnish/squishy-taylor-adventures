import { useCallback, useEffect, useState } from 'react'
import useProjectData, { ProjectType } from '../hooks/useProjectData'

export default (projectId: string) => {
  const projects = useProjectData()
  const [project, setProject] = useState<ProjectType>()

  const getProject = useCallback(() => {
    const project = projects?.filter(
      (project) => project.projectId === projectId
    )[0]

    setProject(project)
  }, [projectId, projects])

  useEffect(() => {
    getProject()
  }, [getProject])

  return project
}
