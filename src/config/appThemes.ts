/**
 * Application Theme Configuration
 *
 * Defines application-level themes that control the overall app appearance.
 * Unlike preview themes, app themes only affect the application UI, not the preview content.
 */

import type { ThemeColors } from '../types/theme';
import { lightDayTheme, darkNightTheme } from './themes';

export interface AppTheme {
  id: 'light' | 'dark';
  name: string;
  description: string;
  colors: ThemeColors;
}

/**
 * Light application theme
 */
export const appLightTheme: AppTheme = {
  id: 'light',
  name: 'Light',
  description: 'Light application theme',
  colors: lightDayTheme.colors,
};

/**
 * Dark application theme
 */
export const appDarkTheme: AppTheme = {
  id: 'dark',
  name: 'Dark',
  description: 'Dark application theme',
  colors: darkNightTheme.colors,
};

/**
 * All available application themes
 */
export const appThemes: AppTheme[] = [appLightTheme, appDarkTheme];

/**
 * Get app theme by ID
 */
export function getAppThemeById(id: 'light' | 'dark'): AppTheme | undefined {
  return appThemes.find(theme => theme.id === id);
}
