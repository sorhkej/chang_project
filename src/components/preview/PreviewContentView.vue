<template>
  <div class="preview-content-view preview-scope" ref="previewContentRef">
    <div class="view-header">
      <h2>Preview</h2>
      <span class="view-label">Styled</span>
    </div>
    <div class="preview-content">
      <!-- Provide a nested ThemeProvider with the merged theme in scoped mode -->
      <ThemeProvider :theme="theme" :scoped="true" :scope-element="previewContentRef" scope-prefix="preview-">
        <!-- Scenario Component - With theme styling -->
        <component :is="scenarioComponent" :themed="true" :key="`${state.selectedScenario}-${theme.id}`" />
      </ThemeProvider>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * PreviewContentView Component
 *
 * Displays the styled preview using the merged theme configuration.
 * Uses scenario components with theme styling applied.
 */

import { ref, computed, watch, onMounted } from 'vue';
import type { Theme } from '../../types/theme';
import ThemeProvider from '../../providers/ThemeProvider.vue';
import { useGlobalStylePreview } from '../../composables/useStylePreview';
import { getScenarioComponent } from '../scenarios';

interface Props {
  theme: Theme;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  fullWidth: true,
});

// Ref for the preview content container (used by scoped ThemeProvider)
const previewContentRef = ref<HTMLElement | null>(null);

// Get current scenario type from preview state
const { state } = useGlobalStylePreview();

// Watch for debugging
watch(() => state.selectedScenario, (newScenario) => {
  console.log('[PreviewContentView] Scenario changed to:', newScenario);
}, { immediate: true });

watch(() => props.theme, (newTheme) => {
  console.log('[PreviewContentView] Theme changed to:', newTheme?.id);
  // Trigger component update by forcing a re-check
  if (previewContentRef.value) {
    console.log('[PreviewContentView] Checking CSS variables on previewContentRef:');
    const computedStyle = window.getComputedStyle(previewContentRef.value);
    console.log('  --preview-color-primary:', computedStyle.getPropertyValue('--preview-color-primary'));
    console.log('  --preview-color-background-primary:', computedStyle.getPropertyValue('--preview-color-background-primary'));
  }
}, { immediate: true, deep: true });

watch(previewContentRef, (newRef) => {
  console.log('[PreviewContentView] previewContentRef changed:', newRef?.tagName, newRef?.className);
}, { immediate: true });

// Get the appropriate scenario component
const scenarioComponent = computed(() => {
  console.log('[PreviewContentView] Computing scenario component for:', state.selectedScenario);
  return getScenarioComponent(state.selectedScenario);
});

onMounted(() => {
  console.log('[PreviewContentView] Mounted, ref:', previewContentRef.value?.tagName);
});
</script>

<style scoped>
.preview-content-view {
  height: 100%;
  padding: 2rem;
  overflow-y: auto;
  background-color: var(--preview-color-background-secondary, #f3f4f6);
  transition: all var(--preview-transition-normal, 250ms ease);
}

.view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--preview-color-border-default, #e5e7eb);
}

.view-header h2 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--preview-color-text-primary, #1f2937);
}

.view-label {
  padding: 0.25rem 0.75rem;
  background-color: var(--preview-color-primary, #3b82f6);
  color: var(--preview-color-text-inverse, #ffffff);
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.preview-content {
  /* The preview content uses the theme's CSS variables */
  border-radius: var(--preview-border-radius-lg, 0.75rem);
  overflow: hidden;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .preview-content-view {
    padding: 1rem;
  }

  .view-header h2 {
    font-size: 1rem;
  }

  .view-label {
    font-size: 0.75rem;
  }
}
</style>
