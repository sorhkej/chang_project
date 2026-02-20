<template>
  <div class="style-preview-panel-wrapper">
    <div class="style-preview-panel">
      <div class="panel-header">
        <h3 class="panel-title">Style Preview Tool</h3>
        <button
          class="toggle-history-button"
          :class="{ 'active': showHistory }"
          @click="toggleHistory"
        >
          <span class="history-icon">📋</span>
          History
          <span v-if="history.length > 0" class="history-count">{{ history.length }}</span>
        </button>
      </div>

      <!-- History Dropdown Overlay -->
      <div v-if="showHistory" class="history-dropdown-overlay" @click.self="showHistory = false">
        <div class="history-dropdown">
          <HistoryTimeline
            :history="history"
            @restore="restoreFromHistory"
            @clear="clearHistory"
          />
        </div>
      </div>

      <div class="panel-body">
        <!-- Scenario Selector -->
        <div class="scenario-selector-row">
          <StyleSelector
            :model-value="selectedScenario"
            @update:model-value="updateSelectedScenario"
            label="Website Scenario"
            :options="scenarioOptions"
            type="scenario"
            mode="dropdown"
          />
        </div>

        <!-- Selectors Row -->
        <div class="selector-row">
          <!-- Layout Selector -->
          <StyleSelector
            :model-value="selectedLayout"
            @update:model-value="updateSelectedLayout"
            label="Layout"
            :options="layoutOptions"
            type="layout"
            mode="dropdown"
          />

          <!-- Color Selector -->
          <StyleSelector
            :model-value="selectedColor"
            @update:model-value="updateSelectedColor"
            label="Color Scheme"
            :options="colorOptions"
            type="color"
            mode="dropdown"
          />

          <!-- Font Selector -->
          <StyleSelector
            :model-value="selectedFont"
            @update:model-value="updateSelectedFont"
            label="Font"
            :options="fontOptions"
            type="font"
            mode="dropdown"
          />
        </div>

        <!-- Action Buttons -->
        <div class="panel-actions">
          <button
            class="action-button primary"
            :disabled="isGenerating"
            @click="handleGenerate"
          >
            <span class="button-icon">✨</span>
            {{ isGenerating ? 'Generating...' : 'Generate Preview' }}
          </button>

          <button
            class="action-button secondary download-button"
            :disabled="!isPreviewGenerated"
            title="Download CSS"
            @click="handleDownloadCSS"
          >
            <span class="button-icon">⬇</span>
            Download CSS
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * StylePreviewPanel Component
 *
 * Floating control panel for the style preview tool.
 * Horizontal layout with dropdown selectors and flat design.
 */

import { ref, computed } from 'vue';
import StyleSelector from './StyleSelector.vue';
import HistoryTimeline from './HistoryTimeline.vue';
import type { LayoutPattern, ScenarioType } from '../../types/theme';
import type { SelectorOption } from '../../types/preview';
import type { StyleHistoryEntry } from '../../types/preview';
import { layoutConfigs } from '../../config/layouts';
import { colorSchemes } from '../../config/colors';
import { fontSchemes } from '../../config/fonts';
import { scenarios } from '../../config/scenarios';

interface Props {
  selectedLayout: LayoutPattern;
  selectedColor: string;
  selectedFont: string;
  selectedScenario: ScenarioType;
  isPreviewGenerated: boolean;
  history: StyleHistoryEntry[];
  isGenerating?: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  'update:selectedLayout': [value: LayoutPattern];
  'update:selectedColor': [value: string];
  'update:selectedFont': [value: string];
  'update:selectedScenario': [value: ScenarioType];
  'generate': [];
  'restoreFromHistory': [entry: StyleHistoryEntry];
  'clearHistory': [];
  'downloadCSS': [];
}>();

// Emit handlers for better type inference
function updateSelectedLayout(value: string) {
  console.log('[StylePreviewPanel] Layout selected:', value);
  emit('update:selectedLayout', value as LayoutPattern);
}

function updateSelectedColor(value: string) {
  console.log('[StylePreviewPanel] Color selected:', value);
  emit('update:selectedColor', value);
}

function updateSelectedFont(value: string) {
  console.log('[StylePreviewPanel] Font selected:', value);
  emit('update:selectedFont', value);
}

function updateSelectedScenario(value: string) {
  console.log('[StylePreviewPanel] Scenario selected:', value);
  emit('update:selectedScenario', value as ScenarioType);
}

// Show/hide history
const showHistory = ref(false);

// Toggle history (no auto-hide when history is open)
function toggleHistory() {
  showHistory.value = !showHistory.value;
}

// Convert layouts to selector options
const layoutOptions = computed<SelectorOption[]>(() => {
  return layoutConfigs.map(layout => ({
    id: layout.id,
    name: layout.name,
    description: layout.description,
    icon: getLayoutIcon(layout.id),
  }));
});

// Convert colors to selector options
const colorOptions = computed<SelectorOption[]>(() => {
  return colorSchemes.map(scheme => ({
    id: scheme.id,
    name: scheme.name,
    description: scheme.description,
    previewColor: scheme.preview.primary,
  }));
});

// Convert fonts to selector options
const fontOptions = computed<SelectorOption[]>(() => {
  return fontSchemes.map(scheme => ({
    id: scheme.id,
    name: scheme.name,
    description: scheme.description,
    icon: 'Aa',
  }));
});

// Convert scenarios to selector options
const scenarioOptions = computed<SelectorOption[]>(() => {
  return scenarios.map(scenario => ({
    id: scenario.id,
    name: scenario.name,
    description: scenario.description,
    icon: scenario.icon,
  }));
});

