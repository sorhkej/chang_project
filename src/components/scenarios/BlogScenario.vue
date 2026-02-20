<template>
  <div class="scenario-blog" :class="{ 'themed': themed }">
    <!-- Blog Header -->
    <header class="blog-header">
      <h1 class="blog-name">{{ content.blogName }}</h1>
      <p class="blog-author">by {{ content.author }}</p>
    </header>

    <!-- Category Filter -->
    <nav class="category-nav">
      <button
        v-for="category in ['All', ...content.categories]"
        :key="category"
        class="category-button"
        :class="{ active: selectedCategory === category }"
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </nav>

    <!-- Featured Post -->
    <article class="featured-post">
      <span class="featured-badge">Featured</span>
      <h2 class="featured-title">{{ content.posts[0].title }}</h2>
      <p class="featured-excerpt">{{ content.posts[0].excerpt }}</p>
      <div class="post-meta">
        <span class="meta-item">{{ content.posts[0].date }}</span>
        <span class="meta-item">{{ content.posts[0].category }}</span>
        <span class="meta-item">{{ content.posts[0].readTime }}</span>
      </div>
      <button class="read-more">Read Article</button>
    </article>

    <!-- Posts Grid -->
    <section class="posts-section">
      <h2 class="section-title">Latest Articles</h2>
      <div class="posts-grid">
        <article
          v-for="(post, index) in displayedPosts"
          :key="index"
          class="post-card"
        >
          <span class="post-category">{{ post.category }}</span>
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-excerpt">{{ post.excerpt }}</p>
          <div class="post-meta">
            <span class="meta-date">{{ post.date }}</span>
            <span class="meta-time">{{ post.readTime }}</span>
          </div>
          <a href="#" class="post-link">Continue Reading →</a>
        </article>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter-section">
      <h3 class="newsletter-title">Subscribe to Newsletter</h3>
      <p class="newsletter-text">Get the latest articles delivered to your inbox</p>
      <div class="newsletter-form">
        <input type="email" placeholder="Your email address" class="email-input">
        <button class="subscribe-button">Subscribe</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * Blog Scenario Component
 * Demonstrates a blog/content platform
 */

import { ref, computed } from 'vue';
import { blogContent } from '../../config/scenarioContent';

interface Props {
  themed?: boolean;
}

withDefaults(defineProps<Props>(), {
  themed: false,
});

const content = computed(() => blogContent!);
const selectedCategory = ref<string>('All');

const displayedPosts = computed(() => {
  if (selectedCategory.value === 'All') {
    return content.value.posts.slice(1); // Skip featured post
  }
  return content.value.posts.filter(p => p.category === selectedCategory.value);
});
</script>

<style scoped>
/* Raw unstyled layout */
.scenario-blog {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.blog-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #eee;
}

