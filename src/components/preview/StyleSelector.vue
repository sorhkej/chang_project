<template>
  <div class="style-selector" :class="`selector-${type}`" ref="selectorRef">
    <!-- Compact Trigger Button -->
    <div class="selector-trigger" @click="toggleDropdown">
      <span class="selector-label">{{ label }}:</span>
      <div class="selector-value">
        <span v-if="type === 'color'" class="color-dot" :style="{ backgroundColor: selectedOption?.previewColor }"></span>
        <span v-if="selectedOption?.icon" class="option-icon">{{ selectedOption?.icon }}</span>
        <span class="selected-name">{{ selectedOption?.name || modelValue }}</span>
      </div>
      <span class="dropdown-icon">{{ isExpanded ? '▴' : '▾' }}</span>
    </div>

    <!-- Dropdown Overlay -->
    <teleport to="body">
      <div v-if="isExpanded" class="dropdown-overlay" @click="closeDropdown">
        <div class="dropdown-menu" :style="dropdownStyle" @click.stop>
          <div class="dropdown-header">
            <span class="dropdown-title">Select {{ label }}</span>
          </div>
          <div class="selector-options" :class="`selector-${type}`">
            <div
              v-for="option in options"
              :key="option.id"
              class="selector-option"
              :class="{ 'selected': modelValue === option.id }"
              @click="selectOption(option.id)"
            >
              <div v-if="type === 'color'" class="color-preview" :style="{ backgroundColor: option.previewColor }"></div>
              <span v-if="option.icon" class="option-icon">{{ option.icon }}</span>
              <div class="option-content">
                <span class="option-name">{{ option.name }}</span>
                <span class="option-description">{{ option.description }}</span>
              </div>
              <div v-if="modelValue === option.id" class="selected-indicator">✓</div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
/**
 * StyleSelector Component
 *
 * Hybrid selector with compact dropdown trigger and expandable options.
 * Supports different display modes for layouts, colors, and fonts.
 */

import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import type { SelectorOption } from '../../types/preview';

interface Props {
  /** Current selected value */
  modelValue: string;
  /** Selector label */
  label: string;
  /** Available options */
  options: SelectorOption[];
  /** Selector type (affects display) */
  type?: 'default' | 'color' | 'layout' | 'font' | 'scenario';
  /** Display mode */
  mode?: 'grid' | 'list' | 'dropdown';
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  mode: 'grid',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

// State
const isExpanded = ref(false);
const selectorRef = ref<HTMLElement>();
const dropdownStyle = ref<Record<string, string>>({});

// Get the currently selected option
const selectedOption = computed(() => {
  return props.options.find(o => o.id === props.modelValue);
});

// Toggle dropdown
function toggleDropdown() {
  if (isExpanded.value) {
    closeDropdown();
  } else {
    openDropdown();
  }
}

// Open dropdown and calculate position
async function openDropdown() {
  isExpanded.value = true;
  await nextTick();

  if (selectorRef.value) {
    const rect = selectorRef.value.getBoundingClientRect();
    dropdownStyle.value = {
      top: `${rect.bottom + 4}px`,
      left: `${rect.left}px`,
      minWidth: `${rect.width}px`,
      maxWidth: `${Math.min(rect.width + 200, 400)}px`,
    };
  }
}

// Close dropdown
function closeDropdown() {
  isExpanded.value = false;
}

// Select an option
function selectOption(value: string) {
  emit('update:modelValue', value);
  closeDropdown();
}

// Handle click outside
function handleClickOutside(event: MouseEvent) {
  if (isExpanded.value && selectorRef.value) {
    const target = event.target as Node;
    if (!selectorRef.value.contains(target)) {
      closeDropdown();
    }
  }
}

// Handle escape key
function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && isExpanded.value) {
    closeDropdown();
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
/* Container */
.style-selector {
  position: relative;
}

/* Compact Trigger Button */
.selector-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 0.875rem;
  background-color: var(--color-background-primary, #ffffff);
  border: 1px solid var(--color-border-default, #e5e7eb);
  border-radius: var(--border-radius-md, 0.5rem);
  cursor: pointer;
  transition: all var(--transition-fast, 150ms ease);
}

.selector-trigger:hover {
  border-color: var(--color-primary, #3b82f6);
  background-color: var(--color-background-secondary, #f3f4f6);
}

.selector-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-secondary, #6b7280);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.selector-value {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
}

.color-dot {
  width: 16px;
  height: 16px;
  border-radius: var(--border-radius-sm, 0.25rem);
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.option-icon {
  font-size: 1rem;
  flex-shrink: 0;
}

.selected-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary, #1f2937);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown-icon {
  font-size: 0.625rem;
  color: var(--color-text-secondary, #6b7280);
  flex-shrink: 0;
}

/* Dropdown Overlay */
.dropdown-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  pointer-events: auto;
}

.dropdown-menu {
  position: fixed;
  background-color: var(--color-background-elevated, #ffffff);
  border: 1px solid var(--color-border-default, #e5e7eb);
  border-radius: var(--border-radius-lg, 0.75rem);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  animation: dropdownFadeIn 0.15s ease;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-header {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--color-border-default, #e5e7eb);
  background-color: var(--color-background-secondary, #f3f4f6);
}

.dropdown-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-secondary, #6b7280);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

/* Options Grid - Single Column */
.selector-options {
  padding: 0.75rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.selector-option {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem;
  border: 1px solid var(--color-border-default, #e5e7eb);
  border-radius: var(--border-radius-md, 0.5rem);
  cursor: pointer;
  transition: all var(--transition-fast, 150ms ease);
  background-color: var(--color-background-primary, #ffffff);
}

.selector-option:hover {
  border-color: var(--color-primary, #3b82f6);
  background-color: var(--color-background-secondary, #f3f4f6);
}

.selector-option.selected {
  border-color: var(--color-primary, #3b82f6);
  background-color: var(--color-background-secondary, #f3f4f6);
}

.color-preview {
  width: 20px;
  height: 20px;
  border-radius: var(--border-radius-sm, 0.25rem);
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.option-content {
  flex: 1;
  min-width: 0;
}

.option-name {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary, #1f2937);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.option-description {
  display: block;
  font-size: 0.75rem;
  color: var(--color-text-tertiary, #9ca3af);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.selected-indicator {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 16px;
  height: 16px;
  background-color: var(--color-primary, #3b82f6);
  color: var(--color-text-inverse, #ffffff);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  font-weight: bold;
}

/* Scrollbar styling */
.selector-options::-webkit-scrollbar {
  width: 6px;
}

.selector-options::-webkit-scrollbar-track {
  background: var(--color-background-secondary, #f3f4f6);
  border-radius: 3px;
}

.selector-options::-webkit-scrollbar-thumb {
  background: var(--color-border-default, #d1d5db);
  border-radius: 3px;
}

.selector-options::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-tertiary, #9ca3af);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .option-description {
    display: none;
  }
}
</style>
