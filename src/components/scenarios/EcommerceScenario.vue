<template>
  <div class="scenario-ecommerce" :class="{ 'themed': themed }">
    <!-- Store Header -->
    <header class="store-header">
      <h1 class="store-name">{{ content.storeName }}</h1>
      <p class="store-tagline">Premium Tech Products</p>
    </header>

    <!-- Category Filter -->
    <nav class="category-nav">
      <button
        v-for="category in content.categories"
        :key="category"
        class="category-button"
        :class="{ active: selectedCategory === category }"
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </nav>

    <!-- Products Grid -->
    <section class="products-section">
      <h2 class="section-title">Our Products</h2>
      <div class="products-grid">
        <article
          v-for="(product, index) in filteredProducts"
          :key="index"
          class="product-card"
        >
          <div class="product-image">
            <span class="product-icon">{{ getProductIcon(product.category) }}</span>
          </div>
          <div class="product-info">
            <span class="product-category">{{ product.category }}</span>
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <div class="product-footer">
              <span class="product-price">${{ product.price.toFixed(2) }}</span>
              <button class="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * E-commerce Scenario Component
 * Demonstrates an online store interface
 */

import { ref, computed } from 'vue';
import { ecommerceContent } from '../../config/scenarioContent';

interface Props {
  themed?: boolean;
}

withDefaults(defineProps<Props>(), {
  themed: false,
});

const content = computed(() => ecommerceContent!);
const selectedCategory = ref<string>('All');

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'All') {
    return content.value.products;
  }
  return content.value.products.filter(p => p.category === selectedCategory.value);
});

function getProductIcon(category: string): string {
  const icons: Record<string, string> = {
    Audio: '🎧',
    Monitors: '🖥️',
    Accessories: '⌨️',
    Wearables: '⌚',
    Storage: '💾',
    Furniture: '🪑',
  };
  return icons[category] || '📦';
}
</script>

<style scoped>
/* Raw unstyled layout */
.scenario-ecommerce {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.store-header {
  text-align: center;
  margin-bottom: 2rem;
}

.store-name {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.store-tagline {
  font-size: 1.125rem;
  color: #666;
}

/* Category Navigation */
.category-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.category-button {
  padding: 0.5rem 1.25rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.category-button:hover {
  background: #f5f5f5;
}

.category-button.active {
  background: #333;
  color: white;
  border-color: #333;
}

/* Products Section */
.products-section {
  margin-bottom: 2rem;
}

.section-title {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: var(--preview-grid-columns, repeat(auto-fill, minmax(280px, 1fr)));
  gap: var(--preview-grid-gap, 1.5rem);
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.product-image {
  background: #f9f9f9;
  padding: 2rem;
  text-align: center;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-icon {
  font-size: 3rem;
}

.product-info {
  padding: 1.25rem;
}

.product-category {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #888;
  display: block;
  margin-bottom: 0.5rem;
}

.product-name {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.product-description {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.product-price {
  font-size: 1.25rem;
  font-weight: bold;
}

.add-to-cart {
  padding: 0.5rem 1rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background 0.2s;
}

.add-to-cart:hover {
  background: #555;
}

/* Themed version */
.themed {
  font-family: var(--preview-font-family-body);
}

.themed .store-name {
  font-size: var(--preview-font-size-4xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-primary);
  font-family: var(--preview-font-family-heading);
}

.themed .store-tagline {
  font-size: var(--preview-font-size-lg);
  color: var(--preview-color-text-secondary);
}

.themed .category-button {
  background-color: var(--preview-color-background-elevated);
  border-color: var(--preview-color-border-default);
  color: var(--preview-color-text-primary);
  font-weight: var(--preview-font-weight-medium);
  border-radius: var(--preview-border-radius-md);
  transition: all var(--preview-transition-fast);
}

.themed .category-button:hover {
  background-color: var(--preview-color-background-tertiary);
  border-color: var(--preview-color-accent);
}

.themed .category-button.active {
  background-color: var(--preview-color-primary);
  color: var(--preview-color-text-inverse);
  border-color: var(--preview-color-primary);
}

.themed .section-title {
  font-size: var(--preview-font-size-2xl);
  font-weight: var(--preview-font-weight-semibold);
  color: var(--preview-color-text-primary);
}

.themed .product-card {
  background-color: var(--preview-color-background-elevated);
  border-color: var(--preview-color-border-default);
  border-radius: var(--preview-border-radius-lg);
  box-shadow: var(--preview-shadow-sm);
}

.themed .product-card:hover {
  box-shadow: var(--preview-shadow-lg);
  border-color: var(--preview-color-accent);
}

.themed .product-image {
  background: linear-gradient(135deg, var(--preview-color-background-secondary), var(--preview-color-background-tertiary));
}

.themed .product-category {
  color: var(--preview-color-accent);
  font-weight: var(--preview-font-weight-semibold);
}

.themed .product-name {
  font-weight: var(--preview-font-weight-semibold);
  color: var(--preview-color-text-primary);
}

.themed .product-description {
  color: var(--preview-color-text-secondary);
  line-height: var(--preview-line-height-relaxed);
}

.themed .product-price {
  font-size: var(--preview-font-size-xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-primary);
}

.themed .add-to-cart {
  background-color: var(--preview-color-primary);
  color: var(--preview-color-text-inverse);
  border-radius: var(--preview-border-radius-md);
  font-weight: var(--preview-font-weight-medium);
  transition: all var(--preview-transition-fast);
}

.themed .add-to-cart:hover {
  background-color: var(--preview-color-accent);
  box-shadow: var(--preview-shadow-md);
  transform: translateY(-1px);
}
</style>
