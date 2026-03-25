import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'

function Resume() {
  const { t } = useTranslation()
  return (
    <MainLayout pageKey="nav.resume">
    </MainLayout>
  )
}

export default Resume
