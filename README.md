# Vue Theme Switcher

A powerful and flexible theme system for Vue 3 applications featuring 7 beautiful predefined themes, CSS variables for dynamic styling, and localStorage persistence.

## Features

- **7 Predefined Themes**: Light Day, Dark Night, Ocean Blue, Forest Green, Sunset Orange, Cyber Purple, and Minimal Gray
- **CSS Variables**: Native CSS custom properties for performant theme switching
- **TypeScript Support**: Full type safety with TypeScript
- **localStorage Persistence**: User theme preferences persist across sessions
- **System Preference Detection**: Automatically detects system dark/light mode preference
- **Composable Architecture**: Reusable theme composition API
- **Component Library**: Pre-built components (Button, Card) that respond to theme changes
- **Accessibility**: WCAG compliant color contrast ratios
- **Zero FOUC**: Critical theme initialization prevents flash of unstyled content

## Project Structure

```
src/
├── assets/
│   └── styles/
│       ├── base/
│       │   ├── reset.css           # CSS reset
│       │   ├── typography.css      # Base typography
│       │   └── variables.css       # CSS variables
│       ├── components/
│       │   ├── button.css          # Button component styles
│       │   └── card.css            # Card component styles
│       └── main.css                # Main stylesheet entry
├── composables/
│   ├── useTheme.ts                 # Theme core composable
│   └── useSystemTheme.ts           # System theme detection
├── providers/
│   └── ThemeProvider.vue           # Theme context provider
├── types/
│   └── theme.ts                    # TypeScript type definitions
├── config/
│   └── themes.ts                   # 7 theme configurations
├── utils/
│   └── themePersistence.ts         # localStorage utilities
├── components/
│   ├── ThemeSwitcher.vue           # Theme selection UI
│   └── DemoComponent.vue           # Demo showcase
├── App.vue
└── main.ts
```

## Getting Started

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Usage

### Wrapping Your App with ThemeProvider

Wrap your application root with the `ThemeProvider` component:

```vue
<template>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</template>

<script setup>
import ThemeProvider from './providers/ThemeProvider.vue';
import App from './App.vue';
</script>
```

### Using the Theme Composable

Use the `useTheme` composable to access and control the theme:

```vue
<script setup>
import { useTheme } from './composables/useTheme';

const { currentTheme, currentThemeId, setTheme, availableThemes } = useTheme();
</script>
```

### Using Theme Switcher Component

Add the `ThemeSwitcher` component to your app:

```vue
<template>
  <ThemeSwitcher />
</template>

<script setup>
import ThemeSwitcher from './components/ThemeSwitcher.vue';
</script>
```

### Using Styled Components

The project includes pre-styled components that respond to theme changes:

```vue
<template>
  <!-- Buttons -->
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-outline">Outline</button>

  <!-- Cards -->
  <div class="card card-hoverable">
    <h3 class="card-title">Card Title</h3>
    <p class="card-body">Card content...</p>
  </div>
</template>
```

## Available Themes

| Theme ID | Name | Description |
|----------|------|-------------|
| `light-day` | Light Day | Clean modern light theme |
| `dark-night` | Dark Night | High contrast dark theme |
| `ocean-blue` | Ocean Blue | Calming blue theme |
| `forest-green` | Forest Green | Natural green theme |
| `sunset-orange` | Sunset Orange | Warm vibrant orange |
| `cyber-purple` | Cyber Purple | Futuristic purple theme |
| `minimal-gray` | Minimal Gray | Professional gray theme |

## CSS Variables

All theme values are exposed as CSS variables:

```css
/* Colors */
--color-primary
--color-secondary
--color-background-primary
--color-text-primary
/* ... and more */

/* Typography */
--font-size-base
--font-weight-normal
--line-height-normal
/* ... and more */

/* Spacing */
--spacing-1
--spacing-4
--spacing-8
/* ... and more */

/* Layout */
--border-radius-md
--shadow-lg
--transition-normal
/* ... and more */
```

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Opera: ✅

**Note:** Requires CSS custom properties support (IE11 is not supported)

## Tech Stack

- **Framework**: Vue 3 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Variables (Custom Properties)
- **State Management**: Composition API
- **Persistence**: localStorage

## License

MIT
