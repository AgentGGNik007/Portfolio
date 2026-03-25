import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

function getGitDate(): string {
  try {
    return execSync('git log -1 --format=%cd --date=format:"%d.%m.%Y"')
      .toString()
      .trim()
  } catch {
    return '–'
  }
}

export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_DATE__: JSON.stringify(getGitDate()),
  },
})
