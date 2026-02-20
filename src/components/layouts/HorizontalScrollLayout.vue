<template>
  <div class="horizontal-scroll-layout" :class="customClasses?.container">
    <div class="scroll-container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ThemeLayoutConfig } from '../../types/theme';

interface Props {
  layoutConfig?: ThemeLayoutConfig;
  customClasses?: ThemeLayoutConfig['customClasses'];
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.horizontal-scroll-layout {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}

.scroll-container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 1rem 0;
  width: max-content;
  min-width: 100%;
}

.scroll-container :deep(> *) {
  flex: 0 0 auto;
  width: 300px;
  max-width: 80vw;
}

/* Custom scrollbar styling */
.horizontal-scroll-layout::-webkit-scrollbar {
  height: 8px;
}

.horizontal-scroll-layout::-webkit-scrollbar-track {
  background: var(--color-background-secondary);
  border-radius: var(--border-radius-full);
}

.horizontal-scroll-layout::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: var(--border-radius-full);
}

.horizontal-scroll-layout::-webkit-scrollbar-thumb:hover {
  background: var(--color-secondary);
}

@media (max-width: 768px) {
  .scroll-container {
    gap: 1rem;
  }

  .scroll-container :deep(> *) {
    width: 250px;
  }
}
</style>
