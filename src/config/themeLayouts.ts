/**
 * Theme layout configuration
 * Each theme has a unique layout pattern, grid settings, and component ordering
 */

import type { ThemeLayoutConfig } from '../types/theme';

/** Light Day Theme - Card Grid Layout */
export const lightDayLayoutConfig: ThemeLayoutConfig = {
  pattern: 'card-grid',
  grid: {
    columns: 3,
    gap: '1.5rem',
    minItemWidth: '280px',
    pattern: 'uniform',
  },
  components: {
    showHero: true,
    showFeatures: true,
    showExamples: true,
    showColorPalette: true,
    showTypography: true,
    featurePosition: 'before',
  },
  customClasses: {
    container: 'light-day-container',
    section: 'light-day-section',
    card: 'light-day-card',
  },
};

/** Dark Night Theme - Vertical List Layout */
export const darkNightLayoutConfig: ThemeLayoutConfig = {
  pattern: 'vertical-list',
  grid: {
    columns: 1,
    gap: '1rem',
    pattern: 'uniform',
  },
  components: {
    showHero: true,
    showFeatures: true,
    showExamples: true,
    showColorPalette: false,
    showTypography: true,
    featurePosition: 'integrated',
  },
  customClasses: {
    container: 'dark-night-container',
    section: 'dark-night-section',
    card: 'dark-night-card',
  },
};

/** Ocean Blue Theme - Masonry Layout */
export const oceanBlueLayoutConfig: ThemeLayoutConfig = {
  pattern: 'masonry',
  grid: {
    columns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    minItemWidth: '250px',
    pattern: 'masonry',
  },
  components: {
    showHero: true,
    showFeatures: true,
    showExamples: true,
    showColorPalette: true,
    showTypography: false,
    featurePosition: 'after',
  },
  customClasses: {
    container: 'ocean-blue-container',
    section: 'ocean-blue-section',
    card: 'ocean-blue-card',
  },
};

/** Forest Green Theme - Bento Box Layout */
export const forestGreenLayoutConfig: ThemeLayoutConfig = {
  pattern: 'bento-box',
  grid: {
    columns: 'repeat(4, 1fr)',
    gap: '1.5rem',
    minItemWidth: '200px',
    pattern: 'bento',
  },
  components: {
    showHero: true,
    showFeatures: true,
    showExamples: true,
    showColorPalette: false,
    showTypography: true,
    featurePosition: 'before',
  },
  customClasses: {
    container: 'forest-green-container',
    section: 'forest-green-section',
    card: 'forest-green-card',
  },
};

/** Sunset Orange Theme - Horizontal Scroll Layout */
export const sunsetOrangeLayoutConfig: ThemeLayoutConfig = {
  pattern: 'horizontal-scroll',
  grid: {
    columns: 'auto',
    gap: '2rem',
    minItemWidth: '300px',
    pattern: 'uniform',
  },
  components: {
    showHero: true,
    showFeatures: true,
    showExamples: true,
    showColorPalette: true,
    showTypography: false,
    featurePosition: 'integrated',
  },
  customClasses: {
    container: 'sunset-orange-container',
    section: 'sunset-orange-section',
    card: 'sunset-orange-card',
  },
};

/** Cyber Purple Theme - Compact List Layout */
export const cyberPurpleLayoutConfig: ThemeLayoutConfig = {
  pattern: 'compact-list',
  grid: {
    columns: 1,
    gap: '0.5rem',
    pattern: 'uniform',
  },
  components: {
    showHero: true,
    showFeatures: true,
    showExamples: true,
    showColorPalette: true,
    showTypography: true,
    featurePosition: 'after',
  },
  customClasses: {
    container: 'cyber-purple-container',
    section: 'cyber-purple-section',
    card: 'cyber-purple-card',
  },
};

/** Minimal Gray Theme - Card Grid Layout (Clean) */
export const minimalGrayLayoutConfig: ThemeLayoutConfig = {
  pattern: 'card-grid',
  grid: {
    columns: 2,
    gap: '1rem',
    minItemWidth: '300px',
    pattern: 'uniform',
  },
  components: {
    showHero: true,
    showFeatures: false,
    showExamples: true,
    showColorPalette: false,
    showTypography: true,
    featurePosition: 'before',
  },
  customClasses: {
    container: 'minimal-gray-container',
    section: 'minimal-gray-section',
    card: 'minimal-gray-card',
  },
};

/** Map theme IDs to their layout configurations */
export const themeLayoutMap: Record<string, ThemeLayoutConfig> = {
  'light-day': lightDayLayoutConfig,
  'dark-night': darkNightLayoutConfig,
  'ocean-blue': oceanBlueLayoutConfig,
  'forest-green': forestGreenLayoutConfig,
  'sunset-orange': sunsetOrangeLayoutConfig,
  'cyber-purple': cyberPurpleLayoutConfig,
  'minimal-gray': minimalGrayLayoutConfig,
};

/**
 * Get theme layout config by ID
 */
export function getThemeLayoutConfig(themeId: string): ThemeLayoutConfig | undefined {
  return themeLayoutMap[themeId];
}

/**
 * Get default layout config fallback
 */
export function getDefaultLayoutConfig(): ThemeLayoutConfig {
  return lightDayLayoutConfig;
}
