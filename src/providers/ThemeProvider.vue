<template>
  <slot />
</template>

<script setup lang="ts">
/**
 * ThemeProvider Component
 *
 * Provides theme context to all child components.
 * Can optionally accept a custom theme object to override the default theme.
 */

import { provide, onMounted, computed, watch, nextTick, type Ref, type PropType } from 'vue';
import { useTheme } from '../composables/useTheme';
import type { Theme } from '../types/theme';

const props = defineProps({
  /** Optional custom theme to use instead of the global theme */
  theme: {
    type: Object as PropType<Theme>,
    default: null,
  },
  /** Whether to apply theme to a scoped container instead of global :root */
  scoped: {
    type: Boolean,
    default: false,
  },
  /** CSS variable prefix for scoped themes (e.g., 'preview-' or 'app-') */
  scopePrefix: {
    type: String,
    default: 'preview-',
  },
  /** Optional ref to the scope container element */
  scopeElement: {
    type: Object as PropType<HTMLElement | null>,
    default: null,
  },
  /** Whether this is the root ThemeProvider (managed by useAppTheme, not useTheme) */
  isRoot: {
    type: Boolean,
    default: false,
  },
});

const { currentTheme, availableThemes, setTheme, initializeTheme, applyTheme, applyThemeToContainer, loadThemeFonts } = useTheme();

// Use custom theme if provided, otherwise use global theme
const effectiveTheme = computed(() => {
  return props.theme || currentTheme.value;
});

/**
 * Apply theme to the appropriate element
 */
async function applyThemeIfNeeded(): Promise<void> {
  const theme = props.theme;
  if (!theme) {
    console.log('[ThemeProvider] No theme provided');
    return;
  }

  // In scoped mode, wait for scopeElement to be available
  if (props.scoped && !props.scopeElement) {
    console.log('[ThemeProvider] Scoped mode but no element');
    return;
  }

  console.log('[ThemeProvider] Applying theme:', theme.id, 'scoped:', props.scoped, 'prefix:', props.scopePrefix);

  // Apply CSS variables FIRST (immediate visual feedback)
  if (props.scoped && props.scopeElement) {
    applyThemeToContainer(props.scopeElement, theme, props.scopePrefix);

    // Log all important CSS variables that were set
    console.log('[ThemeProvider] Applied scoped theme with prefix:', props.scopePrefix);
    console.log('[ThemeProvider] Brand colors:');
    console.log('  --' + props.scopePrefix + 'color-primary:', props.scopeElement.style.getPropertyValue(`--${props.scopePrefix}color-primary`));
    console.log('  --' + props.scopePrefix + 'color-secondary:', props.scopeElement.style.getPropertyValue(`--${props.scopePrefix}color-secondary`));
    console.log('  --' + props.scopePrefix + 'color-accent:', props.scopeElement.style.getPropertyValue(`--${props.scopePrefix}color-accent`));
    console.log('  --' + props.scopePrefix + 'color-success:', props.scopeElement.style.getPropertyValue(`--${props.scopePrefix}color-success`));
    console.log('  --' + props.scopePrefix + 'color-warning:', props.scopeElement.style.getPropertyValue(`--${props.scopePrefix}color-warning`));
    console.log('[ThemeProvider] Background colors:');
    console.log('  --' + props.scopePrefix + 'color-background-primary:', props.scopeElement.style.getPropertyValue(`--${props.scopePrefix}color-background-primary`));
    console.log('  --' + props.scopePrefix + 'color-background-secondary:', props.scopeElement.style.getPropertyValue(`--${props.scopePrefix}color-background-secondary`));
    console.log('[ThemeProvider] Text colors:');
    console.log('  --' + props.scopePrefix + 'color-text-primary:', props.scopeElement.style.getPropertyValue(`--${props.scopePrefix}color-text-primary`));
    console.log('  --' + props.scopePrefix + 'color-text-secondary:', props.scopeElement.style.getPropertyValue(`--${props.scopePrefix}color-text-secondary`));
    console.log('[ThemeProvider] Border colors:');
    console.log('  --' + props.scopePrefix + 'color-border-default:', props.scopeElement.style.getPropertyValue(`--${props.scopePrefix}color-border-default`));
  } else if (!props.scoped) {
    // Global mode: apply to document.documentElement
    applyTheme(theme);
    console.log('[ThemeProvider] Applied global theme');
  }

  // Force a re-render by waiting for next tick
  await nextTick();

  // Load fonts AFTER applying CSS variables (fonts load asynchronously)
  console.log('[ThemeProvider] Loading fonts...');
  await loadThemeFonts(theme);
  console.log('[ThemeProvider] Fonts loaded');
}

// Apply custom theme to DOM when it changes (NOT immediate - wait for mount)
watch(() => props.theme, (newTheme) => {
  console.log('[ThemeProvider] Watch triggered for theme:', newTheme?.id);
  applyThemeIfNeeded();
});

// Watch for scopeElement to become available in scoped mode (immediate to catch initial value)
watch(() => props.scopeElement, (newElement) => {
  console.log('[ThemeProvider] Watch triggered for scopeElement:', newElement?.tagName);
  applyThemeIfNeeded();
}, { immediate: true });

// Apply theme on mount to ensure it's applied after DOM is ready
onMounted(async () => {
  console.log('[ThemeProvider] onMounted, applying theme...');
  await applyThemeIfNeeded();
});

// Initialize theme on mount (only if no custom theme is provided and not root provider)
// Root provider is managed by useAppTheme system, not useTheme system
onMounted(async () => {
  // Skip initialization for root provider (managed by useAppTheme)
  if (props.isRoot) {
    console.log('[ThemeProvider] Root provider detected, skipping useTheme initialization (managed by useAppTheme)');
    return;
  }

  if (!props.theme) {
    console.log('[ThemeProvider] No custom theme provided, initializing global theme');
    await initializeTheme();
  } else {
    console.log('[ThemeProvider] Custom theme provided, skipping initialization');
  }
});

// Provide theme state to child components
provide<Ref<Theme>>('theme', computed(() => effectiveTheme.value));
provide<Ref<string>>('themeId', computed(() => effectiveTheme.value.id));
provide<Ref<readonly Theme[]>>('themes', availableThemes);
provide<(themeId: string) => void>('setTheme', setTheme);
</script>
