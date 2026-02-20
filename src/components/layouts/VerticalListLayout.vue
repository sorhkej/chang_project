<template>
  <div class="vertical-list-layout" :class="customClasses?.container">
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
.vertical-list-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.vertical-list-layout :deep(> *) {
  width: 100%;
}

@media (max-width: 768px) {
  .vertical-list-layout {
    gap: 0.75rem;
    max-width: 100%;
  }
}
</style>
