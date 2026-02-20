/**
 * System theme detection composable
 */

import { ref, onMounted, onUnmounted } from 'vue';

/**
 * Detect system color scheme preference
 */
export function useSystemTheme() {
  /** Whether system prefers dark mode */
  const prefersDark = ref(false);
  /** Whether system prefers light mode */
  const prefersLight = ref(false);

  let mediaQuery: MediaQueryList | null = null;

  /**
   * Update system theme preference from media query
   */
  const updateSystemTheme = (e: MediaQueryListEvent | MediaQueryList) => {
    prefersDark.value = e.matches;
    prefersLight.value = !e.matches;
  };

  onMounted(() => {
    // Check initial system preference
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    updateSystemTheme(mediaQuery);

    // Listen for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateSystemTheme);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(updateSystemTheme);
    }
  });

  onUnmounted(() => {
    if (mediaQuery) {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateSystemTheme);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(updateSystemTheme);
      }
    }
  });

  return {
    prefersDark,
    prefersLight,
  };
}
