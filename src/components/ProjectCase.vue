<script setup>
defineProps({
  project: { type: Object, required: true },
  last: { type: Boolean, default: false },
})
</script>

<template>
  <article class="case grid-12" :class="{ 'case--last': last }">
    <a
      :href="project.url"
      class="case__shot"
      target="_blank"
      rel="noopener"
      :aria-label="`Open ${project.title}`"
    >
      <img :src="project.image" :alt="project.alt" loading="lazy" />
    </a>

    <div class="case__body">
      <span class="mono">{{ project.meta }}</span>
      <h3 class="case__title">{{ project.title }}</h3>
      <p class="case__desc">{{ project.description }}</p>

      <ul class="case__tags" aria-label="Technologies">
        <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>

      <div class="case__links">
        <a :href="project.url" target="_blank" rel="noopener">Live site ↗</a>
        <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener">Code ↗</a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.case {
  align-items: end;
  padding-block: 40px;
  border-top: 1px solid var(--rule);
}
.case__shot {
  grid-column: span 7;
  display: block;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--rule);
  background: var(--ground-2);
  transition: transform 0.25s ease;
}
.case__shot:hover {
  transform: translateY(-4px);
}
.case__shot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}
.case__body {
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-bottom: 8px;
}
.case__title {
  font-size: 40px;
  line-height: 1.15;
}
.case__desc {
  font-size: 16px;
  line-height: 1.55;
  color: var(--ink-2);
}
.case__tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.tag {
  padding: 6px 12px;
  border: 1px solid var(--tag-border);
  border-radius: var(--radius);
  font-size: 12px;
  color: var(--ink-2);
}
.case__links {
  display: flex;
  gap: 20px;
  font-size: 14px;
  font-weight: 500;
}
.case__links a {
  text-decoration: none;
}
.case__links a:hover {
  text-decoration: underline;
}
@media (max-width: 860px) {
  .case__title {
    font-size: 32px;
  }
}
</style>
