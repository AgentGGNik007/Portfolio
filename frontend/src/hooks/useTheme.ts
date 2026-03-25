import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'portfolio.theme'
const THEMES = ['light', 'grey', 'dark', 'contrast'] as const
type Theme = typeof THEMES[number]

function isValidTheme(value: unknown): value is Theme {
  return THEMES.includes(value as Theme)
}

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isValidTheme(stored)) return stored
  } catch {
    // intentionally empty — localStorage may be unavailable
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // intentionally empty — localStorage may be unavailable
    }
  }, [])

  const cycleTheme = useCallback(() => {
    const idx = THEMES.indexOf(theme)
    const next = THEMES[(idx + 1) % THEMES.length]
    setTheme(next)
  }, [theme, setTheme])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return { theme, setTheme, cycleTheme, THEMES }
}