/**
 * Style Preview Tool Type Definitions
 *
 * Types for the style preview system that allows independent selection of
 * layout, colors, and typography.
 */

import type { ThemeColors, ThemeTypography, ThemeFontConfig, ThemeLayoutConfig, LayoutPattern } from './theme';
import type { ScenarioType } from './scenario';

/**
 * Style preview state
 */
export interface StylePreviewState {
  /** Currently selected layout pattern */
  selectedLayout: LayoutPattern;
  /** Currently selected color scheme (theme ID) */
  selectedColor: string;
  /** Currently selected font scheme (theme ID) */
  selectedFont: string;
  /** Currently selected scenario type */
  selectedScenario: ScenarioType;
  /** Whether preview has been generated */
  isPreviewGenerated: boolean;
  /** History of style selections */
  history: StyleHistoryEntry[];
}

/**
 * Style history entry
 */
export interface StyleHistoryEntry {
  /** Unique entry ID */
  id: string;
  /** Timestamp of entry */
  timestamp: number;
  /** Selected layout pattern */
  layout: LayoutPattern;
  /** Selected color theme ID */
  color: string;
  /** Selected font theme ID */
  font: string;
  /** Selected scenario type */
  scenario: ScenarioType;
}

/**
 * Layout configuration for preview tool
 */
export interface LayoutConfig {
  /** Layout pattern ID */
  id: LayoutPattern;
  /** Display name */
  name: string;
  /** Description */
  description: string;
  /** Layout configuration */
  config: ThemeLayoutConfig;
}

/**
 * Color scheme configuration
 */
export interface ColorScheme {
  /** Unique identifier (theme ID) */
  id: string;
  /** Display name */
  name: string;
  /** Description */
  description: string;
  /** Color palette */
  colors: ThemeColors;
  /** Preview colors */
  preview: {
    primary: string;
    background: string;
  };
  /** Theme category for smart app theme sync */
  category: 'light' | 'dark' | 'colorful';
}

/**
 * Font scheme configuration
 */
export interface FontScheme {
  /** Unique identifier (theme ID) */
  id: string;
  /** Display name */
  name: string;
  /** Description */
  description: string;
  /** Typography settings */
  typography: ThemeTypography;
  /** Font configuration */
  fontConfig: ThemeFontConfig;
}

/**
 * Exported CSS
 */
export interface ExportedCSS {
  /** Layout-specific CSS */
  layoutCSS: string;
  /** Color-specific CSS */
  colorCSS: string;
  /** Font-specific CSS */
  fontCSS: string;
  /** Complete combined CSS */
  fullCSS: string;
}

/**
 * Selector option type
 */
export interface SelectorOption<T = string> {
  /** Option ID */
  id: T;
  /** Display name */
  name: string;
  /** Description */
  description: string;
  /** Preview color (for color schemes) */
  previewColor?: string;
  /** Icon (optional) */
  icon?: string;
}
