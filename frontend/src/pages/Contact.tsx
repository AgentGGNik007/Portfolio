import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()
  return (
    <MainLayout pageKey="nav.contact">
      <h1>{t('nav.contact.title')}</h1>
    </MainLayout>
  )
}

export default Contact
