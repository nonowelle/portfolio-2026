# menoel.com — portfolio (Vue 3 + Vite)

Homepage of the redesigned portfolio

## Run it

```bash
npm install
npm run dev
```

## Structure

```
index.html                 fonts + mount point
src/main.js                createApp
src/App.vue                page composition (one component per section)
src/assets/styles.css      design tokens (CSS variables), base styles, .btn / .mono / .grid-12 utilities
src/data/site.js           ALL content: nav, facts strip, projects, timeline, toolkit, links
src/components/
  TheNav.vue
  HeroSection.vue
  FactsStrip.vue
  WorkSection.vue          loops over projects
  ProjectCase.vue          one project row (screenshot + copy + tags + links)
  AboutSection.vue         dark band + career timeline
  ToolkitSection.vue
  ContactSection.vue
  TheFooter.vue
public/images/             project screenshots
```

Edit copy and projects in `src/data/site.js`; nothing is hard-coded in the components except the hero and About paragraphs.

## To do before going live

- Add the LinkedIn handle in `src/data/site.js`
- Drop the résumé PDF in `public/` (currently linked as `/cv-marie-eve-noel.pdf`)
- Replace the Render screenshots if the apps' home pages change
- Optional: self-host the three Google Fonts (Newsreader, Inter, JetBrains Mono) for a faster LCP