// Get icon for layout type
function getLayoutIcon(layoutId: LayoutPattern): string {
  const icons: Record<LayoutPattern, string> = {
    'card-grid': '▦',
    'masonry': '▥',
    'vertical-list': '▬',
    'horizontal-scroll': '▭',
    'bento-box': '▦',
    'compact-list': '▮',
  };
  return icons[layoutId] || '▦';
}

// Handle generate button click
function handleGenerate() {
  emit('generate');
  showHistory.value = true; // Auto-show history after generating
}

// Handle history restore
function restoreFromHistory(entry: StyleHistoryEntry) {
  emit('restoreFromHistory', entry);
  showHistory.value = false; // Close history after restore
}

// Handle clear history
function clearHistory() {
  emit('clearHistory');
  showHistory.value = false; // Close history after clear
}

// Handle CSS download
function handleDownloadCSS() {
  emit('downloadCSS');
}
</script>

<style scoped>
/* Wrapper */
.style-preview-panel-wrapper {
  width: 100%;
  margin-bottom: var(--spacing-6, 1.5rem);
  background-color: var(--color-background-tertiary, #e5e7eb);
  border-bottom: 1px solid var(--color-border-default, #e5e7eb);
}

/* Main Panel - Horizontal Layout */
.panel-toggle-button {
  position: absolute;
  top: 0;
  right: -50px;
  width: 40px;
  height: 40px;
  background-color: var(--color-primary, #3b82f6);
  color: var(--color-text-inverse, #ffffff);
  border: none;
  border-radius: var(--border-radius-full, 9999px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast, 150ms ease);
  font-size: 1.25rem;
}

.panel-toggle-button:hover {
  background-color: var(--color-secondary, #8b5cf6);
}

.toggle-icon {
  line-height: 1;
}

/* Main Panel - Horizontal Layout */
.style-preview-panel {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background-color: var(--color-background-elevated, #ffffff);
  border: none;
  border-radius: 0;
  transition: all var(--transition-normal, 250ms ease);
}

/* Header - Flat Design */
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1.25rem;
  border-bottom: 1px solid var(--color-border-default, #e5e7eb);
  background-color: var(--color-background-secondary, #f3f4f6);
}

.panel-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary, #1f2937);
}

.toggle-history-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary, #1f2937);
  background-color: var(--color-background-primary, #ffffff);
  border: 1px solid var(--color-border-default, #e5e7eb);
  border-radius: var(--border-radius-full, 9999px);
  cursor: pointer;
  transition: all var(--transition-fast, 150ms ease);
}

.toggle-history-button:hover {
  border-color: var(--color-primary, #3b82f6);
}

.toggle-history-button.active {
  background-color: var(--color-primary, #3b82f6);
  color: var(--color-text-inverse, #ffffff);
  border-color: var(--color-primary, #3b82f6);
}

.history-icon {
  font-size: 1rem;
}

.history-count {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 0.375rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.toggle-history-button.active .history-count {
  background-color: rgba(255, 255, 255, 0.2);
}

/* History Dropdown Overlay */
.history-dropdown-overlay {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding-top: 0.5rem;
  z-index: 1000;
}

.history-dropdown {
  background-color: var(--color-background-elevated, #ffffff);
  border: 1px solid var(--color-border-default, #e5e7eb);
  border-radius: var(--border-radius-lg, 0.75rem);
  padding: 1rem;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Panel Body */
.panel-body {
  padding: 1rem 1.25rem;
}

/* Scenario Selector Row */
.scenario-selector-row {
  margin-bottom: 1rem;
}

/* Selector Row - Horizontal Grid */
.selector-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

/* Action Buttons - Single Row */
.panel-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border-default, #e5e7eb);
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--color-border-default, #e5e7eb);
  border-radius: var(--border-radius-md, 0.5rem);
  cursor: pointer;
  transition: all var(--transition-fast, 150ms ease);
  flex: 0 1 auto;
}

.action-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.action-button.primary {
  background-color: var(--color-primary, #3b82f6);
  color: var(--color-text-inverse, #ffffff);
  border-color: var(--color-primary, #3b82f6);
}

.action-button.primary:hover:not(:disabled) {
  background-color: var(--color-secondary, #8b5cf6);
  border-color: var(--color-secondary, #8b5cf6);
}

.action-button.secondary {
  background-color: var(--color-background-primary, #ffffff);
  color: var(--color-text-primary, #1f2937);
}

.action-button.secondary:hover:not(:disabled) {
  background-color: var(--color-background-secondary, #f3f4f6);
  border-color: var(--color-primary, #3b82f6);
}

.button-icon {
  font-size: 1rem;
  line-height: 1;
}

/* Scrollbar styling */
.style-preview-panel::-webkit-scrollbar,
.history-dropdown::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.style-preview-panel::-webkit-scrollbar-track,
.history-dropdown::-webkit-scrollbar-track {
  background: var(--color-background-secondary, #f3f4f6);
  border-radius: 3px;
}

.style-preview-panel::-webkit-scrollbar-thumb,
.history-dropdown::-webkit-scrollbar-thumb {
  background: var(--color-border-default, #d1d5db);
  border-radius: 3px;
}

.style-preview-panel::-webkit-scrollbar-thumb:hover,
.history-dropdown::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-tertiary, #9ca3af);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .selector-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .style-preview-panel-wrapper {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
  }

  .style-preview-panel {
    width: 100%;
    max-width: none;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  .panel-header {
    border-radius: 0;
  }

  .selector-row {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .panel-actions {
    gap: 0.5rem;
  }

  .action-button {
    flex: 1 1 calc(50% - 0.25rem);
    min-width: 100px;
  }

  .download-button {
    flex: 1 1 100%;
  }
}
</style>
