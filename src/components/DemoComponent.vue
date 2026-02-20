<template>
  <div
    class="demo-container"
    :class="[layoutConfig?.customClasses?.container, `layout-${layoutConfig?.pattern}`, { 'full-width': fullWidth }]"
  >
    <!-- Hero Section -->
    <header v-if="content && layoutConfig?.components.showHero" class="demo-hero">
      <h1 class="demo-hero-title">{{ content.hero.title }}</h1>
      <h2 class="demo-hero-subtitle">{{ content.hero.subtitle }}</h2>
      <p class="demo-hero-description">{{ content.hero.description }}</p>
      <button
        v-if="content.hero.callToAction"
        class="btn btn-primary btn-lg demo-cta"
      >
        {{ content.hero.callToAction }}
      </button>
    </header>

    <!-- Tagline -->
    <p v-if="content" class="demo-tagline">{{ content.tagline }}</p>

    <!-- Dynamic Layout Component -->
    <component
      :is="layoutComponent"
      :layout-config="layoutConfig"
      :custom-classes="layoutConfig?.customClasses"
      class="demo-content-layout"
    >
      <!-- Features Section -->
      <section
        v-if="content && layoutConfig?.components.showFeatures"
        class="demo-section demo-features"
      >
        <h3>Features</h3>
        <div class="features-grid">
          <div
            v-for="(feature, index) in content.features"
            :key="index"
            class="feature-card"
          >
            <span v-if="feature.icon" class="feature-icon">{{ feature.icon }}</span>
            <h4 class="feature-title">{{ feature.title }}</h4>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <!-- Examples Section -->
      <section
        v-if="content && layoutConfig?.components.showExamples"
        class="demo-section demo-examples"
      >
        <h3>Examples</h3>
        <div class="examples-list">
          <div
            v-for="(example, index) in content.examples"
            :key="index"
            class="example-card"
          >
            <h4 class="example-title">{{ example.title }}</h4>
            <code
              v-if="example.code"
              class="example-code"
              :class="`language-${example.language || 'vue'}`"
            >{{ example.code }}</code>
            <p v-if="example.text" class="example-text">{{ example.text }}</p>
          </div>
        </div>
      </section>

      <!-- Color Palette Section -->
      <section
        v-if="layoutConfig?.components.showColorPalette"
        class="demo-section demo-colors"
      >
        <h3>Color Palette</h3>
        <div class="color-grid">
          <div class="color-item" :style="{ backgroundColor: 'var(--preview-color-primary)' }">
            <span>Primary</span>
          </div>
          <div class="color-item" :style="{ backgroundColor: 'var(--preview-color-secondary)' }">
            <span>Secondary</span>
          </div>
          <div class="color-item" :style="{ backgroundColor: 'var(--preview-color-accent)' }">
            <span>Accent</span>
          </div>
          <div class="color-item" :style="{ backgroundColor: 'var(--preview-color-success)' }">
            <span>Success</span>
          </div>
          <div class="color-item" :style="{ backgroundColor: 'var(--preview-color-warning)' }">
            <span>Warning</span>
          </div>
          <div class="color-item" :style="{ backgroundColor: 'var(--preview-color-error)' }">
            <span>Error</span>
          </div>
        </div>
      </section>

      <!-- Use Cases Section -->
      <section v-if="content?.useCases" class="demo-section demo-use-cases">
        <h3>Use Cases</h3>
        <ul class="use-cases-list">
          <li v-for="(useCase, index) in content.useCases" :key="index">
            {{ useCase }}
          </li>
        </ul>
      </section>
    </component>

    <!-- Current Theme Info -->
    <section class="demo-section demo-theme-info">
      <h3>Current Theme</h3>
      <div class="theme-info">
        <p><strong>Name:</strong> {{ currentTheme?.name }}</p>
        <p><strong>ID:</strong> {{ currentTheme?.id }}</p>
        <p><strong>Description:</strong> {{ currentTheme?.description }}</p>
        <p v-if="layoutConfig"><strong>Layout:</strong> {{ layoutConfig.pattern }}</p>
        <p v-if="currentTheme?.fontConfig"><strong>Font:</strong> {{ currentTheme.fontConfig.family }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * DemoComponent
 *
 * Showcase component demonstrating dynamic theme content and layouts
 */

import { inject, computed } from 'vue';
import type { Ref } from 'vue';
import type { Theme, ThemeContent, ThemeLayoutConfig, LayoutPattern } from '../types/theme';
import { CardGridLayout, MasonryLayout, VerticalListLayout, HorizontalScrollLayout } from './layouts';

// Props
interface Props {
  fullWidth?: boolean;
}

withDefaults(defineProps<Props>(), {
  fullWidth: false,
});

// Inject theme context from ThemeProvider
const currentTheme = inject<Ref<Theme>>('theme');

if (!currentTheme) {
  throw new Error('DemoComponent must be used within a ThemeProvider');
}

// Get theme content with fallback
const content = computed<ThemeContent>(() => {
  return currentTheme.value.content || {
    hero: {
      title: currentTheme.value.name,
      subtitle: 'Theme Demo',
      description: currentTheme.value.description,
    },
    features: [],
    examples: [],
    tagline: 'A beautiful theme',
    useCases: [],
  };
});

// Get layout config with fallback
const layoutConfig = computed<ThemeLayoutConfig>(() => {
  return currentTheme.value.layoutConfig || {
    pattern: 'card-grid',
    grid: {
      columns: 3,
      gap: '1.5rem',
    },
    components: {
      showHero: true,
      showFeatures: true,
      showExamples: true,
      showColorPalette: true,
      showTypography: true,
      featurePosition: 'before',
    },
  };
});

// Map layout patterns to components
const layoutComponents: Record<LayoutPattern, any> = {
  'card-grid': CardGridLayout,
  'masonry': MasonryLayout,
  'vertical-list': VerticalListLayout,
  'horizontal-scroll': HorizontalScrollLayout,
  'bento-box': CardGridLayout,
  'compact-list': VerticalListLayout,
};

// Get the appropriate layout component
const layoutComponent = computed(() => {
  return layoutComponents[layoutConfig.value.pattern] || CardGridLayout;
});
</script>

<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--preview-spacing-8) var(--preview-spacing-6);
}

