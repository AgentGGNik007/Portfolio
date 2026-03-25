import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/projects', () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'QR-Webapp',
        description: 'Web-App zur Verwaltung und Generierung von QR-Codes mit Scan-Statistiken, Discord-Integration und Zero-Trust Bereich.',
        tech: ['PHP', 'CSS', 'JavaScript'],
        github: 'https://github.com/AgentGGNik007',
      },
      {
        id: 2,
        title: 'Portfolio',
        description: 'Dieses Portfolio — gebaut mit React, Vite und TypeScript.',
        tech: ['React', 'TypeScript', 'Vite', 'Python'],
        github: 'https://github.com/AgentGGNik007/Portfolio',
      },
      {
        id: 3,
        title: 'Foundry-Sessionends-Trigger',
        description: 'Ein FoundryVTT Modul das beim Sitzungsende serverseitige Webhook-Skripte auslöst.',
        tech: ['JavaScript'],
        github: 'https://github.com/AgentGGNik007/Foundry-Sessionends-Trigger',
      },
      {
        id: 4,
        title: 'email-worker-cloudflare',
        description: 'Cloudflare Worker für den E-Mail-Versand — eingesetzt in der QR-Webapp als serverless SMTP-Lösung.',
        tech: ['JavaScript', 'Cloudflare Workers'],
        github: 'https://github.com/AgentGGNik007/email-worker-cloudflare',
      },
      {
        id: 5,
        title: 'FoundryVTT Module',
        description: 'Mehrere Open-Source Module für FoundryVTT — ein browserbasiertes Virtual Tabletop System. Die Module erweitern Spielmechaniken, UI-Elemente und Datenstrukturen innerhalb des bestehenden Frameworks.',
        tech: ['JavaScript']
      },
    ])
  }),

  http.post('/api/contact', async ({ request }) => {
    const body = await request.json()
    console.log('Mock Kontaktformular:', body)
    return HttpResponse.json({ success: true, message: 'Nachricht erhalten.' })
  }),
]
