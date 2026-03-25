import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  return (
    <MainLayout pageKey="nav.home">
      <h1>{t('nav.home.title')}</h1>
    </MainLayout>
  )
}

export default Home
