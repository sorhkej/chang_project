/**
 * Theme type definitions for the Vue Theme Switcher system
 */

export interface ThemeColors {
  /** Primary brand color */
  primary: string;
  /** Secondary brand color */
  secondary: string;
  /** Accent color for highlights */
  accent: string;
  /** Success state color */
  success: string;
  /** Warning state color */
  warning: string;
  /** Error state color */
  error: string;
  /** Information state color */
  info: string;
  /** Background color palette */
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    elevated: string;
    overlay: string;
  };
  /** Text color palette */
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    inverse: string;
  };
  /** Border color palette */
  border: {
    default: string;
    subtle: string;
    strong: string;
  };
}

export interface ThemeTypography {
  /** Font family definitions */
  fontFamily: {
    heading: string;
    body: string;
    mono: string;
  };
  /** Font size scale */
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  /** Font weight definitions */
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  /** Line height scale */
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
  /** Letter spacing definitions */
  letterSpacing: {
    tight: string;
    normal: string;
    wide: string;
  };
}

export interface ThemeSpacing {
  /** Base spacing unit */
  base: string;
  /** Spacing scale (0-64) */
  scale: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    8: string;
    10: string;
    12: string;
    16: string;
    20: string;
    24: string;
    32: string;
    40: string;
    48: string;
    64: string;
  };
}

export interface ThemeLayout {
  /** Border radius scale */
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  /** Shadow definitions */
  shadow: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  /** Transition durations */
  transition: {
    fast: string;
    normal: string;
    slow: string;
  };
  /** Z-index scale */
  zIndex: {
    dropdown: number;
    sticky: number;
    fixed: number;
    modal: number;
    popover: number;
    tooltip: number;
  };
}

/**
 * Complete theme definition
 */
export interface Theme {
  /** Unique theme identifier */
  id: string;
  /** Display name */
  name: string;
  /** Theme description */
  description: string;
  /** Color palette */
  colors: ThemeColors;
  /** Typography settings */
  typography: ThemeTypography;
  /** Spacing scale */
  spacing: ThemeSpacing;
  /** Layout settings */
  layout: ThemeLayout;
  /** Theme exclusive content */
  content?: ThemeContent;
  /** Theme layout configuration */
  layoutConfig?: ThemeLayoutConfig;
  /** Font configuration */
  fontConfig?: ThemeFontConfig;
}

/**
 * Theme category for UI organization
 */
export type ThemeCategory = 'light' | 'dark' | 'colorful';

/**
 * Theme metadata for UI display
 */
export interface ThemeMeta {
  id: string;
  name: string;
  description: string;
  category: ThemeCategory;
  preview: {
    primary: string;
    background: string;
  };
}

/** Theme exclusive content */
export interface ThemeContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    callToAction?: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  examples: Array<{
    title: string;
    code?: string;
    text?: string;
    language?: string;
  }>;
  tagline: string;
  useCases: string[];
}

/** Layout pattern type */
export type LayoutPattern =
  | 'card-grid'
  | 'masonry'
  | 'vertical-list'
  | 'horizontal-scroll'
  | 'bento-box'
  | 'compact-list';

/** Grid configuration */
export interface GridConfig {
  columns: number | string;
  gap: string;
  minItemWidth?: string;
  pattern?: 'uniform' | 'masonry' | 'bento';
}

/** Component display and ordering */
export interface ComponentOrder {
  showHero: boolean;
  showFeatures: boolean;
  showExamples: boolean;
  showColorPalette: boolean;
  showTypography: boolean;
  featurePosition: 'before' | 'after' | 'integrated';
}

/** Theme layout configuration */
export interface ThemeLayoutConfig {
  pattern: LayoutPattern;
  grid: GridConfig;
  components: ComponentOrder;
  customClasses?: {
    container?: string;
    section?: string;
    card?: string;
  };
}

/** Google Fonts configuration */
export interface ThemeFontConfig {
  family: string;
  weights: number[];
  subsets: string[];
  fallback: string;
  display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
}

// Re-export scenario type for convenience
export type { ScenarioType } from './scenario';