.demo-container.full-width {
  max-width: 100%;
  padding: var(--preview-spacing-6);
}

/* Hero Section */
.demo-hero {
  text-align: center;
  margin-bottom: var(--preview-spacing-12);
  padding: var(--preview-spacing-12) var(--preview-spacing-6);
  background: linear-gradient(135deg, var(--preview-color-background-secondary), var(--preview-color-background-tertiary));
  border-radius: var(--preview-border-radius-xl);
}

.demo-hero-title {
  font-size: var(--preview-font-size-4xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-primary);
  margin-bottom: var(--preview-spacing-3);
}

.demo-hero-subtitle {
  font-size: var(--preview-font-size-2xl);
  font-weight: var(--preview-font-weight-medium);
  color: var(--preview-color-secondary);
  margin-bottom: var(--preview-spacing-4);
}

.demo-hero-description {
  font-size: var(--preview-font-size-lg);
  color: var(--preview-color-text-secondary);
  max-width: 600px;
  margin: 0 auto var(--preview-spacing-6);
  line-height: var(--preview-line-height-relaxed);
}

.demo-cta {
  margin-top: var(--preview-spacing-4);
}

/* Tagline */
.demo-tagline {
  text-align: center;
  font-size: var(--preview-font-size-lg);
  font-style: italic;
  color: var(--preview-color-text-secondary);
  margin-bottom: var(--preview-spacing-10);
  padding: var(--preview-spacing-4);
  border-left: 4px solid var(--preview-color-accent);
  border-right: 4px solid var(--preview-color-accent);
}

/* Content Layout */
.demo-content-layout {
  margin-bottom: var(--preview-spacing-16);
}

/* Sections */
.demo-section {
  margin-bottom: var(--preview-spacing-10);
}

.demo-section h3 {
  font-size: var(--preview-font-size-2xl);
  margin-bottom: var(--preview-spacing-5);
  color: var(--preview-color-text-primary);
  border-bottom: 2px solid var(--preview-color-border-default);
  padding-bottom: var(--preview-spacing-2);
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--preview-spacing-5);
}

