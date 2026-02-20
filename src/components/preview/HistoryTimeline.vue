<template>
  <div class="history-timeline">
    <div class="timeline-header">
      <h4>History</h4>
      <button
        v-if="history.length > 0"
        class="clear-button"
        @click="$emit('clear')"
      >
        Clear All
      </button>
    </div>

    <div v-if="history.length === 0" class="timeline-empty">
      <span class="empty-icon">📋</span>
      <p>No history yet</p>
      <small>Generate a preview to see it here</small>
    </div>

    <div v-else class="timeline-entries">
      <div
        v-for="entry in history"
        :key="entry.id"
        class="timeline-entry"
        @click="$emit('restore', entry)"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="entry-time">{{ formatTime(entry.timestamp) }}</div>
          <div class="entry-details">
            <span class="entry-detail">{{ getLayoutName(entry.layout) }}</span>
            <span class="entry-separator">+</span>
            <span class="entry-detail">{{ getColorName(entry.color) }}</span>
            <span class="entry-separator">+</span>
            <span class="entry-detail">{{ getFontName(entry.font) }}</span>
          </div>
        </div>
        <div class="entry-action">
          <span class="restore-icon">↺</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * HistoryTimeline Component
 *
 * Displays a vertical timeline of style selection history.
 * Users can click any entry to restore that configuration.
 */

import type { StyleHistoryEntry } from '../../types/preview';
import { layoutConfigs } from '../../config/layouts';
import { colorSchemes } from '../../config/colors';
import { fontSchemes } from '../../config/fonts';

interface Props {
  history: StyleHistoryEntry[];
}

defineProps<Props>();

defineEmits<{
  (e: 'restore', entry: StyleHistoryEntry): void;
  (e: 'clear'): void;
}>();

/** Format timestamp to readable time */
function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  // Less than 1 minute
  if (diff < 60000) {
    return 'Just now';
  }

  // Less than 1 hour
  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes}m ago`;
  }

  // Less than 1 day
  if (diff < 86400000) {
    const hours = Math.floor(diff / 3600000);
    return `${hours}h ago`;
  }

  // More than 1 day, show date
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  return `${month} ${day}`;
}

/** Get layout name by ID */
function getLayoutName(id: string): string {
  const layout = layoutConfigs.find(l => l.id === id);
  return layout?.name || id;
}

/** Get color scheme name by ID */
function getColorName(id: string): string {
  const scheme = colorSchemes.find(c => c.id === id);
  return scheme?.name || id;
}

/** Get font scheme name by ID */
function getFontName(id: string): string {
  const scheme = fontSchemes.find(f => f.id === id);
  return scheme?.name || id;
}
</script>

<style scoped>
.history-timeline {
  max-height: 300px;
  overflow-y: auto;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border-default, #e5e7eb);
}

.timeline-header h4 {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-primary, #1f2937);
}

.clear-button {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  color: var(--color-error, #ef4444);
  background-color: transparent;
  border: 1px solid var(--color-border-default, #e5e7eb);
  border-radius: var(--border-radius-sm, 0.25rem);
  cursor: pointer;
  transition: all var(--transition-fast, 150ms ease);
}

.clear-button:hover {
  background-color: var(--color-error, #ef4444);
  color: var(--color-text-inverse, #ffffff);
}

.timeline-empty {
  text-align: center;
  padding: 2rem 1rem;
  color: var(--color-text-tertiary, #9ca3af);
}

.empty-icon {
  display: block;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.timeline-empty p {
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
  font-weight: 500;
}

.timeline-empty small {
  font-size: 0.75rem;
}

.timeline-entries {
  position: relative;
}

.timeline-entry {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background-color: var(--color-background-primary, #ffffff);
  border: 1px solid var(--color-border-default, #e5e7eb);
  border-radius: var(--border-radius-md, 0.5rem);
  cursor: pointer;
  transition: all var(--transition-fast, 150ms ease);
}

.timeline-entry:hover {
  background-color: var(--color-background-secondary, #f3f4f6);
  border-color: var(--color-primary, #3b82f6);
  transform: translateX(4px);
}

.timeline-entry:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 0.75rem;
  top: 2.25rem;
  bottom: -0.75rem;
  width: 2px;
  background-color: var(--color-border-subtle, #f3f4f6);
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-primary, #3b82f6);
  border: 2px solid var(--color-background-primary, #ffffff);
  box-shadow: 0 0 0 2px var(--color-primary, #3b82f6);
  flex-shrink: 0;
  z-index: 1;
}

.timeline-content {
  flex: 1;
  min-width: 0;
}

.entry-time {
  font-size: 0.75rem;
  color: var(--color-text-tertiary, #9ca3af);
  margin-bottom: 0.25rem;
}

.entry-details {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.entry-detail {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary, #1f2937);
}

.entry-separator {
  font-size: 0.75rem;
  color: var(--color-text-tertiary, #9ca3af);
}

.entry-action {
  flex-shrink: 0;
}

.restore-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 0.875rem;
  color: var(--color-primary, #3b82f6);
  background-color: var(--color-background-secondary, #f3f4f6);
  border-radius: var(--border-radius-sm, 0.25rem);
  transition: all var(--transition-fast, 150ms ease);
}

.timeline-entry:hover .restore-icon {
  background-color: var(--color-primary, #3b82f6);
  color: var(--color-text-inverse, #ffffff);
}

/* Scrollbar styling */
.history-timeline::-webkit-scrollbar {
  width: 6px;
}

.history-timeline::-webkit-scrollbar-track {
  background: var(--color-background-secondary, #f3f4f6);
  border-radius: 3px;
}

.history-timeline::-webkit-scrollbar-thumb {
  background: var(--color-border-default, #d1d5db);
  border-radius: 3px;
}

.history-timeline::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-tertiary, #9ca3af);
}

/* Responsive */
@media (max-width: 640px) {
  .history-timeline {
    max-height: 200px;
  }

  .entry-details {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  .entry-separator {
    display: none;
  }
}
</style>
