<script setup>
import { projects } from '../data/site'
import ProjectCase from './ProjectCase.vue'
</script>

<template>
  <section id="work" class="work container">
    <div class="work__head">
      <h2 class="work__title">Selected work</h2>
    </div>

    <div class="work__list">
      <ProjectCase
        v-for="(project, i) in projects"
        :key="project.id"
        :project="project"
        :last="i === projects.length - 1"
      />
    </div>
  </section>
</template>

<style scoped>
.work {
  padding-block: 112px 64px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.work__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.work__title {
  font-size: clamp(40px, 4vw, 56px);
  line-height: 1.1;
}
.work__list {
  display: flex;
  flex-direction: column;
}
@media (max-width: 860px) {
  .work {
    padding-block: 72px 40px;
  }
}
</style>
