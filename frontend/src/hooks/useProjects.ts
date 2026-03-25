import { useState, useEffect } from 'react'

type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  github: string | null
  live: string | null
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Projekte konnten nicht geladen werden.')
        setLoading(false)
      })
  }, [])

  return { projects, loading, error }
}