<script setup>
import { timeline } from '../data/site'
</script>

<template>
  <section id="about" class="about">
    <div class="about__inner container grid-12">
      <div class="about__intro">
        <span class="mono about__label">About</span>
        <h2 class="about__title">
          A developer who's <span class="about__accent">good with people</span>.
        </h2>
        <p class="about__text">
          Most of my day is spent with designers, marketers and other engineers. I ask questions early, explain trade-offs without jargon, and I'm happy to be
          the person who makes the team's work easier to ship. I came to code after a few years in
          marketing, so I'm comfortable in the room where the message gets decided. I mostly work
          in Vue.js and I'm always trying new tools.
        </p>
      </div>

      <dl class="about__timeline">
        <div v-for="row in timeline" :key="row.when" class="about__row">
          <dt class="mono about__when">{{ row.when }}</dt>
          <dd class="about__role">{{ row.role }}</dd>
          <dd class="about__where">{{ row.where }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--band-bg);
  color: var(--band-fg);
}
.about__inner {
  padding-block: 112px;
}
.about__intro {
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.about__label {
  color: var(--band-label);
}
.about__title {
  font-size: clamp(40px, 4vw, 56px);
  line-height: 1.12;
}
.about__accent {
  color: var(--band-accent);
}
.about__text {
  font-size: 17px;
  line-height: 1.6;
  color: var(--band-muted);
  max-width: 480px;
}
.about__timeline {
  grid-column: 7 / span 6;
  align-self: end;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.about__row {
  display: grid;
  grid-template-columns: 140px 1fr 1fr;
  gap: 24px;
  padding-block: 22px;
  border-top: 1px solid var(--band-rule);
}
.about__row:last-child {
  border-bottom: 1px solid var(--band-rule);
}
.about__when {
  color: var(--band-label);
}
dd {
  margin: 0;
}
.about__role {
  font-weight: 500;
}
.about__where {
  color: var(--band-muted);
}
@media (max-width: 860px) {
  .about__inner {
    padding-block: 72px;
  }
  .about__timeline {
    grid-column: auto;
  }
  .about__row {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>
