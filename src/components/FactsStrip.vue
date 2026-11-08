<script setup>
import { stack } from '../data/site'
</script>

<template>
  <div class="stack">
    <ul class="stack__inner container" aria-label="Technologies">
      <li v-for="tech in stack" :key="tech.name" class="stack__item" :title="tech.name">
        <span
          class="stack__logo"
          :style="{ '--icon': `url(${tech.icon})` }"
          role="img"
          :aria-label="tech.name"
        ></span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.stack {
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  background: var(--ground-2);
}
.stack__inner {
  list-style: none;
  margin: 0 auto;
  padding-block: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px 48px;
  flex-wrap: wrap;
}
.stack__item {
  display: flex;
  align-items: center;
}
/* Monochrome logo: the SVG is used as a mask, so the colour is ours (grey, theme-aware) */
.stack__logo {
  display: block;
  width: 32px;
  height: 32px;
  background-color: var(--ink-3);
  opacity: 0.75;
  -webkit-mask: var(--icon) no-repeat center / contain;
  mask: var(--icon) no-repeat center / contain;
  transition: opacity 0.2s ease, background-color 0.2s ease;
}
.stack__item:hover .stack__logo {
  opacity: 1;
  background-color: var(--ink);
}
@media (max-width: 860px) {
  .stack__inner {
    justify-content: center;
    gap: 24px 36px;
  }
  .stack__logo {
    width: 28px;
    height: 28px;
  }
}
</style>
