// theme-init.ts
// Wird vor React ausgeführt — setzt das Theme sofort damit kein Flackern entsteht

(() => {
  const storageKey = 'portfolio.theme';
  const themes = ['light', 'grey', 'dark', 'contrast'] as const;
  type Theme = typeof themes[number];

  function isValidTheme(value: unknown): value is Theme {
    return themes.includes(value as Theme);
  }

  function getInitialTheme(): Theme {
    try {
      const stored = localStorage.getItem(storageKey);
      if (isValidTheme(stored)) return stored;
    } catch {// intentionally empty — localStorage may be unavailable
        }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  }

  const theme = getInitialTheme();
  document.documentElement.setAttribute('data-theme', theme);
})();