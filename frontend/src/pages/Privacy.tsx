import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'

function Privacy() {
  const { t } = useTranslation()
  return (
    <MainLayout pageKey="legal.privacy">
    </MainLayout>
  )
}

export default Privacy