.feature-card {
  background-color: var(--preview-color-background-elevated);
  border: 1px solid var(--preview-color-border-default);
  border-radius: var(--preview-border-radius-lg);
  padding: var(--preview-spacing-5);
  text-align: center;
  transition: all var(--preview-transition-normal);
}

.feature-card:hover {
  box-shadow: var(--preview-shadow-lg);
  transform: translateY(-4px);
  border-color: var(--preview-color-primary);
}

.feature-icon {
  display: block;
  font-size: 2.5rem;
  margin-bottom: var(--preview-spacing-3);
}

.feature-title {
  font-size: var(--preview-font-size-lg);
  font-weight: var(--preview-font-weight-semibold);
  color: var(--preview-color-text-primary);
  margin-bottom: var(--preview-spacing-2);
}

.feature-description {
  font-size: var(--preview-font-size-sm);
  color: var(--preview-color-text-secondary);
  line-height: var(--preview-line-height-normal);
}

/* Examples List */
.examples-list {
  display: flex;
  flex-direction: column;
  gap: var(--preview-spacing-5);
}

.example-card {
  background-color: var(--preview-color-background-elevated);
  border: 1px solid var(--preview-color-border-default);
  border-radius: var(--preview-border-radius-lg);
  padding: var(--preview-spacing-6);
}

.example-title {
  font-size: var(--preview-font-size-xl);
  font-weight: var(--preview-font-weight-semibold);
  color: var(--preview-color-text-primary);
  margin-bottom: var(--preview-spacing-3);
}

.example-code {
  display: block;
  background-color: var(--preview-color-background-tertiary);
  color: var(--preview-color-primary);
  padding: var(--preview-spacing-4);
  border-radius: var(--preview-border-radius-md);
  font-family: var(--preview-font-family-mono);
  font-size: var(--preview-font-size-sm);
  line-height: var(--preview-line-height-relaxed);
  overflow-x: auto;
  margin-bottom: var(--preview-spacing-3);
}

.example-text {
  color: var(--preview-color-text-secondary);
  line-height: var(--preview-line-height-relaxed);
}

/* Color Grid */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--preview-spacing-4);
}

.color-item {
  padding: var(--preview-spacing-5);
  border-radius: var(--preview-border-radius-md);
  text-align: center;
  color: var(--preview-color-text-inverse);
  font-size: var(--preview-font-size-sm);
  font-weight: var(--preview-font-weight-semibold);
  box-shadow: var(--preview-shadow-md);
  transition: transform var(--preview-transition-fast);
}

.color-item:hover {
  transform: scale(1.05);
}

/* Use Cases List */
.use-cases-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--preview-spacing-3);
}

.use-cases-list li {
  background-color: var(--preview-color-background-secondary);
  color: var(--preview-color-primary);
  padding: var(--preview-spacing-2) var(--preview-spacing-4);
  border-radius: var(--preview-border-radius-full);
  font-size: var(--preview-font-size-sm);
  font-weight: var(--preview-font-weight-medium);
}

/* Theme Info */
.demo-theme-info {
  background-color: var(--preview-color-background-secondary);
  padding: var(--preview-spacing-6);
  border-radius: var(--preview-border-radius-lg);
  border: 1px solid var(--preview-color-border-default);
}

.theme-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--preview-spacing-3);
}

.theme-info p {
  margin: 0;
  font-size: var(--preview-font-size-sm);
}

.theme-info strong {
  color: var(--preview-color-text-primary);
  margin-right: var(--preview-spacing-2);
}

/* Layout-specific adjustments */
.layout-vertical-list .features-grid,
.layout-vertical-list .color-grid {
  grid-template-columns: 1fr;
}

.layout-horizontal-scroll .features-grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* Responsive */
@media (max-width: 768px) {
  .demo-container {
    padding: var(--preview-spacing-6) var(--preview-spacing-4);
  }

  .demo-hero {
    padding: var(--preview-spacing-8) var(--preview-spacing-4);
    margin-bottom: var(--preview-spacing-8);
  }

  .demo-hero-title {
    font-size: var(--preview-font-size-3xl);
  }

  .demo-hero-subtitle {
    font-size: var(--preview-font-size-xl);
  }

  .demo-hero-description {
    font-size: var(--preview-font-size-base);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .color-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .theme-info {
    grid-template-columns: 1fr;
  }
}
</style>
