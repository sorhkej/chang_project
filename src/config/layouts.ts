/**
 * Layout configurations for the style preview tool
 *
 * Extracted layout patterns from existing themes.
 * Each layout defines how content is arranged on the page.
 */

import type { LayoutConfig } from '../types/preview';
import {
  lightDayLayoutConfig,
  darkNightLayoutConfig,
  oceanBlueLayoutConfig,
  forestGreenLayoutConfig,
  sunsetOrangeLayoutConfig,
  cyberPurpleLayoutConfig,
} from './themeLayouts';

/**
 * Card Grid Layout
 * Classic 3-column grid layout with evenly sized cards
 */
export const cardGridLayoutConfig: LayoutConfig = {
  id: 'card-grid',
  name: 'Card Grid',
  description: 'Classic 3-column grid layout with evenly sized cards',
  config: lightDayLayoutConfig,
};

/**
 * Masonry Layout
 * Pinterest-style masonry layout with cards of varying heights
 */
export const masonryLayoutConfig: LayoutConfig = {
  id: 'masonry',
  name: 'Masonry',
  description: 'Pinterest-style masonry layout with responsive columns',
  config: oceanBlueLayoutConfig,
};

/**
 * Vertical List Layout
 * Single column vertical stack for focused reading
 */
export const verticalListLayoutConfig: LayoutConfig = {
  id: 'vertical-list',
  name: 'Vertical List',
  description: 'Single column vertical stack for focused reading',
  config: darkNightLayoutConfig,
};

/**
 * Horizontal Scroll Layout
 * Horizontal scrolling container for cards
 */
export const horizontalScrollLayoutConfig: LayoutConfig = {
  id: 'horizontal-scroll',
  name: 'Horizontal Scroll',
  description: 'Horizontal scrolling layout for carousel-style navigation',
  config: sunsetOrangeLayoutConfig,
};

/**
 * Bento Box Layout
 * 4-column grid with flexible card sizing (bento box style)
 */
export const bentoBoxLayoutConfig: LayoutConfig = {
  id: 'bento-box',
  name: 'Bento Box',
  description: '4-column bento grid with flexible card sizing',
  config: forestGreenLayoutConfig,
};

/**
 * Compact List Layout
 * Densely packed single column list for maximum content density
 */
export const compactListLayoutConfig: LayoutConfig = {
  id: 'compact-list',
  name: 'Compact List',
  description: 'Densely packed single column for maximum content density',
  config: cyberPurpleLayoutConfig,
};

/**
 * All available layout configurations
 */
export const layoutConfigs: LayoutConfig[] = [
  cardGridLayoutConfig,
  masonryLayoutConfig,
  verticalListLayoutConfig,
  horizontalScrollLayoutConfig,
  bentoBoxLayoutConfig,
  compactListLayoutConfig,
];

/**
 * Layout lookup map for quick access
 */
export const layoutConfigMap = new Map(layoutConfigs.map((layout) => [layout.id, layout]));

/**
 * Get layout config by ID
 */
export function getLayoutConfigById(id: string): LayoutConfig | undefined {
  return layoutConfigMap.get(id as any);
}

/**
 * Get default layout config
 */
export function getDefaultLayoutConfig(): LayoutConfig {
  return cardGridLayoutConfig;
}
