<script setup>
import { site } from '../data/site'
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact__inner container">
      <h2 class="contact__title">
        Working on something? <span class="contact__accent">Let's talk.</span>
      </h2>
      <a :href="`mailto:${site.email}`" class="contact__email serif">{{ site.email }}</a>
      <div class="contact__links">
        <a :href="site.linkedin" target="_blank" rel="noopener">LinkedIn ↗</a>
        <a :href="site.github" target="_blank" rel="noopener">GitHub ↗</a>
        <a :href="site.resume" target="_blank" rel="noopener">Résumé ↗</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  border-top: 1px solid var(--rule);
}
.contact__inner {
  padding-block: 112px 96px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.contact__title {
  font-size: clamp(40px, 5vw, 72px);
  line-height: 1.1;
  max-width: 900px;
}
.contact__accent {
  color: var(--accent);
}
.contact__email {
  font-size: clamp(24px, 2.5vw, 36px);
  line-height: 1.3;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  align-self: flex-start;
  word-break: break-all;
}
.contact__links {
  display: flex;
  gap: 28px;
  font-size: 15px;
  font-weight: 500;
}
.contact__links a {
  text-decoration: none;
}
.contact__links a:hover {
  text-decoration: underline;
}
@media (max-width: 860px) {
  .contact__inner {
    padding-block: 72px 64px;
  }
}
</style>
