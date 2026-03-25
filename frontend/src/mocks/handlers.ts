import { http, HttpResponse } from 'msw'

export const handlers = [
  // Projekte
  http.get('/api/projects', () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'QR-Webapp',
        description: 'Eine Web-App zur Verwaltung und Generierung von QR-Codes mit Statistiken.',
        tech: ['PHP', 'CSS', 'JavaScript'],
        github: 'https://github.com/AgentGGNik007',
        live: null,
      },
      {
        id: 2,
        title: 'Portfolio',
        description: 'Dieses Portfolio — gebaut mit React, Vite und TypeScript.',
        tech: ['React', 'TypeScript', 'Vite'],
        github: 'https://github.com/AgentGGNik007/Portfolio',
        live: 'https://portfolio.framenode.net',
      },
    ])
  }),

  // Kontaktformular
  http.post('/api/contact', async ({ request }) => {
    const body = await request.json()
    console.log('Mock Kontaktformular:', body)
    return HttpResponse.json({ success: true, message: 'Nachricht erhalten.' })
  }),
]