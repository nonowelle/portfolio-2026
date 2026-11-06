<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { nav } from '../data/site'

const open = ref(false)

function toggle() {
  open.value = !open.value
}
function close() {
  open.value = false
}
function onKeydown(e) {
  if (e.key === 'Escape') close()
}

// Lock page scroll while the menu is open, and listen for Escape
watch(open, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
  if (isOpen) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <nav class="nav container" aria-label="Main">
    <a href="#top" class="nav__logo serif" @click="close">M<span>È</span>N</a>

    <!-- Desktop links -->
    <div class="nav__links">
      <a v-for="item in nav" :key="item.href" :href="item.href" class="nav__link">
        {{ item.label }}
      </a>
      <a href="#contact" class="btn btn--small">Get in touch</a>
    </div>

    <!-- Burger (mobile only) -->
    <button
      class="nav__burger"
      type="button"
      :aria-expanded="open"
      aria-controls="mobile-menu"
      :aria-label="open ? 'Close menu' : 'Open menu'"
      @click="toggle"
    >
      <span class="nav__burger-line" :class="{ 'is-open': open }"></span>
      <span class="nav__burger-line" :class="{ 'is-open': open }"></span>
      <span class="nav__burger-line" :class="{ 'is-open': open }"></span>
    </button>

    <!-- Mobile menu -->
    <Transition name="menu">
      <div v-if="open" id="mobile-menu" class="nav__mobile">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="nav__mobile-link serif"
          @click="close"
        >
          {{ item.label }}
        </a>
        <a href="#contact" class="btn btn--primary nav__mobile-cta" @click="close">Get in touch</a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.nav {
  position: relative;
  padding-block: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__logo {
  position: relative;
  z-index: 3;
  font-size: 26px;
  color: var(--ink);
  text-decoration: none;
}
.nav__logo span {
  color: var(--accent);
}

/* Desktop */
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

/* Burger */
.nav__burger {
  display: none;
  position: relative;
  z-index: 3;
  width: 44px;
  height: 44px;
  margin-right: -10px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.nav__burger-line {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--ink);
  transition: transform 0.25s ease, opacity 0.2s ease;
}
.nav__burger-line.is-open:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.nav__burger-line.is-open:nth-child(2) {
  opacity: 0;
}
.nav__burger-line.is-open:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* Mobile menu panel */
.nav__mobile {
  position: fixed;
  inset: 0;
  z-index: 2;
  background: var(--ground);
  padding: 120px var(--gutter) 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.nav__mobile-link {
  font-size: 40px;
  line-height: 1.2;
  color: var(--ink);
  text-decoration: none;
  padding-block: 10px;
  border-bottom: 1px solid var(--rule);
}
.nav__mobile-link:hover {
  color: var(--accent);
}
.nav__mobile-cta {
  align-self: flex-start;
  margin-top: 24px;
}

/* Transition */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

@media (max-width: 860px) {
  .nav__links {
    display: none;
  }
  .nav__burger {
    display: flex;
  }
}
</style>
