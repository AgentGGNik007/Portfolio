import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'

function Privacy() {
  const { t } = useTranslation()
  return (
    <MainLayout pageKey="legal.privacy">
      <h1>{t('legal.privacy.title')}</h1>
    </MainLayout>
  )
}

export default Privacy
