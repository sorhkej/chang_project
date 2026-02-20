/**
 * Preview Content Configuration
 *
 * Defines the content used in the preview panel.
 * This matches the content in OriginalContentView to ensure both panels
 * show the same content, allowing for true "before vs after" comparison.
 */

import type { ThemeContent } from '../types/theme';

/**
 * Preview content that matches OriginalContentView
 * This ensures both panels show the same content
 */
export const previewContent: ThemeContent = {
  hero: {
    title: 'Welcome to Our Platform',
    subtitle: 'Build amazing experiences',
    description: 'Discover a powerful toolkit for creating beautiful, responsive designs with modern web technologies.',
    callToAction: 'Get Started',
  },
  tagline: 'A powerful toolkit for modern web development',
  features: [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern and clean aesthetics for your projects',
    },
    {
      icon: '🔧',
      title: 'Easy to Use',
      description: 'Intuitive interface for seamless workflow',
    },
  ],
  examples: [
    {
      title: 'Component Example',
      code: '<Button>Click me</Button>',
      language: 'html',
      text: 'This is a sample component demonstration',
    },
    {
      title: 'Layout Example',
      code: '<Grid>...</Grid>',
      language: 'html',
      text: 'Grid layouts made simple and flexible',
    },
  ],
  useCases: [
    'Web Applications',
    'Mobile Apps',
    'Landing Pages',
    'Dashboard UI',
    'E-commerce',
  ],
};
