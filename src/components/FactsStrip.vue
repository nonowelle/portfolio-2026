<script setup>
import { facts } from '../data/site'
</script>

<template>
  <div class="facts">
    <div class="facts__inner container mono">
      <span v-for="fact in facts" :key="fact">{{ fact }}</span>
    </div>
  </div>
</template>

<style scoped>
.facts {
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  background: var(--ground-2);
}
.facts__inner {
  padding-block: 22px;
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media (max-width: 860px) {
  .facts__inner {
    gap: 12px 32px;
    justify-content: flex-start;
  }
}
</style>
