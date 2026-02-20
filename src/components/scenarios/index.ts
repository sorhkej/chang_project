/**
 * Scenarios Index
 *
 * Exports all scenario components for easy importing
 */

import PortfolioScenario from './PortfolioScenario.vue';
import EcommerceScenario from './EcommerceScenario.vue';
import OfficialScenario from './OfficialScenario.vue';
import BlogScenario from './BlogScenario.vue';
import RestaurantScenario from './RestaurantScenario.vue';

export const scenarios = {
  portfolio: PortfolioScenario,
  ecommerce: EcommerceScenario,
  official: OfficialScenario,
  blog: BlogScenario,
  restaurant: RestaurantScenario,
};

// Export individual components
export { PortfolioScenario, EcommerceScenario, OfficialScenario, BlogScenario, RestaurantScenario };

// Helper to get scenario component by ID
export function getScenarioComponent(type: string) {
  return scenarios[type as keyof typeof scenarios] || PortfolioScenario;
}
