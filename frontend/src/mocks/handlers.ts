import { http, HttpResponse } from 'msw'

const projects = {
  de: [
    {
      id: 1,
      title: 'QR-Webapp', status: 'done',
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
      title: 'QR-Webapp', status: 'done',
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

  http.get('/api/resume', ({ request }) => {
    const url = new URL(request.url)
    const lang = url.searchParams.get('lang') === 'en' ? 'en' : 'de'

    const data = {
      de: {
        experience: [
          { id: 1, year: '2024 – 2025', title: 'Industriemechaniker', sub: 'Schwerpunkt Instandhaltung · IHK-anerkannt' },
        ],
        education: [
          { id: 1, year: 'ab 2026', title: 'Umschulung – Fachinformatiker', sub: 'Systemintegration & Administration' },
          { id: 2, year: '2023', title: 'Berufsschulabschluss', sub: 'Industriemechaniker' },
          { id: 3, year: '2020', title: 'Erweiterter Realschulabschluss', sub: '' },
        ],
        initiative: [
          { id: 1, year: '2024 – heute', title: 'Selbststudium & private Projekte', sub: 'Linux-Systeme, Webentwicklung, Cybersecurity (Grundlagen)' },
        ],
        languages: [
          { id: 1, name: 'Deutsch', level: 'Muttersprache' },
          { id: 2, name: 'Englisch', level: 'Grundkenntnisse' },
        ],
      },
      en: {
        experience: [
          { id: 1, year: '2024 – 2025', title: 'Industrial Mechanic', sub: 'Focus: Maintenance · IHK-certified' },
        ],
        education: [
          { id: 1, year: 'from 2026', title: 'Retraining – IT Specialist', sub: 'System Integration & Administration' },
          { id: 2, year: '2023', title: 'Vocational School Diploma', sub: 'Industrial Mechanic' },
          { id: 3, year: '2020', title: 'Secondary School Certificate', sub: '' },
        ],
        initiative: [
          { id: 1, year: '2024 – present', title: 'Self-study & personal projects', sub: 'Linux systems, web development, cybersecurity (basics)' },
        ],
        languages: [
          { id: 1, name: 'German', level: 'Native' },
          { id: 2, name: 'English', level: 'Basic knowledge' },
        ],
      },
    }
    return HttpResponse.json(data[lang])
  }),

  http.post('/api/contact', async ({ request }) => {
    const body = await request.json()
    console.log('Mock Kontaktformular:', body)
    return HttpResponse.json({ success: true, message: 'Nachricht erhalten.' })
  }),
]
