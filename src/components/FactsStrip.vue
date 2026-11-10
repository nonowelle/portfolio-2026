<script setup>
import { stack } from '../data/site'

// The track is rendered twice so the loop is seamless: when the first copy has
// scrolled fully out, the animation resets and the second copy is in its place.
const copies = [0, 1]
</script>

<template>
  <div class="stack" aria-label="Technologies">
    <div class="stack__track">
      <ul
        v-for="copy in copies"
        :key="copy"
        class="stack__list"
        :aria-hidden="copy === 1 ? 'true' : undefined"
      >
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
  </div>
</template>

<style scoped>
.stack {
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  background: var(--ground-2);
  overflow: hidden;
  /* fade the edges so logos appear to slide in and out */
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}
.stack__track {
  display: flex;
  width: max-content;
  animation: slide 45s linear infinite;
}
.stack:hover .stack__track {
  animation-play-state: paused;
}
.stack__list {
  list-style: none;
  margin: 0;
  padding: 26px 0;
  display: flex;
  align-items: center;
}
.stack__item {
  display: flex;
  align-items: center;
  padding-inline: 48px;
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

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 860px) {
  .stack__item {
    padding-inline: 28px;
  }
  .stack__logo {
    width: 28px;
    height: 28px;
  }
  .stack__track {
    animation-duration: 32s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .stack__track {
    animation: none;
    width: 100%;
    justify-content: center;
  }
  .stack__list[aria-hidden='true'] {
    display: none;
  }
}
</style>
