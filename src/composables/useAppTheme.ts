/**
 * Application Theme Composable
 *
 * Manages application-level themes (light/dark) that control the overall app appearance.
 * Separate from preview themes to ensure preview changes don't affect the app UI.
 */

import { ref, computed } from 'vue';
import { appLightTheme, appDarkTheme, type AppTheme } from '../config/appThemes';

// Global app theme state
const currentAppTheme = ref<AppTheme>(appLightTheme);
const autoSyncEnabled = ref(true); // Whether to auto-sync with preview theme selection

const APP_THEME_STORAGE_KEY = 'app-theme';

/**
 * Application theme composable
 */
export function useAppTheme() {
  /**
   * Check if current theme is dark
   */
  const isDark = computed(() => currentAppTheme.value.id === 'dark');

  /**
   * Set the application theme
   * @param themeId - The theme ID ('light' or 'dark')
   */
  function setAppTheme(themeId: 'light' | 'dark') {
    console.log('[AppTheme] setAppTheme called with:', themeId);
    currentAppTheme.value = themeId === 'dark' ? appDarkTheme : appLightTheme;
    applyAppTheme(currentAppTheme.value);
    saveAppThemePreference(themeId);
  }

  /**
   * Apply app theme to DOM (uses app- prefix to avoid conflict with preview themes)
   * Also updates global --color-* variables for backward compatibility
   * @param theme - The app theme to apply
   */
  function applyAppTheme(theme: AppTheme) {
    console.log('[AppTheme] applyAppTheme called for theme:', theme.id, theme.name);
    const root = document.documentElement;
    const colors = theme.colors;

    console.log('[AppTheme] Setting CSS variables...');

    // Apply color variables with app- prefix
    root.style.setProperty('--app-color-primary', colors.primary);
    root.style.setProperty('--app-color-secondary', colors.secondary);
    root.style.setProperty('--app-color-accent', colors.accent);
    root.style.setProperty('--app-color-success', colors.success);
    root.style.setProperty('--app-color-warning', colors.warning);
    root.style.setProperty('--app-color-error', colors.error);
    root.style.setProperty('--app-color-info', colors.info);

    // Background colors (app- prefix)
    root.style.setProperty('--app-color-background-primary', colors.background.primary);
    root.style.setProperty('--app-color-background-secondary', colors.background.secondary);
    root.style.setProperty('--app-color-background-tertiary', colors.background.tertiary);
    root.style.setProperty('--app-color-background-elevated', colors.background.elevated);
    root.style.setProperty('--app-color-background-overlay', colors.background.overlay);

    // Text colors (app- prefix)
    root.style.setProperty('--app-color-text-primary', colors.text.primary);
    root.style.setProperty('--app-color-text-secondary', colors.text.secondary);
    root.style.setProperty('--app-color-text-tertiary', colors.text.tertiary);
    root.style.setProperty('--app-color-text-disabled', colors.text.disabled);
    root.style.setProperty('--app-color-text-inverse', colors.text.inverse);

    // Border colors (app- prefix)
    root.style.setProperty('--app-color-border-default', colors.border.default);
    root.style.setProperty('--app-color-border-subtle', colors.border.subtle);
    root.style.setProperty('--app-color-border-strong', colors.border.strong);

    // Also update global --color-* variables to ensure components use the correct theme
    // These are the variables that most components actually use
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-success', colors.success);
    root.style.setProperty('--color-warning', colors.warning);
    root.style.setProperty('--color-error', colors.error);
    root.style.setProperty('--color-info', colors.info);

    root.style.setProperty('--color-background-primary', colors.background.primary);
    root.style.setProperty('--color-background-secondary', colors.background.secondary);
    root.style.setProperty('--color-background-tertiary', colors.background.tertiary);
    root.style.setProperty('--color-background-elevated', colors.background.elevated);
    root.style.setProperty('--color-background-overlay', colors.background.overlay);

    root.style.setProperty('--color-text-primary', colors.text.primary);
    root.style.setProperty('--color-text-secondary', colors.text.secondary);
    root.style.setProperty('--color-text-tertiary', colors.text.tertiary);
    root.style.setProperty('--color-text-disabled', colors.text.disabled);
    root.style.setProperty('--color-text-inverse', colors.text.inverse);

    root.style.setProperty('--color-border-default', colors.border.default);
    root.style.setProperty('--color-border-subtle', colors.border.subtle);
    root.style.setProperty('--color-border-strong', colors.border.strong);

    console.log('[AppTheme] CSS variables set. Verifying:');
    console.log('[AppTheme] --app-color-background-primary:', root.style.getPropertyValue('--app-color-background-primary'));
    console.log('[AppTheme] --color-background-primary:', root.style.getPropertyValue('--color-background-primary'));
    console.log('[AppTheme] --app-color-text-primary:', root.style.getPropertyValue('--app-color-text-primary'));
    console.log('[AppTheme] --color-text-primary:', root.style.getPropertyValue('--color-text-primary'));
  }

  /**
   * Enable or disable auto-sync with preview theme
   * @param enabled - Whether to enable auto-sync
   */
  function setAutoSync(enabled: boolean) {
    autoSyncEnabled.value = enabled;
  }

  /**
   * Save app theme preference to localStorage
   * @param themeId - The theme ID to save
   */
  function saveAppThemePreference(themeId: 'light' | 'dark') {
    try {
      localStorage.setItem(APP_THEME_STORAGE_KEY, themeId);
    } catch (error) {
      console.warn('Failed to save app theme preference:', error);
    }
  }

  /**
   * Load app theme preference from localStorage
   */
  function loadAppThemePreference(): 'light' | 'dark' | null {
    try {
      const saved = localStorage.getItem(APP_THEME_STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch (error) {
      console.warn('Failed to load app theme preference:', error);
    }
    return null;
  }

  /**
   * Initialize app theme from saved preference
   */
  function initializeAppTheme() {
    console.log('[AppTheme] initializeAppTheme called');
    const savedTheme = loadAppThemePreference();
    console.log('[AppTheme] Saved theme from localStorage:', savedTheme);
    if (savedTheme) {
      setAppTheme(savedTheme);
    } else {
      console.log('[AppTheme] No saved theme, defaulting to light');
      setAppTheme('light'); // Default to light theme
    }
  }

  return {
    // State
    currentAppTheme,
    isDark,
    autoSyncEnabled,

    // Actions
    setAppTheme,
    setAutoSync,
    initializeAppTheme,
  };
}
