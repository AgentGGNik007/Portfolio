import { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <MainLayout pageKey="nav.contact">

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">{t('form.name')}</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email">{t('form.email')}</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="message">{t('form.message')}</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? t('form.sending') : t('form.send')}
        </button>

        {status === 'success' && <p className="status-success">{t('form.success')}</p>}
        {status === 'error' && <p className="status-error">{t('form.error')}</p>}
      </form>
    </MainLayout>
  )
}

export default Contact