/**
 * Scenarios Configuration
 *
 * Defines all available website scenarios for theme preview.
 */

import type { Scenario } from '../types/scenario';

/**
 * Available scenarios for preview
 */
export const scenarios: Scenario[] = [
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Personal portfolio website',
    icon: '👨‍💻',
    component: 'PortfolioScenario',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Online store and shopping',
    icon: '🛒',
    component: 'EcommerceScenario',
  },
  {
    id: 'official',
    name: 'Official Site',
    description: 'Corporate official website',
    icon: '🏢',
    component: 'OfficialScenario',
  },
  {
    id: 'blog',
    name: 'Blog',
    description: 'Blog and content platform',
    icon: '📝',
    component: 'BlogScenario',
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    description: 'Restaurant and menu display',
    icon: '🍽️',
    component: 'RestaurantScenario',
  },
];

/**
 * Get scenario by ID
 */
export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find(s => s.id === id);
}

/**
 * Default scenario
 */
export const DEFAULT_SCENARIO = 'portfolio';