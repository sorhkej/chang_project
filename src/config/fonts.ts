/**
 * Font scheme configurations for the style preview tool
 *
 * Extracted typography settings from existing themes.
 * Each font scheme defines the typography system for a theme.
 */

import type { FontScheme } from '../types/preview';
import {
  lightDayTheme,
  oceanBlueTheme,
  forestGreenTheme,
  sunsetOrangeTheme,
  cyberPurpleTheme,
  minimalGrayTheme,
} from './themes';

// Base typography for custom fonts
const baseTypography = lightDayTheme.typography;

/**
 * Inter Font Scheme
 * Modern sans-serif font for professional use
 * Used by: Light Day, Dark Night
 */
export const interFontScheme: FontScheme = {
  id: 'inter',
  name: 'Inter',
  description: 'Modern sans-serif font for professional use',
  typography: lightDayTheme.typography,
  fontConfig: lightDayTheme.fontConfig!,
};

/**
 * Quicksand Font Scheme
 * Rounded sans-serif font with friendly appearance
 * Used by: Ocean Blue
 */
export const quicksandFontScheme: FontScheme = {
  id: 'quicksand',
  name: 'Quicksand',
  description: 'Rounded sans-serif font with friendly appearance',
  typography: oceanBlueTheme.typography,
  fontConfig: oceanBlueTheme.fontConfig!,
};

/**
 * Merriweather Font Scheme
 * Classic serif font for elegant and traditional designs
 * Used by: Forest Green
 */
export const merriweatherFontScheme: FontScheme = {
  id: 'merriweather',
  name: 'Merriweather',
  description: 'Classic serif font for elegant and traditional designs',
  typography: forestGreenTheme.typography,
  fontConfig: forestGreenTheme.fontConfig!,
};

/**
 * Poppins Font Scheme
 * Geometric sans-serif font with modern feel
 * Used by: Sunset Orange
 */
export const poppinsFontScheme: FontScheme = {
  id: 'poppins',
  name: 'Poppins',
  description: 'Geometric sans-serif font with modern feel',
  typography: sunsetOrangeTheme.typography,
  fontConfig: sunsetOrangeTheme.fontConfig!,
};

/**
 * JetBrains Mono Font Scheme
 * Monospace font for technical and futuristic designs
 * Used by: Cyber Purple
 */
export const jetbrainsMonoFontScheme: FontScheme = {
  id: 'jetbrains-mono',
  name: 'JetBrains Mono',
  description: 'Monospace font for technical and futuristic designs',
  typography: cyberPurpleTheme.typography,
  fontConfig: cyberPurpleTheme.fontConfig!,
};

/**
 * Source Sans Pro Font Scheme
 * Versatile sans-serif font for clean and neutral designs
 * Used by: Minimal Gray
 */
export const sourceSansProFontScheme: FontScheme = {
  id: 'source-sans-pro',
  name: 'Source Sans Pro',
  description: 'Versatile sans-serif font for clean and neutral designs',
  typography: minimalGrayTheme.typography,
  fontConfig: minimalGrayTheme.fontConfig!,
};

/**
 * Playfair Display Font Scheme
 * Elegant serif font with high contrast
 * Great for headlines and titles
 */
export const playfairDisplayFontScheme: FontScheme = {
  id: 'playfair-display',
  name: 'Playfair Display',
  description: 'Elegant serif font with high contrast for headlines',
  typography: {
    ...baseTypography,
    fontFamily: {
      heading: "'Playfair Display', Georgia, serif",
      body: "'Playfair Display', Georgia, serif",
      mono: "'Fira Code', monospace",
    },
  },
  fontConfig: {
    family: 'Playfair Display',
    weights: [400, 700, 900],
    subsets: ['latin', 'latin-ext'],
    fallback: 'Georgia, serif',
    display: 'swap',
  },
};

/**
 * Roboto Slab Font Scheme
 * Modern slab-serif font with robust structure
 */
export const robotoSlabFontScheme: FontScheme = {
  id: 'roboto-slab',
  name: 'Roboto Slab',
  description: 'Modern slab-serif font with robust structure',
  typography: {
    ...baseTypography,
    fontFamily: {
      heading: "'Roboto Slab', Georgia, serif",
      body: "'Roboto Slab', Georgia, serif",
      mono: "'Fira Code', monospace",
    },
  },
  fontConfig: {
    family: 'Roboto Slab',
    weights: [300, 400, 700],
    subsets: ['latin', 'latin-ext'],
    fallback: 'Georgia, serif',
    display: 'swap',
  },
};

/**
 * Dancing Script Font Scheme
 * Playful handwritten script font
 */
export const dancingScriptFontScheme: FontScheme = {
  id: 'dancing-script',
  name: 'Dancing Script',
  description: 'Playful handwritten script font for creative designs',
  typography: {
    ...baseTypography,
    fontFamily: {
      heading: "'Dancing Script', cursive",
      body: "'Inter', sans-serif",
      mono: "'Fira Code', monospace",
    },
  },
  fontConfig: {
    family: 'Dancing Script',
    weights: [400, 700],
    subsets: ['latin', 'latin-ext'],
    fallback: 'cursive',
    display: 'swap',
  },
};

/**
 * Pacifico Font Scheme
 * Brush script font with artistic flair
 */
export const pacificoFontScheme: FontScheme = {
  id: 'pacifico',
  name: 'Pacifico',
  description: 'Brush script font with artistic flair',
  typography: {
    ...baseTypography,
    fontFamily: {
      heading: "'Pacifico', cursive",
      body: "'Inter', sans-serif",
      mono: "'Fira Code', monospace",
    },
  },
  fontConfig: {
    family: 'Pacifico',
    weights: [400],
    subsets: ['latin', 'latin-ext'],
    fallback: 'cursive',
    display: 'swap',
  },
};

