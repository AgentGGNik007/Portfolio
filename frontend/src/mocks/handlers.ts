import { http, HttpResponse } from 'msw'

const projects = {
  de: [
    {
      id: 1,
      title: 'QR-Webapp',
      description: 'Web-App zur Verwaltung und Generierung von QR-Codes mit Scan-Statistiken, Discord-Integration und Zero-Trust Bereich.',
      tech: ['PHP', 'CSS', 'JavaScript'],
      github: 'https://github.com/AgentGGNik007',
      live: null,
    },
    {
      id: 2,
      title: 'Portfolio',
      description: 'Dieses Portfolio — gebaut mit React, Vite und TypeScript.',
      tech: ['React', 'TypeScript', 'Vite', 'Python'],
      github: 'https://github.com/AgentGGNik007/Portfolio',
      live: 'https://portfolio.framenode.net',
    },
    {
      id: 3,
      title: 'email-worker-cloudflare',
      description: 'Cloudflare Worker für den E-Mail-Versand — eingesetzt in der QR-Webapp als serverless SMTP-Lösung.',
      tech: ['JavaScript', 'Cloudflare Workers'],
      github: 'https://github.com/AgentGGNik007/email-worker-cloudflare',
      live: null,
    },
    {
      id: 4,
      title: 'Foundry-Sessionends-Trigger',
      description: 'Ein FoundryVTT Modul das beim Sitzungsende serverseitige Webhook-Skripte auslöst.',
      tech: ['JavaScript'],
      github: 'https://github.com/AgentGGNik007/Foundry-Sessionends-Trigger',
      live: null,
    },
    {
      id: 5,
      title: 'FoundryVTT Module',
      description: 'Mehrere Open-Source Module für FoundryVTT — ein browserbasiertes Virtual Tabletop System. Die Module erweitern Spielmechaniken, UI-Elemente und Datenstrukturen innerhalb des bestehenden Frameworks.',
      tech: ['JavaScript'],
      github: 'https://github.com/AgentGGNik007',
      live: null,
    },
  ],
  en: [
    {
      id: 1,
      title: 'QR-Webapp',
      description: 'Web app for managing and generating QR codes with scan statistics, Discord integration and a zero-trust area.',
      tech: ['PHP', 'CSS', 'JavaScript'],
      github: 'https://github.com/AgentGGNik007',
      live: null,
    },
    {
      id: 2,
      title: 'Portfolio',
      description: 'This portfolio — built with React, Vite and TypeScript.',
      tech: ['React', 'TypeScript', 'Vite', 'Python'],
      github: 'https://github.com/AgentGGNik007/Portfolio',
      live: 'https://portfolio.framenode.net',
    },
    {
      id: 3,
      title: 'email-worker-cloudflare',
      description: 'Cloudflare Worker for email delivery — used in the QR-Webapp as a serverless SMTP solution.',
      tech: ['JavaScript', 'Cloudflare Workers'],
      github: 'https://github.com/AgentGGNik007/email-worker-cloudflare',
      live: null,
    },
    {
      id: 4,
      title: 'Foundry-Sessionends-Trigger',
      description: 'A FoundryVTT module that triggers server-side webhook scripts at the end of a session.',
      tech: ['JavaScript'],
      github: 'https://github.com/AgentGGNik007/Foundry-Sessionends-Trigger',
      live: null,
    },
    {
      id: 5,
      title: 'FoundryVTT Modules',
      description: 'Several open-source modules for FoundryVTT — a browser-based virtual tabletop system. The modules extend game mechanics, UI elements and data structures within the existing framework.',
      tech: ['JavaScript'],
      github: 'https://github.com/AgentGGNik007',
      live: null,
    },
  ],
}

export const handlers = [
  http.get('/api/projects', ({ request }) => {
    const url = new URL(request.url)
    const lang = url.searchParams.get('lang') === 'en' ? 'en' : 'de'
    return HttpResponse.json(projects[lang])
  }),

  http.post('/api/contact', async ({ request }) => {
    const body = await request.json()
    console.log('Mock Kontaktformular:', body)
    return HttpResponse.json({ success: true, message: 'Nachricht erhalten.' })
  }),
]
