<script setup>
import { computed } from 'vue'
import { useTheme } from '../composables/useTheme'

const { theme, toggle } = useTheme()
const dark = computed(() => theme.value === 'dark')
</script>

<template>
  <button
    type="button"
    class="icon-btn theme-toggle"
    :aria-label="dark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="dark ? 'Light mode' : 'Dark mode'"
    @click="toggle"
  >
    <!-- Sun (shown in dark mode: click to go light) -->
    <svg
      v-if="dark"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
    <!-- Moon (shown in light mode: click to go dark) -->
    <svg
      v-else
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle svg {
  transition: transform 0.3s ease;
}
.theme-toggle:hover svg {
  transform: rotate(15deg);
}
</style>
