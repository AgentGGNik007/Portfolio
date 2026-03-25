import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type ResumeEntry = {
  id: number
  year: string
  title: string
  sub: string
}

type Language = {
  id: number
  name: string
  level: string
}

type ResumeData = {
  experience: ResumeEntry[]
  education: ResumeEntry[]
  initiative: ResumeEntry[]
  languages: Language[]
}

export function useResume() {
  const { i18n } = useTranslation()
  const [resume, setResume] = useState<ResumeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    fetch(`/api/resume?lang=${i18n.language}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setResume(data)
          setLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError('error')
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [i18n.language])

  return { resume, loading, error }
}