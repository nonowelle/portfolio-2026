<script setup>
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import FactsStrip from './components/FactsStrip.vue'
import WorkSection from './components/WorkSection.vue'
import AboutSection from './components/AboutSection.vue'
import ToolkitSection from './components/ToolkitSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheNav />
  <main>
    <HeroSection />
    <FactsStrip />
    <WorkSection />
    <AboutSection />
    <ToolkitSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>
