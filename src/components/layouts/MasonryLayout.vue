<template>
  <div class="masonry-layout" :class="customClasses?.container">
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
.masonry-layout {
  column-count: 3;
  column-gap: 1.5rem;
  width: 100%;
}

.masonry-layout :deep(> *) {
  break-inside: avoid;
  margin-bottom: 1.5rem;
}

@media (max-width: 1024px) {
  .masonry-layout {
    column-count: 2;
  }
}

@media (max-width: 640px) {
  .masonry-layout {
    column-count: 1;
  }
}
</style>
