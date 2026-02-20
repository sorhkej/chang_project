/**
 * Theme configuration file defining 7 complete themes
 */

import type { Theme } from '../types/theme';
import { lightDayContent, darkNightContent, oceanBlueContent, forestGreenContent, sunsetOrangeContent, cyberPurpleContent, minimalGrayContent } from './themeContent';
import { lightDayLayoutConfig, darkNightLayoutConfig, oceanBlueLayoutConfig, forestGreenLayoutConfig, sunsetOrangeLayoutConfig, cyberPurpleLayoutConfig, minimalGrayLayoutConfig } from './themeLayouts';

/** Common base spacing scale shared across themes */
const baseSpacing = {
  base: '1rem',
  scale: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    64: '16rem',
  },
};

/** Common base layout settings shared across themes */
const baseLayout = {
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  },
  transition: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '350ms ease',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
};

/** Light Day Typography - Inter */
const lightDayTypography = {
  fontFamily: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'Fira Code', 'Monaco', 'Consolas', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
};

/** Dark Night Typography - Inter */
const darkNightTypography = {
  fontFamily: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'Fira Code', 'Monaco', 'Consolas', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
};

/** Ocean Blue Typography - Quicksand */
const oceanBlueTypography = {
  fontFamily: {
    heading: "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    body: "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'Fira Code', 'Monaco', 'Consolas', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
};

/** Forest Green Typography - Merriweather */
const forestGreenTypography = {
  fontFamily: {
    heading: "'Merriweather', Georgia, 'Times New Roman', serif",
    body: "'Merriweather', Georgia, 'Times New Roman', serif",
    mono: "'Fira Code', 'Monaco', 'Consolas', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
};

/** Sunset Orange Typography - Poppins */
const sunsetOrangeTypography = {
  fontFamily: {
    heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    body: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'Fira Code', 'Monaco', 'Consolas', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
};

/** Cyber Purple Typography - JetBrains Mono */
const cyberPurpleTypography = {
  fontFamily: {
    heading: "'JetBrains Mono', 'Monaco', 'Consolas', monospace",
    body: "'JetBrains Mono', 'Monaco', 'Consolas', monospace",
    mono: "'JetBrains Mono', 'Monaco', 'Consolas', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
};

/** Minimal Gray Typography - Source Sans Pro */
const minimalGrayTypography = {
  fontFamily: {
    heading: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    body: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'Fira Code', 'Monaco', 'Consolas', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
};

/**
 * Light Day Theme - Modern light theme for daily use
 */
export const lightDayTheme: Theme = {
  id: 'light-day',
  name: 'Light Day',
  description: 'A clean and modern light theme for everyday use',
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#f59e0b',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4',
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6',
      elevated: '#ffffff',
      overlay: 'rgba(0, 0, 0, 0.5).',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#6b7280',
      tertiary: '#9ca3af',
      disabled: '#d1d5db',
      inverse: '#ffffff',
    },
    border: {
      default: '#e5e7eb',
      subtle: '#f3f4f6',
      strong: '#d1d5db',
    },
  },
  typography: lightDayTypography,
  spacing: baseSpacing,
  layout: baseLayout,
  content: lightDayContent,
  layoutConfig: lightDayLayoutConfig,
  fontConfig: {
    family: 'Inter',
    weights: [400, 500, 600, 700],
    subsets: ['latin', 'latin-ext'],
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'swap',
  },
};

/**
 * Dark Night Theme - High contrast dark theme
 */
export const darkNightTheme: Theme = {
  id: 'dark-night',
  name: 'Dark Night',
  description: 'A high contrast dark theme for nighttime use',
  colors: {
    primary: '#60a5fa',
    secondary: '#a78bfa',
    accent: '#fbbf24',
    success: '#34d399',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#22d3ee',
    background: {
      primary: '#0a0e27',
      secondary: '#151932',
      tertiary: '#1a1f3a',
      elevated: '#1f2544',
      overlay: 'rgba(0, 0, 0, 0.7).',
    },
    text: {
      primary: '#e4e9ff',
      secondary: '#a0a8c4',
      tertiary: '#6b7289',
      disabled: '#4a5066',
      inverse: '#0a0e27',
    },
    border: {
      default: '#2a3060',
      subtle: '#1f2544',
      strong: '#3a4070',
    },
  },
  typography: darkNightTypography,
  spacing: baseSpacing,
  layout: baseLayout,
  content: darkNightContent,
  layoutConfig: darkNightLayoutConfig,
  fontConfig: {
    family: 'Inter',
    weights: [400, 500, 600, 700],
    subsets: ['latin', 'latin-ext'],
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'swap',
  },
};

/**
 * Ocean Blue Theme - Calming blue theme
 */
export const oceanBlueTheme: Theme = {
  id: 'ocean-blue',
  name: 'Ocean Blue',
  description: 'A calming blue theme inspired by the ocean',
  colors: {
    primary: '#0284c7',
    secondary: '#0ea5e9',
    accent: '#38bdf8',
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626',
    info: '#0891b2',
    background: {
      primary: '#f0f7ff',
      secondary: '#e0f2fe',
      tertiary: '#bae6fd',
      elevated: '#ffffff',
      overlay: 'rgba(2, 132, 199, 0.3).',
    },
    text: {
      primary: '#0c2340',
      secondary: '#0c4a6e',
      tertiary: '#075985',
      disabled: '#9ca3af',
      inverse: '#ffffff',
    },
    border: {
      default: '#bae6fd',
      subtle: '#e0f2fe',
      strong: '#7dd3fc',
    },
  },
  typography: oceanBlueTypography,
  spacing: baseSpacing,
  layout: baseLayout,
  content: oceanBlueContent,
  layoutConfig: oceanBlueLayoutConfig,
  fontConfig: {
    family: 'Quicksand',
    weights: [400, 500, 600, 700],
    subsets: ['latin', 'latin-ext'],
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'swap',
  },
};

/**
 * Forest Green Theme - Natural green theme
 */
export const forestGreenTheme: Theme = {
  id: 'forest-green',
  name: 'Forest Green',
  description: 'A natural green theme inspired by the forest',
  colors: {
    primary: '#16a34a',
    secondary: '#22c55e',
    accent: '#4ade80',
    success: '#15803d',
    warning: '#ca8a04',
    error: '#b91c1c',
    info: '#047857',
    background: {
      primary: '#f7fcf7',
      secondary: '#f0fdf4',
      tertiary: '#dcfce7',
      elevated: '#ffffff',
      overlay: 'rgba(22, 163, 74, 0.3).',
    },
    text: {
      primary: '#0a1f0a',
      secondary: '#14532d',
      tertiary: '#166534',
      disabled: '#9ca3af',
      inverse: '#ffffff',
    },
    border: {
      default: '#dcfce7',
      subtle: '#f0fdf4',
      strong: '#86efac',
    },
  },
  typography: forestGreenTypography,
  spacing: baseSpacing,
  layout: baseLayout,
  content: forestGreenContent,
  layoutConfig: forestGreenLayoutConfig,
  fontConfig: {
    family: 'Merriweather',
    weights: [300, 400, 700],
    subsets: ['latin', 'latin-ext'],
    fallback: 'Georgia, "Times New Roman", serif',
    display: 'swap',
  },
};

/**
 * Sunset Orange Theme - Warm orange theme
 */
export const sunsetOrangeTheme: Theme = {
  id: 'sunset-orange',
  name: 'Sunset Orange',
  description: 'A warm and vibrant orange theme',
  colors: {
    primary: '#ea580c',
    secondary: '#f97316',
    accent: '#fb923c',
    success: '#16a34a',
    warning: '#ca8a04',
    error: '#dc2626',
    info: '#0891b2',
    background: {
      primary: '#fffbf5',
      secondary: '#fff7ed',
      tertiary: '#ffedd5',
      elevated: '#ffffff',
      overlay: 'rgba(234, 88, 12, 0.3).',
    },
    text: {
      primary: '#1a0a00',
      secondary: '#431407',
      tertiary: '#7c2d12',
      disabled: '#9ca3af',
      inverse: '#ffffff',
    },
    border: {
      default: '#ffedd5',
      subtle: '#fff7ed',
      strong: '#fdba74',
    },
  },
  typography: sunsetOrangeTypography,
  spacing: baseSpacing,
  layout: baseLayout,
  content: sunsetOrangeContent,
  layoutConfig: sunsetOrangeLayoutConfig,
  fontConfig: {
    family: 'Poppins',
    weights: [400, 500, 600, 700],
    subsets: ['latin', 'latin-ext'],
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'swap',
  },
};

/**
 * Cyber Purple Theme - Futuristic purple theme
 */
export const cyberPurpleTheme: Theme = {
  id: 'cyber-purple',
  name: 'Cyber Purple',
  description: 'A futuristic purple theme with neon accents',
  colors: {
    primary: '#a855f7',
    secondary: '#d946ef',
    accent: '#e879f9',
    success: '#22c55e',
    warning: '#eab308',
    error: '#ef4444',
    info: '#06b6d4',
    background: {
      primary: '#1a0a2e',
      secondary: '#2d1b4e',
      tertiary: '#3d2b5e',
      elevated: '#4d3b6e',
      overlay: 'rgba(26, 10, 46, 0.8).',
    },
    text: {
      primary: '#f0e6ff',
      secondary: '#d4c4fc',
      tertiary: '#b8a2e0',
      disabled: '#7c6a9c',
      inverse: '#1a0a2e',
    },
    border: {
      default: '#4d3b6e',
      subtle: '#3d2b5e',
      strong: '#6d5b8e',
    },
  },
  typography: cyberPurpleTypography,
  spacing: baseSpacing,
  layout: baseLayout,
  content: cyberPurpleContent,
  layoutConfig: cyberPurpleLayoutConfig,
  fontConfig: {
    family: 'JetBrains Mono',
    weights: [400, 500],
    subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
    fallback: '"Monaco", "Consolas", monospace',
    display: 'swap',
  },
};

/**
 * Minimal Gray Theme - Professional gray theme
 */
export const minimalGrayTheme: Theme = {
  id: 'minimal-gray',
  name: 'Minimal Gray',
  description: 'A professional minimal gray theme',
  colors: {
    primary: '#4b5563',
    secondary: '#6b7280',
    accent: '#9ca3af',
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626',
    info: '#0891b2',
    background: {
      primary: '#f8f9fa',
      secondary: '#e9ecef',
      tertiary: '#dee2e6',
      elevated: '#ffffff',
      overlay: 'rgba(0, 0, 0, 0.4).',
    },
    text: {
      primary: '#212529',
      secondary: '#495057',
      tertiary: '#6c757d',
      disabled: '#adb5bd',
      inverse: '#ffffff',
    },
    border: {
      default: '#dee2e6',
      subtle: '#e9ecef',
      strong: '#adb5bd',
    },
  },
  typography: minimalGrayTypography,
  spacing: baseSpacing,
  layout: baseLayout,
  content: minimalGrayContent,
  layoutConfig: minimalGrayLayoutConfig,
  fontConfig: {
    family: 'Source Sans Pro',
    weights: [400, 600, 700],
    subsets: ['latin', 'latin-ext'],
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'swap',
  },
};

/**
 * All available themes
 */
export const themes: Theme[] = [
  lightDayTheme,
  darkNightTheme,
  oceanBlueTheme,
  forestGreenTheme,
  sunsetOrangeTheme,
  cyberPurpleTheme,
  minimalGrayTheme,
];

/**
 * Theme lookup map for quick access
 */
export const themeMap = new Map(themes.map((theme) => [theme.id, theme]));

/**
 * Default theme ID
 */
export const DEFAULT_THEME_ID = 'light-day';

/**
 * Get theme by ID
 */
export function getThemeById(id: string): Theme | undefined {
  return themeMap.get(id);
}

/**
 * Get default theme
 */
export function getDefaultTheme(): Theme {
  return getThemeById(DEFAULT_THEME_ID) || lightDayTheme;
}
