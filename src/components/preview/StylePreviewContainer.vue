<template>
  <div class="preview-container">
    <!-- Control Panel -->
    <StylePreviewPanel
      v-model:selected-layout="state.selectedLayout"
      v-model:selected-color="state.selectedColor"
      v-model:selected-font="state.selectedFont"
      v-model:selected-scenario="state.selectedScenario"
      :is-preview-generated="state.isPreviewGenerated"
      :history="state.history"
      :is-generating="isGenerating"
      @generate="handleGenerate"
      @restore-from-history="restoreFromHistory"
      @clear-history="clearHistory"
      @download-css="handleDownloadCSS"
    />

    <!-- Split View -->
    <div class="split-view">
      <!-- Left: Original Content (No Styles) -->
      <OriginalContentView />

      <!-- Right: Preview Content or Placeholder -->
      <div class="preview-area">
        <transition name="fade-slide">
          <PreviewContentView
            v-if="state.isPreviewGenerated"
            :theme="mergedTheme"
          />
        </transition>

        <!-- Empty state when preview not generated -->
        <div v-if="!state.isPreviewGenerated" class="preview-placeholder">
          <div class="placeholder-content">
            <span class="placeholder-icon">👈</span>
            <h3>Preview Panel</h3>
            <p>Select a layout, color, and font, then click "Generate Preview" to see the styled version.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * StylePreviewContainer Component
 *
 * Main container for the style preview tool.
 * Manages the split view layout and coordinates all preview components.
 */

import { ref } from 'vue';
import StylePreviewPanel from './StylePreviewPanel.vue';
import OriginalContentView from './OriginalContentView.vue';
import PreviewContentView from './PreviewContentView.vue';
import { useGlobalStylePreview } from '../../composables/useStylePreview';
import { useCSSExport } from '../../composables/useCSSExport';

// Use the GLOBAL style preview state management (singleton)
const {
  state,
  mergedTheme,
  generatePreview,
  restoreFromHistory,
  clearHistory,
} = useGlobalStylePreview();

// Use CSS export functionality
const { downloadCSS } = useCSSExport(() => mergedTheme.value);

// Generating state for button feedback
const isGenerating = ref(false);

// Handle generate preview
async function handleGenerate() {
  isGenerating.value = true;

  // Simulate a small delay for better UX
  await new Promise(resolve => setTimeout(resolve, 300));

  generatePreview();
  isGenerating.value = false;
}

// Handle download CSS
function handleDownloadCSS() {
  downloadCSS(true);
}
</script>

<style scoped>
.preview-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-tertiary, #e5e7eb);
}

.split-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0;
  flex: 1;
  align-items: stretch;
  transition: all var(--transition-normal, 250ms ease);
}

.split-view > * {
  height: 100%;
  min-width: 0;
  overflow: auto;
  box-sizing: border-box;
  padding: var(--spacing-4, 1rem);
  border-right: 1px solid var(--color-border-default, #e5e7eb);
}

.split-view > *:last-child {
  border-right: none;
}

.preview-area {
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Transition for preview content */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all var(--transition-normal, 250ms ease);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Preview placeholder */
.preview-placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-secondary, #f3f4f6);
}

.placeholder-content {
  text-align: center;
  color: var(--color-text-tertiary, #9ca3af);
  max-width: 400px;
  padding: var(--spacing-8, 2rem);
}

.placeholder-icon {
  display: block;
  font-size: 4rem;
  margin-bottom: var(--spacing-4, 1rem);
}

.placeholder-content h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-3, 0.75rem);
  color: var(--color-text-secondary, #6b7280);
}

.placeholder-content p {
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .split-view {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding-top: var(--spacing-32, 8rem);
  }
}

@media (max-width: 768px) {
  .split-view {
    padding: var(--spacing-28, 7rem) var(--spacing-3, 0.75rem) var(--spacing-3, 0.75rem);
    gap: var(--spacing-3, 0.75rem);
  }
}

/* Scrollbar styling for the container */
.preview-container ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.preview-container ::-webkit-scrollbar-track {
  background: var(--color-background-secondary, #f3f4f6);
}

.preview-container ::-webkit-scrollbar-thumb {
  background: var(--color-border-default, #d1d5db);
  border-radius: 4px;
}

.preview-container ::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-tertiary, #9ca3af);
}
</style>
