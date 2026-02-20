/**
 * CSS Export Composable
 *
 * Provides functionality to export theme CSS as a downloadable file.
 */

import { computed } from 'vue';
import type { Theme } from '../types/theme';
import { generateCSSFromTheme, generateCSSWithFontImport, formatTimestampForFilename } from '../utils/cssGenerator';

/**
 * CSS Export composable
 *
 * @param theme - The theme to export
 */
export function useCSSExport(theme: () => Theme) {
  /**
   * Generated CSS content
   */
  const cssContent = computed(() => {
    return generateCSSWithFontImport(theme());
  });

  /**
   * Download CSS as a file
   *
   * @param includeFontImport - Whether to include Google Fonts import
   */
  function downloadCSS(includeFontImport = true): void {
    const currentTheme = theme();
    const css = includeFontImport ? generateCSSWithFontImport(currentTheme) : generateCSSFromTheme(currentTheme);

    // Create blob with CSS content
    const blob = new Blob([css], { type: 'text/css' });

    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;

    // Generate filename
    const safeName = currentTheme.name.toLowerCase().replace(/\s+/g, '-');
    const timestamp = formatTimestampForFilename();
    link.download = `theme-${safeName}-${timestamp}.css`;

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * Copy CSS to clipboard
   */
  async function copyCSSToClipboard(): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(cssContent.value);
      return true;
    } catch (error) {
      console.error('Failed to copy CSS to clipboard:', error);
      return false;
    }
  }

  return {
    cssContent,
    downloadCSS,
    copyCSSToClipboard,
  };
}
