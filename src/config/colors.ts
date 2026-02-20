/**
 * Color scheme configurations for the style preview tool
 *
 * Extracted color palettes from existing themes.
 * Each color scheme defines the complete color system for a theme.
 */

import type { ColorScheme } from '../types/preview';
import { lightDayTheme, darkNightTheme, oceanBlueTheme, forestGreenTheme, sunsetOrangeTheme, cyberPurpleTheme, minimalGrayTheme } from './themes';

/**
 * Light Day Color Scheme
 * Clean and modern light theme for everyday use
 */
export const lightDayColorScheme: ColorScheme = {
  id: 'light-day',
  name: 'Light Day',
  description: 'A clean and modern light theme for everyday use',
  colors: lightDayTheme.colors,
  category: 'light',
  preview: {
    primary: lightDayTheme.colors.primary,
    background: lightDayTheme.colors.background.primary,
  },
};

/**
 * Dark Night Color Scheme
 * High contrast dark theme for nighttime use
 */
export const darkNightColorScheme: ColorScheme = {
  id: 'dark-night',
  name: 'Dark Night',
  description: 'A high contrast dark theme for nighttime use',
  colors: darkNightTheme.colors,
  category: 'dark',
  preview: {
    primary: darkNightTheme.colors.primary,
    background: darkNightTheme.colors.background.primary,
  },
};

/**
 * Ocean Blue Color Scheme
 * Calming blue theme inspired by the ocean
 */
export const oceanBlueColorScheme: ColorScheme = {
  id: 'ocean-blue',
  name: 'Ocean Blue',
  description: 'A calming blue theme inspired by the ocean',
  colors: oceanBlueTheme.colors,
  category: 'light',
  preview: {
    primary: oceanBlueTheme.colors.primary,
    background: oceanBlueTheme.colors.background.primary,
  },
};

/**
 * Forest Green Color Scheme
 * Natural green theme inspired by the forest
 */
export const forestGreenColorScheme: ColorScheme = {
  id: 'forest-green',
  name: 'Forest Green',
  description: 'A natural green theme inspired by the forest',
  colors: forestGreenTheme.colors,
  category: 'light',
  preview: {
    primary: forestGreenTheme.colors.primary,
    background: forestGreenTheme.colors.background.primary,
  },
};

/**
 * Sunset Orange Color Scheme
 * Warm and vibrant orange theme
 */
export const sunsetOrangeColorScheme: ColorScheme = {
  id: 'sunset-orange',
  name: 'Sunset Orange',
  description: 'A warm and vibrant orange theme',
  colors: sunsetOrangeTheme.colors,
  category: 'light',
  preview: {
    primary: sunsetOrangeTheme.colors.primary,
    background: sunsetOrangeTheme.colors.background.primary,
  },
};

/**
 * Cyber Purple Color Scheme
 * Futuristic purple theme with neon accents
 */
export const cyberPurpleColorScheme: ColorScheme = {
  id: 'cyber-purple',
  name: 'Cyber Purple',
  description: 'A futuristic purple theme with neon accents',
  colors: cyberPurpleTheme.colors,
  category: 'dark',
  preview: {
    primary: cyberPurpleTheme.colors.primary,
    background: cyberPurpleTheme.colors.background.primary,
  },
};

/**
 * Minimal Gray Color Scheme
 * Professional minimal gray theme
 */
export const minimalGrayColorScheme: ColorScheme = {
  id: 'minimal-gray',
  name: 'Minimal Gray',
  description: 'A professional minimal gray theme',
  colors: minimalGrayTheme.colors,
  category: 'light',
  preview: {
    primary: minimalGrayTheme.colors.primary,
    background: minimalGrayTheme.colors.background.primary,
  },
};

/**
 * All available color schemes
 */
export const colorSchemes: ColorScheme[] = [
  lightDayColorScheme,
  darkNightColorScheme,
  oceanBlueColorScheme,
  forestGreenColorScheme,
  sunsetOrangeColorScheme,
  cyberPurpleColorScheme,
  minimalGrayColorScheme,
];

/**
 * Color scheme lookup map for quick access
 */
export const colorSchemeMap = new Map(colorSchemes.map((scheme) => [scheme.id, scheme]));

/**
 * Get color scheme by ID
 */
export function getColorSchemeById(id: string): ColorScheme | undefined {
  return colorSchemeMap.get(id);
}

/**
 * Get default color scheme
 */
export function getDefaultColorScheme(): ColorScheme {
  return lightDayColorScheme;
}
