<script setup>
import { site } from '../data/site'
</script>

<template>
  <header id="top" class="hero container">
    <p class="mono">Front-end developer · {{ site.location }}</p>

    <h1 class="hero__title">
      I build the websites <span class="hero__accent">AI companies</span> show the world.
    </h1>

    <div class="grid-12 hero__row">
      <p class="hero__lede">
        I'm Marie-Ève, a French-Canadian front-end developer. For the past five years I've
        worked on the front end of <a href="https://www.coveo.com">coveo.com</a> — landing
        pages, a design system, and a CMS that lets marketers ship without waiting on
        engineering.
      </p>
      <div class="hero__actions">
        <a href="#work" class="btn btn--primary">
          See selected work
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a :href="site.github" class="btn" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  padding-block: 120px 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.hero__title {
  font-size: clamp(44px, 6.4vw, 92px);
  line-height: 1.06;
  max-width: 1100px;
}
.hero__accent {
  color: var(--accent);
}
.hero__row {
  align-items: end;
}
.hero__lede {
  grid-column: span 7;
  font-size: 20px;
  line-height: 1.5;
  color: var(--ink-2);
  max-width: 620px;
}
.hero__actions {
  grid-column: span 5;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  flex-wrap: wrap;
}
@media (max-width: 860px) {
  .hero {
    padding-block: 72px 64px;
  }
  .hero__lede {
    font-size: 18px;
  }
  .hero__actions {
    justify-content: flex-start;
  }
}
</style>
