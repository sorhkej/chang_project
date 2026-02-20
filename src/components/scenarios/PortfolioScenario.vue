<template>
  <div class="scenario-portfolio" :class="{ 'themed': themed }" ref="rootElement">
    <!-- Header -->
    <header class="portfolio-header">
      <h1 class="portfolio-name">{{ content.name }}</h1>
      <p class="portfolio-title">{{ content.title }}</p>
      <p class="portfolio-bio">{{ content.bio }}</p>
    </header>

    <!-- Skills Section -->
    <section class="portfolio-section">
      <h2 class="section-title">Skills</h2>
      <div class="skills-list">
        <span v-for="skill in content.skills" :key="skill" class="skill-tag">
          {{ skill }}
        </span>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="portfolio-section">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <article v-for="(project, index) in content.projects" :key="index" class="project-card">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="portfolio-section">
      <h2 class="section-title">Get In Touch</h2>
      <button class="contact-button">Contact Me</button>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * Portfolio Scenario Component
 * Demonstrates a personal portfolio website
 */

import { computed, onMounted, ref, watch, nextTick } from 'vue';
import { portfolioContent } from '../../config/scenarioContent';

interface Props {
  themed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  themed: false,
});

const content = computed(() => portfolioContent!);
const rootElement = ref<HTMLElement | null>(null);

// Watch themed prop changes
watch(() => props.themed, (isThemed) => {
  console.log('[PortfolioScenario] themed prop changed to:', isThemed);
}, { immediate: true });

onMounted(async () => {
  console.log('[PortfolioScenario] Mounted, themed:', props.themed);

  // Wait for CSS variables to be applied
  await nextTick();

  if (rootElement.value) {
    // Log root element info
    console.log('[PortfolioScenario] rootElement:', rootElement.value.tagName, rootElement.value.className);

    // Log a few key CSS variables
    const computedStyle = window.getComputedStyle(rootElement.value);
    const primaryColor = computedStyle.getPropertyValue('--preview-color-primary');
    const bgColor = computedStyle.getPropertyValue('--preview-color-background-primary');

    console.log('[PortfolioScenario] Key CSS vars:');
    console.log('  primary:', primaryColor);
    console.log('  bg:', bgColor);

    // Check first skill-tag
    const skillTag = rootElement.value.querySelector('.skill-tag');
    if (skillTag) {
      const tagStyle = window.getComputedStyle(skillTag);
      console.log('[PortfolioScenario] skill-tag:');
      console.log('  classes:', skillTag.className);
      console.log('  color:', tagStyle.color);
      console.log('  bg:', tagStyle.backgroundColor);
    }
  }
});
</script>

<style scoped>
/* Raw unstyled layout - minimal structure */
.scenario-portfolio {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 3rem;
}

.portfolio-name {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.portfolio-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.portfolio-bio {
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.portfolio-section {
  margin-bottom: 3rem;
}

.section-title {
  margin-bottom: 1.5rem;
}

/* Skills */
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.875rem;
}

/* Projects */
.projects-grid {
  display: grid;
  grid-template-columns: var(--preview-grid-columns, repeat(auto-fit, minmax(250px, 1fr)));
  gap: var(--preview-grid-gap, 1.5rem);
}

.project-card {
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.project-title {
  margin-bottom: 0.75rem;
}

.project-description {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background: #f0f0f0;
  border-radius: 4px;
}

/* Contact */
.contact-button {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

/* Themed version - applies CSS variables */
.themed {
  font-family: var(--preview-font-family-body);
}

.themed .portfolio-name {
  font-size: var(--preview-font-size-4xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-primary);
  font-family: var(--preview-font-family-heading);
}

.themed .portfolio-title {
  font-size: var(--preview-font-size-xl);
  font-weight: var(--preview-font-weight-medium);
  color: var(--preview-color-secondary);
}

.themed .portfolio-bio {
  font-size: var(--preview-font-size-base);
  color: var(--preview-color-text-secondary);
  line-height: var(--preview-line-height-relaxed);
}

.themed .section-title {
  font-size: var(--preview-font-size-2xl);
  font-weight: var(--preview-font-weight-semibold);
  color: var(--preview-color-text-primary);
  border-bottom: 2px solid var(--preview-color-border-default);
  padding-bottom: var(--preview-spacing-2);
}

/* Themed version - applies CSS variables */
.themed .skill-tag {
  background-color: var(--preview-color-background-secondary);
  color: var(--preview-color-primary);
  border-color: var(--preview-color-border-default);
  font-weight: var(--preview-font-weight-medium);
  transition: all var(--preview-transition-fast);
}

.themed .skill-tag:hover {
  background-color: var(--preview-color-primary);
  color: var(--preview-color-text-inverse);
  transform: translateY(-2px);
}

.themed .project-card {
  background-color: var(--preview-color-background-elevated);
  border-color: var(--preview-color-border-default);
  border-radius: var(--preview-border-radius-lg);
  box-shadow: var(--preview-shadow-sm);
  transition: all var(--preview-transition-normal);
}

.themed .project-card:hover {
  box-shadow: var(--preview-shadow-lg);
  transform: translateY(-4px);
  border-color: var(--preview-color-primary);
}

.themed .project-title {
  font-size: var(--preview-font-size-lg);
  font-weight: var(--preview-font-weight-semibold);
  color: var(--preview-color-text-primary);
}

.themed .project-description {
  font-size: var(--preview-font-size-sm);
  color: var(--preview-color-text-secondary);
  line-height: var(--preview-line-height-relaxed);
}

.themed .tag {
  background-color: var(--preview-color-background-tertiary);
  color: var(--preview-color-accent);
  font-weight: var(--preview-font-weight-medium);
}

.themed .contact-button {
  background-color: var(--preview-color-primary);
  color: var(--preview-color-text-inverse);
  font-weight: var(--preview-font-weight-semibold);
  border-radius: var(--preview-border-radius-md);
  transition: all var(--preview-transition-fast);
}

.themed .contact-button:hover {
  background-color: var(--preview-color-accent);
  box-shadow: var(--preview-shadow-md);
  transform: translateY(-2px);
}
</style>
