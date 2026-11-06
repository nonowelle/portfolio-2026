<script setup>
import { site } from '../data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer container mono">
    <span>© {{ site.name }} {{ year }}</span>
    <span>{{ site.location }} · Built with Vue.js</span>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 24px 40px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
</style>
