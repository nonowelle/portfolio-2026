<script setup>
import { toolkit } from '../data/site'
</script>

<template>
  <section class="toolkit container grid-12">
    <div class="toolkit__intro">
      <h2 class="toolkit__title">What I reach for</h2>
    </div>

    <dl class="toolkit__grid">
      <div v-for="group in toolkit" :key="group.label" class="toolkit__group">
        <dt class="mono toolkit__label">{{ group.label }}</dt>
        <dd class="toolkit__items">{{ group.items }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.toolkit {
  padding-block: 112px;
}
.toolkit__intro {
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.toolkit__title {
  font-size: clamp(36px, 3.5vw, 48px);
  line-height: 1.12;
}
.toolkit__grid {
  grid-column: 6 / span 7;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px 48px;
}
.toolkit__group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.toolkit__label {
  color: var(--accent);
}
.toolkit__items {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
}
@media (max-width: 860px) {
  .toolkit {
    padding-block: 72px;
  }
  .toolkit__grid {
    grid-column: auto;
    gap: 28px;
  }
}
@media (max-width: 560px) {
  .toolkit__grid {
    grid-template-columns: 1fr;
  }
}
</style>
