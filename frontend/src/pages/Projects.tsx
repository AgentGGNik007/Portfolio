import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'

function Projects() {
  const { t } = useTranslation()
  return (
    <MainLayout pageKey="nav.projects">
      <h1>{t('nav.projects.title')}</h1>
    </MainLayout>
  )
}

export default Projects
