import { ref, watch } from 'vue'

const STORAGE_KEY = 'theme'
const root = document.documentElement

function systemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Initial value: saved choice, else the system preference
const theme = ref(root.dataset.theme || localStorage.getItem(STORAGE_KEY) || systemTheme())

watch(
  theme,
  (value) => {
    root.dataset.theme = value
    localStorage.setItem(STORAGE_KEY, value)
  },
  { immediate: true },
)

// Follow the OS if the user never made an explicit choice
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem(STORAGE_KEY)) theme.value = e.matches ? 'dark' : 'light'
})

export function useTheme() {
  const isDark = () => theme.value === 'dark'
  const toggle = () => {
    theme.value = isDark() ? 'light' : 'dark'
  }
  return { theme, isDark, toggle }
}
