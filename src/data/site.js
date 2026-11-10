export const site = {
  name: 'Marie-Ève Noël',
  email: 'menoel888@gmail.com',
  location: 'Montréal, QC',
  github: 'https://github.com/nonowelle',
  linkedin: 'https://www.linkedin.com/in/marie-%C3%A8ve-no%C3%ABl',
  resume: '/cv-marie-eve-noel.pdf', 
}

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

// Technology logos shown in the strip under the hero (monochrome SVGs in /public/logos)
export const stack = [
  { name: 'Vue.js', icon: '/logos/vuedotjs.svg' },
  { name: 'JavaScript', icon: '/logos/javascript.svg' },
  { name: 'Sass', icon: '/logos/sass.svg' },
  { name: 'Sitecore', icon: '/logos/sitecore.svg' },
  { name: 'Cypress', icon: '/logos/cypress.svg' },
  { name: 'Vitest', icon: '/logos/vitest.svg' },
  { name: 'Figma', icon: '/logos/figma.svg' },
  { name: 'Google Tag Manager', icon: '/logos/googletagmanager.svg' },
]

export const projects = [
  {
    id: 'coveo',
    index: '01',
    meta: '2021 → today · Coveo',
    title: 'coveo.com',
    description:
      'The corporate site of an enterprise AI search company. I work on the front end: a scalable design system, campaign landing pages, and the Sitecore editor workflows that let the marketing team publish on its own.',
    tags: ['Sitecore', 'Vue.js', 'Sass', 'Cypress', 'Figma'],
    image: '/images/coveo.jpg',
    alt: 'coveo.com homepage',
    url: 'https://www.coveo.com',
    repo: null,
  },
  {
    id: 'nido',
    index: '02',
    meta: '2025 · Homepage redesign',
    title: 'Nido',
    description:
      'A homepage redesign for Nido, a quoting platform for heat pump installers. Built in Vue 3 and Vite from reusable, responsive section components. All page copy lives in Markdown front matter, so the text can change without touching the code.',
    tags: ['Vue.js', 'Vite', 'Sass', 'Markdown'],
    image: '/images/nido.jpg',
    alt: 'Nido homepage',
    url: 'https://nido-redesign.vercel.app/',
    repo: 'https://github.com/nonowelle/nido-redesign',
  },
  {
    id: 'benoit-charlie',
    index: '03',
    meta: 'Client project',
    title: 'Benoît & Charlie',
    description:
      'A wedding invitation site with RSVP: a Vue.js front end talking to a lightweight Node and restDb back end, designed to feel like a printed invitation.',
    tags: ['Vue.js', 'Node', 'restDb', 'HTML', 'CSS'],
    image: '/images/wedding.jpg',
    alt: 'Benoît et Charlie wedding site',
    url: 'https://charlie-benoit-wedding-fe.onrender.com/',
    repo: 'https://github.com/nonowelle/charlie-benoit',
  },
  {
    id: 'planties',
    index: '04',
    meta: 'Personal project',
    title: 'Planties',
    description:
      'My first full web app: a plant-tracking tool for people who are crazy about plants. Built end to end — Express and MongoDB on the back, server-rendered EJS templates and Bootstrap on the front.',
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap'],
    image: '/images/planties.jpg',
    alt: 'Planties homepage',
    url: 'https://planties.onrender.com/',
    repo: 'https://github.com/nonowelle/planties',
  },
]

export const timeline = [
  { when: '2021 — now', role: 'Front-End Developer', where: 'Coveo · Marketing team' },
  { when: '2020', role: 'Webmaster', where: 'CRISM' },
  { when: '2019', role: 'DESS, Management', where: 'ESG UQAM' },
  { when: '2018 — 19', role: 'Marketing Agent', where: 'Druide informatique' },
]

export const toolkit = [
  { label: 'Front-end', items: 'JavaScript (ES6+), Vue.js, HTML5, CSS3 / SCSS, Bootstrap' },
  { label: 'CMS & platform', items: 'Sitecore content models and editor workflows, C#' },
  { label: 'Quality', items: 'Cypress, Vitest, Core Web Vitals, cross-browser QA' },
  { label: 'Design & tracking', items: 'Figma, design systems, Google Tag Manager, SEO' },
  { label: 'AI tooling', items: 'Kiro, Claude, GitHub Copilot' },
  { label: 'Ways of working', items: 'Agile / Scrum, Jira, Git' },
]
