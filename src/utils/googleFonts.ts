/**
 * Google Fonts utility for dynamic font loading
 */

import type { ThemeFontConfig } from '../types/theme';

/** Cache for loaded fonts to prevent duplicate requests */
const loadedFonts = new Set<string>();

/** Google Fonts base URL */
const GOOGLE_FONTS_BASE_URL = 'https://fonts.googleapis.com/css2';

/**
 * Generate Google Fonts URL for a given font configuration
 */
export function generateGoogleFontsUrl(config: ThemeFontConfig): string {
  const { family, weights, subsets, display = 'swap' } = config;

  // Build font specification: family:weights@subset
  const weightsStr = weights.join(',');
  const subsetsStr = subsets.join(',');
  const fontSpec = `${family}:${weightsStr}@${subsetsStr}`;

  // Build query parameters
  const params = new URLSearchParams({
    family: fontSpec,
    display: display,
  });

  return `${GOOGLE_FONTS_BASE_URL}?${params.toString()}`;
}

/**
 * Load a Google Font dynamically
 */
export async function loadGoogleFont(config: ThemeFontConfig): Promise<boolean> {
  const { family } = config;
  const cacheKey = `${family}-${config.weights.join('-')}`;

  // Skip if already loaded
  if (loadedFonts.has(cacheKey)) {
    return true;
  }

  return new Promise((resolve) => {
    // Check if font is already available in the browser
    if (document.fonts?.check) {
      const testString = `${weightsToCssString(config.weights)} 1em ${family}`;
      if (document.fonts.check(testString, 'A')) {
        loadedFonts.add(cacheKey);
        resolve(true);
        return;
      }
    }

    // Create and insert link element
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = generateGoogleFontsUrl(config);

    link.onload = () => {
      loadedFonts.add(cacheKey);
      resolve(true);
    };

    link.onerror = () => {
      console.error(`Failed to load font: ${family}`);
      resolve(false);
    };

    document.head.appendChild(link);
  });
}

/**
 * Convert font weights array to CSS string for font checking
 */
function weightsToCssString(weights: number[]): string {
  return weights.map(w => `${w}`).join(', ');
}

/**
 * Preload multiple Google Fonts
 */
export async function loadGoogleFonts(configs: ThemeFontConfig[]): Promise<boolean[]> {
  const promises = configs.map(config => loadGoogleFont(config));
  return Promise.all(promises);
}

/**
 * Get font CSS string for theme application
 */
export function getFontFamilyCss(fontFamily: string, fallback: string): string {
  return `'${fontFamily}', ${fallback}`;
}

/**
 * Check if a specific font is loaded and available
 */
export function isFontLoaded(family: string, weight: number = 400): boolean {
  if (!document.fonts) {
    return false;
  }

  try {
    return document.fonts.check(`${weight} 1em "${family}"`, 'A');
  } catch {
    return false;
  }
}

/**
 * Wait for fonts to be loaded before executing a callback
 */
export async function waitForFonts(
  families: string[],
  timeout: number = 3000
): Promise<boolean> {
  const startTime = Date.now();

  return new Promise((resolve) => {
    const checkFonts = () => {
      const allLoaded = families.every(family => isFontLoaded(family));

      if (allLoaded) {
        resolve(true);
        return;
      }

      if (Date.now() - startTime > timeout) {
        console.warn('Font loading timeout');
        resolve(false);
        return;
      }

      // Check again in 50ms
      setTimeout(checkFonts, 50);
    };

    checkFonts();
  });
}
