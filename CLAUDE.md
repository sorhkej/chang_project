# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue 3 + TypeScript theme system featuring a Style Preview Tool that allows independent mixing of layouts, colors, and fonts with split-screen comparison. The app currently hosts the preview tool as its main interface.

## Common Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Type check with vue-tsc + build for production
npm run preview   # Preview production build locally
```

## Architecture

### Current Application Structure

The app's root ([App.vue](src/App.vue)) hosts `StylePreviewContainer` - a split-screen tool with:
- **Left panel**: Original unstyled content
- **Right panel**: Styled preview with merged theme
- **Floating panel**: Style selectors and controls (collapsible with auto-hide)

### Style Preview Tool (src/components/preview/)

**Component hierarchy:**
```
StylePreviewContainer (split-screen wrapper)
├── StylePreviewPanel (floating control panel)
│   ├── StyleSelector (layout/color/font selectors)
│   └── HistoryTimeline (style selection history)
├── OriginalContentView (unstyled content)
└── PreviewContentView (styled with ThemeProvider)
    └── DemoComponent (reused from main app)
```

**Key composables:**
- `useStylePreview()` ([src/composables/useStylePreview.ts](src/composables/useStylePreview.ts)) - Manages preview state, merges layouts/colors/fonts into complete Theme
- `useCSSExport()` ([src/composables/useCSSExport.ts](src/composables/useCSSExport.ts)) - Generates and downloads CSS files

**Panel collapse behavior:**
- Panel auto-hides after 3 seconds of mouse inactivity
- `isCollapsed` state emits `collapseChange` event to parent container
- Container uses `panel-collapsed` class instead of `:has()` selector for compatibility

**Split-screen layout:**
- CSS Grid with `grid-template-columns: 1fr 1fr` for equal 50/50 split
- `gap: 0` ensures no space between panels
- Panel states: `expanded-original`, `expanded-preview`, `split` (default)

### Core Theme System (src/composables/useTheme.ts)

Centralized composable with global state:
- **Global state**: `currentTheme` (ref), `isInitialized` (ref)
- **CSS application**: `applyTheme()` sets CSS variables on `document.documentElement`
- **Font loading**: Async Google Fonts loading via `loadThemeFonts()` with Set-based caching
- **Persistence**: localStorage via `themePersistence.ts`
- **System preference**: Auto-detects dark/light mode via `useSystemTheme.ts`

### Theme Provider Pattern (src/providers/ThemeProvider.vue)

Vue `provide/inject` for theme context:
- Provides: `theme`, `themeId`, `themes`, `setTheme`
- **Important**: Supports custom theme prop override - when `theme` prop changes, automatically loads fonts and applies CSS variables via `watch`
- This allows PreviewContentView to receive merged custom themes

### Google Fonts Loading (src/utils/googleFonts.ts)

Key utilities:
- `loadGoogleFont(config)` - Loads font with caching (prevents duplicate requests)
- `generateGoogleFontsUrl(config)` - Creates Google Fonts API URL
- Font format: `family:weights@subsets` (e.g., `Inter:400,700@latin`)
- Uses `<link rel="stylesheet">` injection
- Checks `document.fonts.check()` before loading to avoid redundant requests

### Configuration Files (src/config/)

- **themes.ts**: 7 complete Theme objects (light-day, dark-night, ocean-blue, forest-green, sunset-orange, cyber-purple, minimal-gray)
- **layouts.ts**: 6 layout patterns (card-grid, masonry, vertical-list, horizontal-scroll, bento-box, compact-list)
- **colors.ts**: Standalone color schemes extracted from themes
- **fonts.ts**: 16 font schemes (6 from themes + 10 additional: Playfair Display, Roboto Slab, Dancing Script, Pacifico, Caveat, Lobster, Orbitron, Press Start 2P, Cinzel, Abril Fatface)
- **themeContent.ts**: Theme-specific copy (hero text, features, examples)
- **themeLayouts.ts**: Default layout config per theme

### Theme Merging Logic

The `mergedTheme` computed in `useStylePreview` combines:
1. **Colors** from selected color theme
2. **Typography** from selected font scheme
3. **Layout config** from selected layout pattern
4. **Spacing** and **layout** (border-radius, shadows) from color theme

Result is a complete Theme object with custom ID: `custom-{layout}-{color}-{font}`

### CSS Variable Naming Convention

All theme values become CSS custom properties on `:root`:
- Colors: `--color-primary`, `--color-background-primary`, `--color-text-secondary`
- Typography: `--font-family-heading`, `--font-size-base`, `--font-weight-medium`
- Spacing: `--spacing-base`, `--spacing-4`, `--spacing-16`
- Layout: `--border-radius-md`, `--shadow-lg`, `--z-modal`

### Theme Type Structure (src/types/theme.ts)

```typescript
interface Theme {
  id: string
  name: string
  description: string
  colors: ThemeColors
  typography: ThemeTypography
  spacing: ThemeSpacing
  layout: ThemeLayout
  content?: ThemeContent
  layoutConfig?: ThemeLayoutConfig
  fontConfig?: ThemeFontConfig
}
```

Preview tool types in [src/types/preview.ts](src/types/preview.ts):
- `StylePreviewState` - Preview tool state
- `StyleHistoryEntry` - History record
- `LayoutConfig`, `ColorScheme`, `FontScheme` - Selector configurations

### Dynamic Layout Components (src/components/layouts/)

Layout pattern → component mapping via `:is`:
- `card-grid` → CardGridLayout.vue
- `masonry` → MasonryLayout.vue
- `vertical-list` → VerticalListLayout.vue
- `horizontal-scroll` → HorizontalScrollLayout.vue

Components receive `layoutConfig` for grid/gap settings.

## Adding New Themes

1. Define theme object in `src/config/themes.ts` following Theme interface
2. Add to `themeMap` export
3. Add `fontConfig` for Google Fonts auto-loading
4. (Optional) Add `content` in `src/config/themeContent.ts`
5. (Optional) Add `layoutConfig` in `src/config/themeLayouts.ts`

## Adding New Fonts to Preview Tool

1. Add font scheme to `src/config/fonts.ts`:
```typescript
export const newFontScheme: FontScheme = {
  id: 'font-id',
  name: 'Font Name',
  description: 'Description',
  typography: { ...baseTypography, fontFamily: { ... } },
  fontConfig: {
    family: 'Font Name',
    weights: [400, 700],
    subsets: ['latin'],
    fallback: 'sans-serif',
    display: 'swap',
  },
};
```
2. Add to `fontSchemes` array

## Key Dependencies

- **vue@3.5.13**: Composition API, provide/inject
- **vite@6.1.1**: Build tool with HMR
- **typescript@5.7.3**: Strict mode enabled
- **@vitejs/plugin-vue@5.2.1**: Vue SFC support

## Important Notes

- CSS variables are set directly on `document.documentElement` - no scoped styles needed for theme values
- Google Fonts are cached in a Set to avoid reloading
- Theme initialization happens in ThemeProvider's `onMounted` hook
- The style preview tool merges configurations from multiple theme sources
- Avoid using `:has()` selector - use state-based classes for better browser compatibility
- Split-screen layout uses `grid-template-columns: 1fr 1fr` with `gap: 0` for true 50/50 split
- Panel collapse state is communicated via events from child to parent component
