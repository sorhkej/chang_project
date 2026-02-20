/**
 * Style Preview Composable
 *
 * Manages the state for the style preview tool including:
 * - Selected layout, color, and font
 * - Preview generation
 * - Panel expansion state
 * - Style history
 * - Smart app theme sync
 */

import { reactive, computed, watch, toRef } from 'vue';
import type { StylePreviewState, StyleHistoryEntry } from '../types/preview';
import type { Theme, LayoutPattern, ScenarioType } from '../types/theme';
import { getThemeById } from '../config/themes';
import { getLayoutConfigById, layoutConfigs } from '../config/layouts';
import { colorSchemes, getColorSchemeById } from '../config/colors';
import { fontSchemes, getFontSchemeById } from '../config/fonts';
import { useAppTheme } from './useAppTheme';
import { previewContent } from '../config/previewContent';

// Default selections
const DEFAULT_LAYOUT: LayoutPattern = 'card-grid';
const DEFAULT_COLOR = 'light-day';
const DEFAULT_FONT = 'inter';
const DEFAULT_SCENARIO_TYPE: ScenarioType = 'portfolio';

/**
 * Create the reactive state for style preview
 */
function createInitialState(): StylePreviewState {
  return {
    selectedLayout: DEFAULT_LAYOUT,
    selectedColor: DEFAULT_COLOR,
    selectedFont: DEFAULT_FONT,
    selectedScenario: DEFAULT_SCENARIO_TYPE,
    isPreviewGenerated: true,
    history: [],
  };
}

/**
 * Style preview state management
 */
export function useStylePreview() {
  // Reactive state
  const state = reactive<StylePreviewState>(createInitialState());

  // Watch for debugging
  watch(() => state.selectedScenario, (newScenario) => {
    console.log('[useStylePreview] selectedScenario changed to:', newScenario);
  });
  watch(() => state.selectedColor, (newColor) => {
    console.log('[useStylePreview] selectedColor changed to:', newColor);
  });

  // Get app theme composable for smart sync
  const { setAppTheme, autoSyncEnabled } = useAppTheme();

  /**
   * Merge selected styles into a complete theme
   */
  const mergedTheme = computed((): Theme => {
    const colorTheme = getThemeById(state.selectedColor);
    const fontScheme = getFontSchemeById(state.selectedFont);
    const layoutConfig = getLayoutConfigById(state.selectedLayout);

    console.log('[useStylePreview] Computing merged theme:', {
      layout: state.selectedLayout,
      color: state.selectedColor,
      font: state.selectedFont,
      scenario: state.selectedScenario,
      colorTheme: colorTheme?.name,
      fontScheme: fontScheme?.name,
      layoutConfig: layoutConfig?.name,
    });

    if (!colorTheme || !fontScheme || !layoutConfig) {
      // Fallback to default theme
      return getThemeById(DEFAULT_COLOR) || getThemeById('light-day')!;
    }

    // Merge the theme configurations
    const merged: Theme = {
      id: `custom-${state.selectedLayout}-${state.selectedColor}-${state.selectedFont}`,
      name: `${colorTheme.name} with ${fontScheme.fontConfig?.family || fontScheme.name}`,
      description: `Custom theme combining ${layoutConfig.name} layout, ${colorTheme.name} colors, and ${fontScheme.name} typography`,
      colors: colorTheme.colors,
      typography: fontScheme.typography,
      spacing: colorTheme.spacing,
      layout: colorTheme.layout,
      layoutConfig: layoutConfig.config,
      fontConfig: fontScheme.fontConfig,
      content: previewContent,
    };

    console.log('[useStylePreview] Merged theme ID:', merged.id);
    return merged;
  });

  /**
   * Get layout name by ID
   */
  const layoutName = computed(() => {
    const layout = layoutConfigs.find(l => l.id === state.selectedLayout);
    return layout?.name || state.selectedLayout;
  });

  /**
   * Get color scheme name by ID
   */
  const colorName = computed(() => {
    const scheme = colorSchemes.find(c => c.id === state.selectedColor);
    return scheme?.name || state.selectedColor;
  });

  /**
   * Get font scheme name by ID
   */
  const fontName = computed(() => {
    const scheme = fontSchemes.find(f => f.id === state.selectedFont);
    return scheme?.name || state.selectedFont;
  });

  /**
   * Generate preview (mark as generated and add to history)
   */
  function generatePreview(): void {
    state.isPreviewGenerated = true;
    addToHistory();
  }

  /**
   * Add current selection to history
   */
  function addToHistory(): void {
    const entry: StyleHistoryEntry = {
      id: `history-${Date.now()}`,
      timestamp: Date.now(),
      layout: state.selectedLayout,
      color: state.selectedColor,
      font: state.selectedFont,
      scenario: state.selectedScenario,
    };

    // Add to history (newest first)
    state.history.unshift(entry);

    // Limit history to 20 entries
    if (state.history.length > 20) {
      state.history = state.history.slice(0, 20);
    }
  }

  /**
   * Restore a history entry
   */
  function restoreFromHistory(entry: StyleHistoryEntry): void {
    state.selectedLayout = entry.layout;
    state.selectedColor = entry.color;
    state.selectedFont = entry.font;
    state.selectedScenario = entry.scenario;
    state.isPreviewGenerated = true;
  }

  /**
   * Clear history
   */
  function clearHistory(): void {
    state.history = [];
  }

  /**
   * Reset to default state
   */
  function reset(): void {
    state.selectedLayout = DEFAULT_LAYOUT;
    state.selectedColor = DEFAULT_COLOR;
    state.selectedFont = DEFAULT_FONT;
    state.selectedScenario = DEFAULT_SCENARIO_TYPE;
    state.isPreviewGenerated = false;
  }

  /**
   * Smart sync: Automatically switch app theme based on selected color scheme
   */
  watch(
    () => state.selectedColor,
    async (colorId) => {
      console.log('[SmartSync] Color changed to:', colorId);
      console.log('[SmartSync] autoSyncEnabled:', autoSyncEnabled.value);

      if (!autoSyncEnabled.value) {
        console.log('[SmartSync] Auto-sync disabled, skipping');
        return;
      }

      const scheme = getColorSchemeById(colorId);
      console.log('[SmartSync] Color scheme:', scheme?.name, 'category:', scheme?.category);

      if (scheme?.category === 'dark') {
        console.log('[SmartSync] Switching app to dark theme');
        setAppTheme('dark');
      } else if (scheme?.category === 'light') {
        console.log('[SmartSync] Switching app to light theme');
        setAppTheme('light');
      }
      // 'colorful' category keeps current app theme unchanged
    },
    { immediate: true }
  );

  return {
    // State
    state,
    mergedTheme,
    layoutName,
    colorName,
    fontName,

    // Actions
    generatePreview,
    addToHistory,
    restoreFromHistory,
    clearHistory,
    reset,

    // Available options
    layouts: layoutConfigs,
    colors: colorSchemes,
    fonts: fontSchemes,
  };
}

// Export a singleton instance for global use
let globalPreviewInstance: ReturnType<typeof useStylePreview> | null = null;

/**
 * Get or create the global style preview instance
 */
export function useGlobalStylePreview() {
  if (!globalPreviewInstance) {
    globalPreviewInstance = useStylePreview();
  }
  return globalPreviewInstance;
}
