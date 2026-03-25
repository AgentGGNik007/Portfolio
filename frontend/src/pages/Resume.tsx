import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'

function Resume() {
  const { t } = useTranslation()
  return (
    <MainLayout pageKey="nav.resume">
      <h1>{t('nav.resume.title')}</h1>
    </MainLayout>
  )
}

export default Resume
