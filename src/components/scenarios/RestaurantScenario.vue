<template>
  <div class="scenario-restaurant" :class="{ 'themed': themed }">
    <!-- Restaurant Header -->
    <header class="restaurant-header">
      <span class="cuisine-tag">{{ content.cuisine }}</span>
      <h1 class="restaurant-name">{{ content.name }}</h1>
      <p class="restaurant-description">{{ content.description }}</p>
      <div class="restaurant-meta">
        <span class="meta-item">📍 {{ content.location }}</span>
        <span class="meta-item">🕐 {{ content.hours }}</span>
      </div>
    </header>

    <!-- Menu Sections -->
    <section
      v-for="(menuSection, index) in content.menu"
      :key="index"
      class="menu-section"
    >
      <h2 class="menu-category">{{ menuSection.category }}</h2>
      <div class="menu-items">
        <article
          v-for="(item, itemIndex) in menuSection.items"
          :key="itemIndex"
          class="menu-item"
        >
          <div class="item-header">
            <h3 class="item-name">{{ item.name }}</h3>
            <span class="item-price">${{ item.price.toFixed(0) }}</span>
          </div>
          <p class="item-description">{{ item.description }}</p>
        </article>
      </div>
    </section>

    <!-- Reservation Section -->
    <section class="reservation-section">
      <div class="reservation-content">
        <h2 class="reservation-title">Reserve Your Table</h2>
        <p class="reservation-text">Join us for an unforgettable dining experience</p>
        <div class="reservation-form">
          <select class="party-select">
            <option>2 Guests</option>
            <option>4 Guests</option>
            <option>6 Guests</option>
            <option>8+ Guests</option>
          </select>
          <select class="time-select">
            <option>5:00 PM</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
            <option>8:00 PM</option>
          </select>
          <button class="reserve-button">Book Now</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * Restaurant Scenario Component
 * Demonstrates a restaurant menu and reservation interface
 */

import { computed } from 'vue';
import { restaurantContent } from '../../config/scenarioContent';

interface Props {
  themed?: boolean;
}

withDefaults(defineProps<Props>(), {
  themed: false,
});

const content = computed(() => restaurantContent!);
</script>

<style scoped>
/* Raw unstyled layout */
.scenario-restaurant {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

/* Restaurant Header */
.restaurant-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #eee;
}

.cuisine-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.restaurant-name {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.restaurant-description {
  font-size: 1.125rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto 1.5rem;
  line-height: 1.6;
}

.restaurant-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  font-size: 0.9375rem;
  color: #666;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Menu Sections */
.menu-section {
  margin-bottom: 3rem;
}

.menu-category {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #d4a574;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.menu-item {
  padding: 1rem;
  border-left: 3px solid #d4a574;
  background: #faf9f7;
  border-radius: 4px;
  transition: transform 0.2s;
}

.menu-item:hover {
  transform: translateX(4px);
  background: #f5f4f2;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  gap: 1rem;
}

.item-name {
  font-size: 1.125rem;
  font-weight: 600;
}

.item-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #d4a574;
  white-space: nowrap;
}

.item-description {
  font-size: 0.9375rem;
  color: #666;
  line-height: 1.5;
}

/* Reservation Section */
.reservation-section {
  margin-top: 4rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
  border-radius: 12px;
  color: white;
  text-align: center;
}

.reservation-title {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.reservation-text {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.reservation-form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
}

.party-select,
.time-select {
  flex: 1;
  min-width: 150px;
  padding: 0.875rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9375rem;
  background: white;
  cursor: pointer;
}

.reserve-button {
  flex: 1;
  min-width: 150px;
  padding: 0.875rem 2rem;
  background: #fef3c7;
  color: #78350f;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.reserve-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Themed version */
.themed .restaurant-header {
  border-bottom-color: var(--preview-color-border-default);
}

.themed .cuisine-tag {
  background-color: var(--preview-color-accent);
  color: var(--preview-color-text-inverse);
  border-radius: var(--preview-border-radius-full);
  font-weight: var(--preview-font-weight-bold);
}

/* Themed version */
.themed {
  font-family: var(--preview-font-family-body);
}

.themed .restaurant-name {
  font-size: var(--preview-font-size-4xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-primary);
  font-family: var(--preview-font-family-heading);
}

.themed .restaurant-description {
  font-size: var(--preview-font-size-lg);
  color: var(--preview-color-text-secondary);
  line-height: var(--preview-line-height-relaxed);
}

.themed .restaurant-meta {
  color: var(--preview-color-text-secondary);
  font-weight: var(--preview-font-weight-medium);
}

.themed .menu-category {
  font-size: var(--preview-font-size-2xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-text-primary);
  border-bottom-color: var(--preview-color-accent);
}

.themed .menu-item {
  background-color: var(--preview-color-background-secondary);
  border-left-color: var(--preview-color-accent);
  border-radius: var(--preview-border-radius-md);
  transition: all var(--preview-transition-fast);
}

.themed .menu-item:hover {
  background-color: var(--preview-color-background-tertiary);
  transform: translateX(8px);
  box-shadow: var(--preview-shadow-md);
}

.themed .item-name {
  font-weight: var(--preview-font-weight-semibold);
  color: var(--preview-color-text-primary);
}

.themed .item-price {
  font-size: var(--preview-font-size-xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-primary);
}

.themed .item-description {
  color: var(--preview-color-text-secondary);
  line-height: var(--preview-line-height-relaxed);
}

.themed .reservation-section {
  background: linear-gradient(135deg, var(--preview-color-primary), var(--preview-color-secondary));
  border-radius: var(--preview-border-radius-xl);
  box-shadow: var(--preview-shadow-xl);
}

.themed .reservation-title {
  font-size: var(--preview-font-size-3xl);
  font-weight: var(--preview-font-weight-bold);
}

.themed .reservation-text {
  font-size: var(--preview-font-size-lg);
}

.themed .party-select,
.themed .time-select {
  border-radius: var(--preview-border-radius-md);
  box-shadow: var(--preview-shadow-sm);
  font-weight: var(--preview-font-weight-medium);
}

.themed .reserve-button {
  background-color: var(--preview-color-accent);
  color: var(--preview-color-text-inverse);
  border-radius: var(--preview-border-radius-md);
  font-weight: var(--preview-font-weight-bold);
  box-shadow: var(--preview-shadow-md);
  transition: all var(--preview-transition-fast);
}

.themed .reserve-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--preview-shadow-lg);
}
</style>
