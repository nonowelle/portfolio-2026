import { ref, watch } from 'vue'

const STORAGE_KEY = 'theme'
const root = document.documentElement

const DEFAULT_THEME = 'dark'

// Initial value: the visitor's saved choice, else dark
const theme = ref(root.dataset.theme || localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME)

watch(
  theme,
  (value) => {
    root.dataset.theme = value
    localStorage.setItem(STORAGE_KEY, value)
  },
  { immediate: true },
)

export function useTheme() {
  const isDark = () => theme.value === 'dark'
  const toggle = () => {
    theme.value = isDark() ? 'light' : 'dark'
  }
  return { theme, isDark, toggle }
}
