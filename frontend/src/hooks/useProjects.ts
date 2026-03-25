import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  github: string | null
  live: string | null
}

export function useProjects() {
  const { i18n } = useTranslation()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    fetch(`/api/projects?lang=${i18n.language}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setProjects(data)
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

  return { projects, loading, error }
}