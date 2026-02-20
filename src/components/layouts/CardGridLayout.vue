<template>
  <div class="card-grid-layout" :class="customClasses?.container">
    <slot />
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
.card-grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

@media (max-width: 768px) {
  .card-grid-layout {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
