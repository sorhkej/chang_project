<template>
  <ThemeProvider :is-root="true">
    <div id="app" class="app">
      <StylePreviewContainer />
    </div>
  </ThemeProvider>
</template>

<script setup lang="ts">
/**
 * App Component
 *
 * Root component of the application.
 * Now hosts the Style Preview Tool which allows users to independently
 * select layouts, colors, and fonts with live preview.
 */

import { onMounted } from 'vue';
import ThemeProvider from './providers/ThemeProvider.vue';
import StylePreviewContainer from './components/preview/StylePreviewContainer.vue';
import { useAppTheme } from './composables/useAppTheme';

// Initialize app theme
const { initializeAppTheme } = useAppTheme();

onMounted(() => {
  initializeAppTheme();
});
</script>

<style>
/* Global app styles */
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
