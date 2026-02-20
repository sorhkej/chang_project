/**
 * Theme persistence utilities using localStorage
 */

const THEME_STORAGE_KEY = 'theme-preference';

/**
 * Save theme preference to localStorage
 */
export function saveThemePreference(themeId: string): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  } catch (error) {
    console.warn('Failed to save theme preference:', error);
  }
}

/**
 * Load theme preference from localStorage
 */
export function loadThemePreference(): string | null {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    console.warn('Failed to load theme preference:', error);
    return null;
  }
}

/**
 * Clear theme preference from localStorage
 */
export function clearThemePreference(): void {
  try {
    localStorage.removeItem(THEME_STORAGE_KEY);
  } catch (error) {
    console.warn('Failed to clear theme preference:', error);
  }
}

/**
 * Check if theme preference exists
 */
export function hasThemePreference(): boolean {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}
