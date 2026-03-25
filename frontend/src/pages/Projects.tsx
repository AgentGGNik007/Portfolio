import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'
import { useProjects } from '../hooks/useProjects'

function Projects() {
  const { t } = useTranslation()
  const { projects, loading, error } = useProjects()

  return (
    <MainLayout pageKey="nav.projects">

      {loading && <p>{t('projects.loading')}</p>}
      {error && <p className="status-error">{t('projects.error')}</p>}

      {!loading && !error && (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>{project.tech.join(', ')}</p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {t('projects.github')}
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  {t('projects.live')}
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