.blog-name {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.blog-author {
  font-size: 1.125rem;
  color: #666;
}

/* Category Navigation */
.category-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.category-button {
  padding: 0.5rem 1rem;
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
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

/* Featured Post */
.featured-post {
  position: relative;
  padding: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.featured-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(255,255,255,0.2);
  border-radius: 4px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.featured-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.featured-excerpt {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.95;
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  opacity: 0.9;
}

.meta-item {
  display: flex;
  align-items: center;
}

.read-more {
  padding: 0.75rem 1.5rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.read-more:hover {
  transform: translateY(-2px);
}

/* Posts Section */
.posts-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: var(--preview-grid-columns, repeat(auto-fill, minmax(300px, 1fr)));
  gap: var(--preview-grid-gap, 1.5rem);
}

.post-card {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.post-category {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #667eea;
  font-weight: 600;
  display: block;
  margin-bottom: 0.75rem;
}

.post-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.post-excerpt {
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8125rem;
  color: #9ca3af;
  margin-bottom: 1rem;
}

.post-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
}

.post-link:hover {
  text-decoration: underline;
}

/* Newsletter */
.newsletter-section {
  text-align: center;
  padding: 2.5rem;
  background: #f9fafb;
  border-radius: 8px;
}

.newsletter-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.newsletter-text {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.newsletter-form {
  display: flex;
  gap: 0.75rem;
  max-width: 500px;
  margin: 0 auto;
}

.email-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9375rem;
}

.subscribe-button {
  padding: 0.75rem 1.5rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.subscribe-button:hover {
  background: #1d4ed8;
}

/* Themed version */
.themed {
  font-family: var(--preview-font-family-body);
}

.themed .blog-name {
  font-size: var(--preview-font-size-4xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-primary);
  font-family: var(--preview-font-family-heading);
}

.themed .blog-author {
  font-size: var(--preview-font-size-lg);
  color: var(--preview-color-text-secondary);
  font-weight: var(--preview-font-weight-medium);
}

.themed .category-button {
  background-color: var(--preview-color-background-elevated);
  border-color: var(--preview-color-border-default);
  color: var(--preview-color-text-primary);
  border-radius: var(--preview-border-radius-md);
  font-weight: var(--preview-font-weight-medium);
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

.themed .featured-post {
  background: linear-gradient(135deg, var(--preview-color-primary), var(--preview-color-secondary));
  border-radius: var(--preview-border-radius-xl);
  box-shadow: var(--preview-shadow-xl);
}

.themed .featured-badge {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  font-weight: var(--preview-font-weight-semibold);
  border-radius: var(--preview-border-radius-full);
}

.themed .featured-title {
  font-size: var(--preview-font-size-3xl);
  font-weight: var(--preview-font-weight-bold);
}

.themed .featured-excerpt {
  font-size: var(--preview-font-size-lg);
  line-height: var(--preview-line-height-relaxed);
}

.themed .read-more {
  background-color: var(--preview-color-text-inverse);
  color: var(--preview-color-primary);
  font-weight: var(--preview-font-weight-bold);
  border-radius: var(--preview-border-radius-lg);
  box-shadow: var(--preview-shadow-md);
}

.themed .section-title {
  font-size: var(--preview-font-size-2xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-text-primary);
}

.themed .post-card {
  background-color: var(--preview-color-background-elevated);
  border-color: var(--preview-color-border-default);
  border-radius: var(--preview-border-radius-lg);
  box-shadow: var(--preview-shadow-sm);
}

.themed .post-card:hover {
  box-shadow: var(--preview-shadow-lg);
  border-color: var(--preview-color-accent);
}

.themed .post-category {
  color: var(--preview-color-accent);
  font-weight: var(--preview-font-weight-bold);
}

.themed .post-title {
  font-weight: var(--preview-font-weight-semibold);
  color: var(--preview-color-text-primary);
}

.themed .post-excerpt {
  color: var(--preview-color-text-secondary);
  line-height: var(--preview-line-height-relaxed);
}

.themed .post-link {
  color: var(--preview-color-primary);
  font-weight: var(--preview-font-weight-semibold);
}

.themed .post-link:hover {
  color: var(--preview-color-accent);
}

.themed .newsletter-section {
  background: linear-gradient(135deg, var(--preview-color-background-secondary), var(--preview-color-background-tertiary));
  border-radius: var(--preview-border-radius-xl);
  border: 1px solid var(--preview-color-border-default);
}

.themed .newsletter-title {
  font-size: var(--preview-font-size-xl);
  font-weight: var(--preview-font-weight-bold);
  color: var(--preview-color-text-primary);
}

.themed .newsletter-text {
  color: var(--preview-color-text-secondary);
}

.themed .email-input {
  border-color: var(--preview-color-border-default);
  border-radius: var(--preview-border-radius-md);
  background-color: var(--preview-color-background-elevated);
  color: var(--preview-color-text-primary);
}

.themed .subscribe-button {
  background-color: var(--preview-color-primary);
  color: var(--preview-color-text-inverse);
  border-radius: var(--preview-border-radius-md);
  font-weight: var(--preview-font-weight-semibold);
  transition: all var(--preview-transition-fast);
}

.themed .subscribe-button:hover {
  background-color: var(--preview-color-accent);
  box-shadow: var(--preview-shadow-md);
}
</style>
