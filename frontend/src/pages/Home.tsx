import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  return (
    <MainLayout pageKey="nav.home">
    </MainLayout>
  )
}

export default Home
