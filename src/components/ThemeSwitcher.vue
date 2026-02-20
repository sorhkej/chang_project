<template>
  <div class="theme-switcher">
    <label for="theme-select" class="theme-switcher__label">Theme:</label>
    <select
      id="theme-select"
      :value="currentThemeId"
      @change="handleThemeChange"
      class="theme-switcher__select"
    >
      <option
        v-for="theme in availableThemes"
        :key="theme.id"
        :value="theme.id"
      >
        {{ theme.name }} - {{ theme.description }}
      </option>
    </select>

    <!-- Theme Preview Cards -->
    <div class="theme-switcher__preview">
      <div
        v-for="theme in availableThemes"
        :key="theme.id"
        :class="[
          'theme-switcher__preview-card',
          { 'theme-switcher__preview-card--active': theme.id === currentThemeId }
        ]"
        :style="{
          '--preview-primary': theme.colors.primary,
          '--preview-background': theme.colors.background.primary
        }"
        @click="setTheme(theme.id)"
        :title="theme.name"
      >
        <div class="theme-switcher__preview-header" :style="{ backgroundColor: theme.colors.primary }">
          <span class="theme-switcher__preview-name">{{ theme.name }}</span>
        </div>
        <div class="theme-switcher__preview-body" :style="{ backgroundColor: theme.colors.background.primary }">
          <div class="theme-switcher__preview-colors">
            <div
              class="theme-switcher__preview-color-swatch"
              :style="{ backgroundColor: theme.colors.primary }"
              :title="'Primary'"
            />
            <div
              class="theme-switcher__preview-color-swatch"
              :style="{ backgroundColor: theme.colors.secondary }"
              :title="'Secondary'"
            />
            <div
              class="theme-switcher__preview-color-swatch"
              :style="{ backgroundColor: theme.colors.accent }"
              :title="'Accent'"
            />
            <div
              class="theme-switcher__preview-color-swatch"
              :style="{ backgroundColor: theme.colors.success }"
              :title="'Success'"
            />
            <div
              class="theme-switcher__preview-color-swatch"
              :style="{ backgroundColor: theme.colors.error }"
              :title="'Error'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ThemeSwitcher Component
 *
 * UI component for theme selection with preview cards.
 * Displays all available themes as clickable preview cards.
 */

import { inject } from 'vue';
import type { Ref } from 'vue';
import type { Theme } from '../types/theme';

// Inject theme context from ThemeProvider
const currentTheme = inject<Ref<Theme>>('theme');
const currentThemeId = inject<Ref<string>>('themeId');
const availableThemes = inject<Ref<readonly Theme[]>>('themes');
const setTheme = inject<(themeId: string) => void>('setTheme');

if (!currentTheme || !currentThemeId || !availableThemes || !setTheme) {
  throw new Error('ThemeSwitcher must be used within a ThemeProvider');
}

/**
 * Handle theme selection change from dropdown
 */
function handleThemeChange(event: Event): void {
  const target = event.target as HTMLSelectElement;
  setTheme?.(target.value);
}
</script>

<style scoped>
.theme-switcher {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  padding: var(--spacing-6);
  background-color: var(--color-background-secondary);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-border-default);
}

.theme-switcher__label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

.theme-switcher__select {
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-base);
  font-family: var(--font-family-body);
  color: var(--color-text-primary);
  background-color: var(--color-background-primary);
  border: 1px solid var(--color-border-default);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.theme-switcher__select:hover {
  border-color: var(--color-border-strong);
}

.theme-switcher__select:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.theme-switcher__preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--spacing-4);
  margin-top: var(--spacing-4);
}

.theme-switcher__preview-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
}

.theme-switcher__preview-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.theme-switcher__preview-card--active {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary), var(--shadow-lg);
}

.theme-switcher__preview-header {
  padding: var(--spacing-3);
  text-align: center;
}

.theme-switcher__preview-name {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-inverse);
}

.theme-switcher__preview-body {
  flex: 1;
  padding: var(--spacing-4);
}

.theme-switcher__preview-colors {
  display: flex;
  gap: var(--spacing-2);
}

.theme-switcher__preview-color-swatch {
  flex: 1;
  aspect-ratio: 1;
  border-radius: var(--border-radius-sm);
}

@media (max-width: 640px) {
  .theme-switcher__preview {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
