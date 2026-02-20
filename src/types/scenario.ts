/**
 * Scenario Type Definitions
 *
 * Defines website scenarios for theme preview demonstrations.
 */

/**
 * Scenario types available in the preview tool
 */
export type ScenarioType = 'portfolio' | 'ecommerce' | 'official' | 'blog' | 'restaurant';

/**
 * Scenario configuration
 */
export interface Scenario {
  /** Unique scenario identifier */
  id: ScenarioType;
  /** Display name */
  name: string;
  /** Description */
  description: string;
  /** Icon/emoji for visual identification */
  icon: string;
  /** Component name */
  component: string;
}

/**
 * Scenario content interface for different scenario types
 */
export interface ScenarioContent {
  type: ScenarioType;
  // Portfolio content
  portfolio?: {
    name: string;
    title: string;
    bio: string;
    skills: string[];
    projects: Array<{
      title: string;
      description: string;
      tags: string[];
    }>;
  };
  // E-commerce content
  ecommerce?: {
    storeName: string;
    products: Array<{
      name: string;
      price: number;
      description: string;
      image?: string;
      category: string;
    }>;
    categories: string[];
  };
  // Official site content
  official?: {
    companyName: string;
    mission: string;
    services: Array<{
      title: string;
      description: string;
    }>;
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
  // Blog content
  blog?: {
    blogName: string;
    author: string;
    posts: Array<{
      title: string;
      excerpt: string;
      date: string;
      category: string;
      readTime: string;
    }>;
    categories: string[];
  };
  // Restaurant content
  restaurant?: {
    name: string;
    cuisine: string;
    description: string;
    menu: Array<{
      category: string;
      items: Array<{
        name: string;
        description: string;
        price: number;
      }>;
    }>;
    hours: string;
    location: string;
  };
}