import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'
import { useResume } from '../hooks/useResume'

function Resume() {
  const { t } = useTranslation()
  const { resume, loading, error } = useResume()

  if (loading) return <MainLayout pageKey="nav.resume"><p>{t('resume.loading')}</p></MainLayout>
  if (error || !resume) return <MainLayout pageKey="nav.resume"><p className="status-error">{t('resume.error')}</p></MainLayout>

  return (
    <MainLayout pageKey="nav.resume">
      <div className="cv">

        <section>
          <p className="cv-label">{t('resume.experience')}</p>
          {resume.experience.map((e) => (
            <div className="cv-row" key={e.id}>
              <span className="cv-year">{e.year}</span>
              <div>
                <p className="cv-title">{e.title}</p>
                {e.sub && <p className="cv-sub">{e.sub}</p>}
              </div>
            </div>
          ))}
        </section>

        <section>
          <p className="cv-label">{t('resume.education')}</p>
          {resume.education.map((e) => (
            <div className="cv-row" key={e.id}>
              <span className="cv-year">{e.year}</span>
              <div>
                <p className="cv-title">{e.title}</p>
                {e.sub && <p className="cv-sub">{e.sub}</p>}
              </div>
            </div>
          ))}
        </section>

        <section>
          <p className="cv-label">{t('resume.initiative')}</p>
          {resume.initiative.map((e) => (
            <div className="cv-row" key={e.id}>
              <span className="cv-year">{e.year}</span>
              <div>
                <p className="cv-title">{e.title}</p>
                {e.sub && <p className="cv-sub">{e.sub}</p>}
                <a href="/projekte" className="cv-link">{t('resume.projectsLink')}</a>
              </div>
            </div>
          ))}
        </section>

        <section>
          <p className="cv-label">{t('resume.languages')}</p>
          <div className="cv-row">
            <span className="cv-year"></span>
            <div>
              {resume.languages.map((l) => (
                <div className="cv-lang-row" key={l.id}>
                  <span>{l.name}</span>
                  <span>{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </MainLayout>
  )
}

export default Resume