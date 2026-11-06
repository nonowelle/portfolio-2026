<script setup>
import { nav } from '../data/site'
</script>

<template>
  <nav class="nav container" aria-label="Main">
    <a href="#top" class="nav__logo serif">M<span>È</span>N</a>
    <div class="nav__links">
      <a v-for="item in nav" :key="item.href" :href="item.href" class="nav__link">
        {{ item.label }}
      </a>
      <a href="#contact" class="btn btn--small">Get in touch</a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  padding-block: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__logo {
  font-size: 26px;
  color: var(--ink);
  text-decoration: none;
}
.nav__logo span {
  color: var(--accent);
}
.nav__links {
  display: flex;
  gap: 36px;
  align-items: center;
}
.nav__link {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
  text-decoration: none;
}
.nav__link:hover {
  color: var(--accent);
}
@media (max-width: 640px) {
  .nav__links {
    gap: 20px;
  }
  .nav__link {
    display: none;
  }
}
</style>
