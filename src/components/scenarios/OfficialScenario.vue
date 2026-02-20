<template>
  <div class="scenario-official" :class="{ 'themed': themed }">
    <!-- Hero Section -->
    <header class="hero-section">
      <h1 class="company-name">{{ content.companyName }}</h1>
      <p class="mission-statement">{{ content.mission }}</p>
      <button class="cta-button">Get Started</button>
    </header>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="stats-grid">
        <div v-for="(stat, index) in content.stats" :key="index" class="stat-item">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <h2 class="section-title">Our Services</h2>
      <div class="services-grid">
        <article v-for="(service, index) in content.services" :key="index" class="service-card">
          <div class="service-icon">{{ getServiceIcon(index) }}</div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <a href="#" class="service-link">Learn More →</a>
        </article>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-content">
        <h2 class="contact-title">Ready to Transform Your Business?</h2>
        <p class="contact-text">Contact us today for a free consultation</p>
        <button class="contact-button">Schedule a Call</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * Official Site Scenario Component
 * Demonstrates a corporate official website
 */

import { computed } from 'vue';
import { officialContent } from '../../config/scenarioContent';

interface Props {
  themed?: boolean;
}

withDefaults(defineProps<Props>(), {
  themed: false,
});

const content = computed(() => officialContent!);

function getServiceIcon(index: number): string {
  const icons = ['☁️', '🚀', '🔒', '📊', '💻', '🛟'];
  return icons[index % icons.length];
}
</script>

<style scoped>
/* Raw unstyled layout */
.scenario-official {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 3rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.company-name {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.mission-statement {
  font-size: 1.125rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.cta-button {
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.cta-button:hover {
  background: #1d4ed8;
}

/* Stats Section */
.stats-section {
  margin-bottom: 4rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: var(--preview-grid-columns, repeat(auto-fit, minmax(150px, 1fr)));
  gap: var(--preview-grid-gap, 2rem);
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
}

/* Services Section */
.services-section {
  margin-bottom: 4rem;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: var(--preview-grid-columns, repeat(auto-fit, minmax(300px, 1fr)));
  gap: var(--preview-grid-gap, 2rem);
}

.service-card {
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.service-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.service-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.service-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* Contact Section */
.contact-section {
  padding: 3rem 2rem;
  text-align: center;
  background: #f9f9f9;
  border-radius: 8px;
}

.contact-title {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.contact-text {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.contact-button {
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.contact-button:hover {
  background: #1d4ed8;
}

/* Themed version */
.themed .hero-section {
  background: linear-gradient(135deg, var(--preview-color-background-secondary), var(--preview-color-background-tertiary));
  border-radius: var(--preview-border-radius-xl);
}

/* Themed version */
.themed {
  font-family: var(--preview-font-family-body);
}

.themed .company-name {
  font-size: var(--preview-font-size-5xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-primary);
  font-family: var(--preview-font-family-heading);
}

.themed .mission-statement {
  font-size: var(--preview-font-size-lg);
  color: var(--preview-color-text-secondary);
  line-height: var(--preview-line-height-relaxed);
}

.themed .cta-button {
  background-color: var(--preview-color-primary);
  color: var(--preview-color-text-inverse);
  border-radius: var(--preview-border-radius-lg);
  font-weight: var(--preview-font-weight-semibold);
  transition: all var(--preview-transition-fast);
}

.themed .cta-button:hover {
  background-color: var(--preview-color-accent);
  box-shadow: var(--preview-shadow-lg);
  transform: translateY(-2px);
}

.themed .stat-item {
  background-color: var(--preview-color-background-elevated);
  border-color: var(--preview-color-border-default);
  border-radius: var(--preview-border-radius-lg);
  box-shadow: var(--preview-shadow-sm);
}

.themed .stat-value {
  font-size: var(--preview-font-size-3xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-primary);
}

.themed .stat-label {
  font-size: var(--preview-font-size-sm);
  color: var(--preview-color-text-secondary);
  font-weight: var(--preview-font-weight-medium);
}

.themed .section-title {
  font-size: var(--preview-font-size-3xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-text-primary);
}

.themed .service-card {
  background-color: var(--preview-color-background-elevated);
  border-color: var(--preview-color-border-default);
  border-radius: var(--preview-border-radius-lg);
}

.themed .service-card:hover {
  box-shadow: var(--preview-shadow-xl);
  border-color: var(--preview-color-accent);
}

.themed .service-title {
  font-size: var(--preview-font-size-xl);
  font-weight: var(--preview-font-weight-semibold);
  color: var(--preview-color-text-primary);
}

.themed .service-description {
  color: var(--preview-color-text-secondary);
  line-height: var(--preview-line-height-relaxed);
}

.themed .service-link {
  color: var(--preview-color-primary);
  font-weight: var(--preview-font-weight-medium);
}

.themed .service-link:hover {
  color: var(--preview-color-accent);
}

.themed .contact-section {
  background: linear-gradient(135deg, var(--preview-color-secondary), var(--preview-color-primary));
  border-radius: var(--preview-border-radius-xl);
}

.themed .contact-title {
  font-size: var(--preview-font-size-2xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-text-inverse);
}

.themed .contact-text {
  color: var(--preview-color-text-inverse);
  opacity: 0.9;
}

.themed .contact-button {
  background-color: var(--preview-color-text-inverse);
  color: var(--preview-color-primary);
  border-radius: var(--preview-border-radius-lg);
  font-weight: var(--preview-font-weight-bold);
}

.themed .contact-button:hover {
  background-color: white;
  box-shadow: var(--preview-shadow-lg);
}
</style>
