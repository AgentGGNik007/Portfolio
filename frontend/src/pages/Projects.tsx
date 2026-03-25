import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'
import { useProjects } from '../hooks/useProjects'

function Projects() {
  const { t } = useTranslation()
  const { projects, loading, error } = useProjects()

  return (
    <MainLayout pageKey="nav.projects">
      <h1>{t('nav.projects.title')}</h1>

      {loading && <p>Laden...</p>}
      {error && <p className="status-error">{error}</p>}

      {!loading && !error && (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>{project.tech.join(', ')}</p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </MainLayout>
  )
}

export default Projects