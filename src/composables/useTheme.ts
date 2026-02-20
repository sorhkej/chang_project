/**
 * Theme core composable - manages theme state and application
 */

import { ref, computed } from 'vue';
import type { Theme, ThemeLayoutConfig } from '../types/theme';
import { themes, getDefaultTheme, getThemeById } from '../config/themes';
import { saveThemePreference, loadThemePreference } from '../utils/themePersistence';
import { useSystemTheme } from './useSystemTheme';
import { loadGoogleFont } from '../utils/googleFonts';

// Global theme state
const currentTheme = ref<Theme>(getDefaultTheme());
const isInitialized = ref(false);

/**
 * Theme composable - manages theme selection and application
 */
export function useTheme() {
  const { prefersDark } = useSystemTheme();

  /**
   * Get all available themes
   */
  const availableThemes = computed(() => themes);

  /**
   * Get current theme ID
   */
  const currentThemeId = computed(() => currentTheme.value.id);

  /**
   * Apply a theme to the DOM
   */
  function applyTheme(theme: Theme): void {
    const root = document.documentElement;

    // Apply color variables
    applyColorVariables(root, theme.colors);

    // Apply typography variables
    applyTypographyVariables(root, theme.typography);

    // Apply spacing variables
    applySpacingVariables(root, theme.spacing);

    // Apply layout variables
    applyLayoutVariables(root, theme.layout);
  }

  /**
   * Apply a theme to a specific container element (for scoped themes)
   * @param element - The target HTMLElement to apply variables to
   * @param theme - The theme to apply
   * @param prefix - CSS variable prefix (e.g., 'preview-')
   */
  function applyThemeToContainer(element: HTMLElement, theme: Theme, prefix: string = 'preview-'): void {
    // Apply color variables with prefix
    applyColorVariables(element, theme.colors, prefix);

    // Apply typography variables with prefix
    applyTypographyVariables(element, theme.typography, prefix);

    // Apply spacing variables with prefix
    applySpacingVariables(element, theme.spacing, prefix);

    // Apply layout variables with prefix
    applyLayoutVariables(element, theme.layout, prefix);

    // Apply layout config variables with prefix
    if (theme.layoutConfig) {
      applyLayoutConfigVariables(element, theme.layoutConfig, prefix);
    }
  }

  /**
   * Load Google Fonts for a theme
   */
  async function loadThemeFonts(theme: Theme): Promise<void> {
    if (!theme.fontConfig) {
      return;
    }

    try {
      await loadGoogleFont(theme.fontConfig);
    } catch (error) {
      console.warn(`Failed to load font for theme "${theme.id}":`, error);
    }
  }

  /**
   * Apply color CSS variables
   * @param root - The target element
   * @param colors - The color values
   * @param prefix - CSS variable prefix (e.g., 'preview-' or 'app-')
   */
  function applyColorVariables(root: HTMLElement, colors: Theme['colors'], prefix: string = ''): void {
    const varPrefix = prefix ? `--${prefix}` : '--';

    // Brand colors
    root.style.setProperty(`${varPrefix}color-primary`, colors.primary);
    root.style.setProperty(`${varPrefix}color-secondary`, colors.secondary);
    root.style.setProperty(`${varPrefix}color-accent`, colors.accent);
    root.style.setProperty(`${varPrefix}color-success`, colors.success);
    root.style.setProperty(`${varPrefix}color-warning`, colors.warning);
    root.style.setProperty(`${varPrefix}color-error`, colors.error);
    root.style.setProperty(`${varPrefix}color-info`, colors.info);

    // Background colors
    root.style.setProperty(`${varPrefix}color-background-primary`, colors.background.primary);
    root.style.setProperty(`${varPrefix}color-background-secondary`, colors.background.secondary);
    root.style.setProperty(`${varPrefix}color-background-tertiary`, colors.background.tertiary);
    root.style.setProperty(`${varPrefix}color-background-elevated`, colors.background.elevated);
    root.style.setProperty(`${varPrefix}color-background-overlay`, colors.background.overlay);

    // Text colors
    root.style.setProperty(`${varPrefix}color-text-primary`, colors.text.primary);
    root.style.setProperty(`${varPrefix}color-text-secondary`, colors.text.secondary);
    root.style.setProperty(`${varPrefix}color-text-tertiary`, colors.text.tertiary);
    root.style.setProperty(`${varPrefix}color-text-disabled`, colors.text.disabled);
    root.style.setProperty(`${varPrefix}color-text-inverse`, colors.text.inverse);

    // Border colors
    root.style.setProperty(`${varPrefix}color-border-default`, colors.border.default);
    root.style.setProperty(`${varPrefix}color-border-subtle`, colors.border.subtle);
    root.style.setProperty(`${varPrefix}color-border-strong`, colors.border.strong);
  }

  /**
   * Apply typography CSS variables
   * @param root - The target element
   * @param typography - The typography values
   * @param prefix - CSS variable prefix (e.g., 'preview-' or 'app-')
   */
  function applyTypographyVariables(root: HTMLElement, typography: Theme['typography'], prefix: string = ''): void {
    const varPrefix = prefix ? `--${prefix}` : '--';

    // Font families
    root.style.setProperty(`${varPrefix}font-family-heading`, typography.fontFamily.heading);
    root.style.setProperty(`${varPrefix}font-family-body`, typography.fontFamily.body);
    root.style.setProperty(`${varPrefix}font-family-mono`, typography.fontFamily.mono);

    // Font sizes
    root.style.setProperty(`${varPrefix}font-size-xs`, typography.fontSize.xs);
    root.style.setProperty(`${varPrefix}font-size-sm`, typography.fontSize.sm);
    root.style.setProperty(`${varPrefix}font-size-base`, typography.fontSize.base);
    root.style.setProperty(`${varPrefix}font-size-lg`, typography.fontSize.lg);
    root.style.setProperty(`${varPrefix}font-size-xl`, typography.fontSize.xl);
    root.style.setProperty(`${varPrefix}font-size-2xl`, typography.fontSize['2xl']);
    root.style.setProperty(`${varPrefix}font-size-3xl`, typography.fontSize['3xl']);
    root.style.setProperty(`${varPrefix}font-size-4xl`, typography.fontSize['4xl']);

    // Font weights
    root.style.setProperty(`${varPrefix}font-weight-light`, String(typography.fontWeight.light));
    root.style.setProperty(`${varPrefix}font-weight-normal`, String(typography.fontWeight.normal));
    root.style.setProperty(`${varPrefix}font-weight-medium`, String(typography.fontWeight.medium));
    root.style.setProperty(`${varPrefix}font-weight-semibold`, String(typography.fontWeight.semibold));
    root.style.setProperty(`${varPrefix}font-weight-bold`, String(typography.fontWeight.bold));

    // Line heights
    root.style.setProperty(`${varPrefix}line-height-tight`, String(typography.lineHeight.tight));
    root.style.setProperty(`${varPrefix}line-height-normal`, String(typography.lineHeight.normal));
    root.style.setProperty(`${varPrefix}line-height-relaxed`, String(typography.lineHeight.relaxed));

    // Letter spacing
    root.style.setProperty(`${varPrefix}letter-spacing-tight`, typography.letterSpacing.tight);
    root.style.setProperty(`${varPrefix}letter-spacing-normal`, typography.letterSpacing.normal);
    root.style.setProperty(`${varPrefix}letter-spacing-wide`, typography.letterSpacing.wide);
  }

  /**
   * Apply spacing CSS variables
   * @param root - The target element
   * @param spacing - The spacing values
   * @param prefix - CSS variable prefix (e.g., 'preview-' or 'app-')
   */
  function applySpacingVariables(root: HTMLElement, spacing: Theme['spacing'], prefix: string = ''): void {
    const varPrefix = prefix ? `--${prefix}` : '--';

    root.style.setProperty(`${varPrefix}spacing-base`, spacing.base);

    // Spacing scale
    root.style.setProperty(`${varPrefix}spacing-0`, spacing.scale[0]);
    root.style.setProperty(`${varPrefix}spacing-1`, spacing.scale[1]);
    root.style.setProperty(`${varPrefix}spacing-2`, spacing.scale[2]);
    root.style.setProperty(`${varPrefix}spacing-3`, spacing.scale[3]);
    root.style.setProperty(`${varPrefix}spacing-4`, spacing.scale[4]);
    root.style.setProperty(`${varPrefix}spacing-5`, spacing.scale[5]);
    root.style.setProperty(`${varPrefix}spacing-6`, spacing.scale[6]);
    root.style.setProperty(`${varPrefix}spacing-8`, spacing.scale[8]);
    root.style.setProperty(`${varPrefix}spacing-10`, spacing.scale[10]);
    root.style.setProperty(`${varPrefix}spacing-12`, spacing.scale[12]);
    root.style.setProperty(`${varPrefix}spacing-16`, spacing.scale[16]);
    root.style.setProperty(`${varPrefix}spacing-20`, spacing.scale[20]);
    root.style.setProperty(`${varPrefix}spacing-24`, spacing.scale[24]);
    root.style.setProperty(`${varPrefix}spacing-32`, spacing.scale[32]);
    root.style.setProperty(`${varPrefix}spacing-40`, spacing.scale[40]);
    root.style.setProperty(`${varPrefix}spacing-48`, spacing.scale[48]);
    root.style.setProperty(`${varPrefix}spacing-64`, spacing.scale[64]);
  }

  /**
   * Apply layout CSS variables
   * @param root - The target element
   * @param layout - The layout values
   * @param prefix - CSS variable prefix (e.g., 'preview-' or 'app-')
   */
  function applyLayoutVariables(root: HTMLElement, layout: Theme['layout'], prefix: string = ''): void {
    const varPrefix = prefix ? `--${prefix}` : '--';

    // Border radius
    root.style.setProperty(`${varPrefix}border-radius-none`, layout.borderRadius.none);
    root.style.setProperty(`${varPrefix}border-radius-sm`, layout.borderRadius.sm);
    root.style.setProperty(`${varPrefix}border-radius-md`, layout.borderRadius.md);
    root.style.setProperty(`${varPrefix}border-radius-lg`, layout.borderRadius.lg);
    root.style.setProperty(`${varPrefix}border-radius-xl`, layout.borderRadius.xl);
    root.style.setProperty(`${varPrefix}border-radius-full`, layout.borderRadius.full);

    // Shadows
    root.style.setProperty(`${varPrefix}shadow-sm`, layout.shadow.sm);
    root.style.setProperty(`${varPrefix}shadow-md`, layout.shadow.md);
    root.style.setProperty(`${varPrefix}shadow-lg`, layout.shadow.lg);
    root.style.setProperty(`${varPrefix}shadow-xl`, layout.shadow.xl);

    // Transitions
    root.style.setProperty(`${varPrefix}transition-fast`, layout.transition.fast);
    root.style.setProperty(`${varPrefix}transition-normal`, layout.transition.normal);
    root.style.setProperty(`${varPrefix}transition-slow`, layout.transition.slow);

    // Z-index
    root.style.setProperty(`${varPrefix}z-dropdown`, String(layout.zIndex.dropdown));
    root.style.setProperty(`${varPrefix}z-sticky`, String(layout.zIndex.sticky));
    root.style.setProperty(`${varPrefix}z-fixed`, String(layout.zIndex.fixed));
    root.style.setProperty(`${varPrefix}z-modal`, String(layout.zIndex.modal));
    root.style.setProperty(`${varPrefix}z-popover`, String(layout.zIndex.popover));
    root.style.setProperty(`${varPrefix}z-tooltip`, String(layout.zIndex.tooltip));
  }

  /**
   * Apply layout config CSS variables (for dynamic grid layouts)
   * @param root - The target element
   * @param layoutConfig - The layout config values
   * @param prefix - CSS variable prefix (e.g., 'preview-' or 'app-')
   */
  function applyLayoutConfigVariables(root: HTMLElement, layoutConfig: ThemeLayoutConfig, prefix: string = ''): void {
    const varPrefix = prefix ? `--${prefix}` : '--';

    // Grid configuration
    if (layoutConfig.grid) {
      const grid = layoutConfig.grid;
      root.style.setProperty(`${varPrefix}grid-columns`, typeof grid.columns === 'number' ? String(grid.columns) : grid.columns);
      root.style.setProperty(`${varPrefix}grid-gap`, grid.gap);
      if (grid.minItemWidth) {
        root.style.setProperty(`${varPrefix}grid-min-item-width`, grid.minItemWidth);
      }
      if (grid.pattern) {
        root.style.setProperty(`${varPrefix}grid-pattern`, grid.pattern);
      }
    }
  }

  /**
   * Set the current theme by ID
   */
  async function setTheme(themeId: string): Promise<void> {
    const theme = getThemeById(themeId);

    if (!theme) {
      console.warn(`Theme with ID "${themeId}" not found`);
      return;
    }

    // Load fonts before applying theme
    await loadThemeFonts(theme);

    currentTheme.value = theme;
    applyTheme(theme);
    saveThemePreference(themeId);
  }

  /**
   * Initialize theme from saved preference or system preference
   */
  async function initializeTheme(): Promise<void> {
    if (isInitialized.value) return;

    const savedThemeId = loadThemePreference();

    if (savedThemeId) {
      // Use saved theme
      const savedTheme = getThemeById(savedThemeId);
      if (savedTheme) {
        currentTheme.value = savedTheme;
      } else {
        // Fallback to default if saved theme not found
        currentTheme.value = getDefaultTheme();
      }
    } else if (prefersDark.value) {
      // Use system preference
      const darkTheme = getThemeById('dark-night');
      if (darkTheme) {
        currentTheme.value = darkTheme;
      }
    }

    // Load fonts and apply the theme
    await loadThemeFonts(currentTheme.value);
    applyTheme(currentTheme.value);
    isInitialized.value = true;
  }

  /**
   * Reset to system theme
   */
  function resetToSystemTheme(): void {
    const systemThemeId = prefersDark.value ? 'dark-night' : 'light-day';
    setTheme(systemThemeId);
  }

  return {
    // State
    currentTheme,
    currentThemeId,
    availableThemes,
    isInitialized,

    // Actions
    setTheme,
    initializeTheme,
    applyTheme,
    applyThemeToContainer,
    loadThemeFonts,
    resetToSystemTheme,
  };
}