/**
 * Caveat Font Scheme
 * Casual handwritten marker-style font
 */
export const caveatFontScheme: FontScheme = {
  id: 'caveat',
  name: 'Caveat',
  description: 'Casual handwritten marker-style font',
  typography: {
    ...baseTypography,
    fontFamily: {
      heading: "'Caveat', cursive",
      body: "'Caveat', cursive",
      mono: "'Fira Code', monospace",
    },
  },
  fontConfig: {
    family: 'Caveat',
    weights: [400, 700],
    subsets: ['latin', 'latin-ext'],
    fallback: 'cursive',
    display: 'swap',
  },
};

/**
 * Lobster Font Scheme
 * Bold decorative script font
 */
export const lobsterFontScheme: FontScheme = {
  id: 'lobster',
  name: 'Lobster',
  description: 'Bold decorative script font',
  typography: {
    ...baseTypography,
    fontFamily: {
      heading: "'Lobster', cursive",
      body: "'Inter', sans-serif",
      mono: "'Fira Code', monospace",
    },
  },
  fontConfig: {
    family: 'Lobster',
    weights: [400],
    subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
    fallback: 'cursive',
    display: 'swap',
  },
};

/**
 * Orbitron Font Scheme
 * Futuristic sans-serif for sci-fi designs
 */
export const orbitronFontScheme: FontScheme = {
  id: 'orbitron',
  name: 'Orbitron',
  description: 'Futuristic sans-serif for sci-fi designs',
  typography: {
    ...baseTypography,
    fontFamily: {
      heading: "'Orbitron', sans-serif",
      body: "'Orbitron', sans-serif",
      mono: "'Fira Code', monospace",
    },
  },
  fontConfig: {
    family: 'Orbitron',
    weights: [400, 700, 900],
    subsets: ['latin', 'latin-ext'],
    fallback: 'sans-serif',
    display: 'swap',
  },
};

/**
 * Press Start 2P Font Scheme
 * Pixelated retro gaming font
 */
export const pressStart2PFontScheme: FontScheme = {
  id: 'press-start-2p',
  name: 'Press Start 2P',
  description: 'Pixelated retro gaming font',
  typography: {
    ...baseTypography,
    fontFamily: {
      heading: "'Press Start 2P', cursive",
      body: "'Press Start 2P', cursive",
      mono: "'Fira Code', monospace",
    },
  },
  fontConfig: {
    family: 'Press Start 2P',
    weights: [400],
    subsets: ['latin', 'latin-ext'],
    fallback: 'cursive',
    display: 'swap',
  },
};

/**
 * Cinzel Font Scheme
 * Classical Roman-inspired decorative font
 */
export const cinzelFontScheme: FontScheme = {
  id: 'cinzel',
  name: 'Cinzel',
  description: 'Classical Roman-inspired decorative font',
  typography: {
    ...baseTypography,
    fontFamily: {
      heading: "'Cinzel', serif",
      body: "'Cinzel', serif",
      mono: "'Fira Code', monospace",
    },
  },
  fontConfig: {
    family: 'Cinzel',
    weights: [400, 700, 900],
    subsets: ['latin', 'latin-ext'],
    fallback: 'serif',
    display: 'swap',
  },
};

/**
 * Abril Fatface Font Scheme
 * Bold display font with vintage appeal
 */
export const abrilFatfaceFontScheme: FontScheme = {
  id: 'abril-fatface',
  name: 'Abril Fatface',
  description: 'Bold display font with vintage appeal',
  typography: {
    ...baseTypography,
    fontFamily: {
      heading: "'Abril Fatface', cursive",
      body: "'Inter', sans-serif",
      mono: "'Fira Code', monospace",
    },
  },
  fontConfig: {
    family: 'Abril Fatface',
    weights: [400],
    subsets: ['latin', 'latin-ext'],
    fallback: 'cursive',
    display: 'swap',
  },
};

/**
 * All available font schemes
 */
export const fontSchemes: FontScheme[] = [
  interFontScheme,
  quicksandFontScheme,
  merriweatherFontScheme,
  poppinsFontScheme,
  jetbrainsMonoFontScheme,
  sourceSansProFontScheme,
  playfairDisplayFontScheme,
  robotoSlabFontScheme,
  dancingScriptFontScheme,
  pacificoFontScheme,
  caveatFontScheme,
  lobsterFontScheme,
  orbitronFontScheme,
  pressStart2PFontScheme,
  cinzelFontScheme,
  abrilFatfaceFontScheme,
];

/**
 * Font scheme lookup map for quick access
 */
export const fontSchemeMap = new Map(fontSchemes.map((scheme) => [scheme.id, scheme]));

/**
 * Get font scheme by ID
 */
export function getFontSchemeById(id: string): FontScheme | undefined {
  return fontSchemeMap.get(id);
}

/**
 * Get default font scheme
 */
export function getDefaultFontScheme(): FontScheme {
  return interFontScheme;
}

/**
 * Map theme IDs to font scheme IDs
 */
export const themeToFontSchemeMap: Record<string, string> = {
  'light-day': 'inter',
  'dark-night': 'inter',
  'ocean-blue': 'quicksand',
  'forest-green': 'merriweather',
  'sunset-orange': 'poppins',
  'cyber-purple': 'jetbrains-mono',
  'minimal-gray': 'source-sans-pro',
};

/**
 * Get font scheme ID from theme ID
 */
export function getFontSchemeByThemeId(themeId: string): FontScheme | undefined {
  const fontSchemeId = themeToFontSchemeMap[themeId];
  return fontSchemeId ? getFontSchemeById(fontSchemeId) : undefined;
}
