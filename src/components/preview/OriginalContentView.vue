<template>
  <div class="original-content-view">
    <div class="view-header">
      <h2>Original Content</h2>
      <span class="view-label">No Styles</span>
    </div>
    <div class="original-content">
      <!-- Scenario Component - Raw HTML without theme styling -->
      <component :is="scenarioComponent" :themed="false" :key="state.selectedScenario" />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * OriginalContentView Component
 *
 * Displays the raw HTML content without any custom styling.
 * This serves as a baseline to compare against the styled preview.
 */

import { computed } from 'vue';
import { useGlobalStylePreview } from '../../composables/useStylePreview';
import { getScenarioComponent } from '../scenarios';

// Get current scenario type from preview state
const { state } = useGlobalStylePreview();

// Get the appropriate scenario component
const scenarioComponent = computed(() => {
  return getScenarioComponent(state.selectedScenario);
});
</script>

<style scoped>
/* Minimal scoped styles for the view container only */
.original-content-view {
  height: 100%;
  padding: 2rem;
  overflow-y: auto;
  background-color: var(--app-color-background-primary, #ffffff);
}

.view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--app-color-border-default, #e5e7eb);
}

.view-header h2 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--app-color-text-primary, #1f2937);
}

.view-label {
  padding: 0.25rem 0.75rem;
  background-color: var(--app-color-background-secondary, #f3f4f6);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: var(--app-color-text-secondary, #6b7280);
}

/* The original-content uses application theme variables (app- prefix) */
.original-content {
  width: 100%;
  color: var(--app-color-text-primary, #1a1a1a);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .original-content-view {
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
