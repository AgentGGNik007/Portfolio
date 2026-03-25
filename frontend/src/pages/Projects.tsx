import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'
import { useProjects } from '../hooks/useProjects'

function Projects() {
  const { t } = useTranslation()
  const { projects, loading, error } = useProjects()

  const done = projects.filter((p) => p.status === 'done')
  const wip = projects.filter((p) => p.status === 'wip')

  const renderGroup = (list: typeof projects) => (
    <div className="projects-grid">
      {list.map((project) => (
        <div className="project-item" key={project.id}>
          <div className="project-header">
            <span className="project-title">{project.title}</span>
            <div className="project-links">
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
            </div>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span className="tech-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <MainLayout pageKey="nav.projects">
      {loading && <p>{t('projects.loading')}</p>}
      {error && <p className="status-error">{t('projects.error')}</p>}

      {!loading && !error && (
        <div className="projects-wrapper">
          {done.length > 0 && (
            <section>
              <p className="projects-label">{t('projects.done')}</p>
              {renderGroup(done)}
            </section>
          )}
          {wip.length > 0 && (
            <section>
              <p className="projects-label">{t('projects.wip')}</p>
              {renderGroup(wip)}
            </section>
          )}
        </div>
      )}
    </MainLayout>
  )
}

export default Projects
