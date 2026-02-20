/**
 * Scenario Content Data
 *
 * Content for all scenario types to showcase themes.
 */

import type { ScenarioContent } from '../types/scenario';

/**
 * Portfolio scenario content
 */
export const portfolioContent: ScenarioContent['portfolio'] = {
  name: 'Alex Chen',
  title: 'Full Stack Developer',
  bio: 'Passionate developer with 5+ years of experience building scalable web applications. Specializing in React, Vue, and Node.js ecosystems.',
  skills: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Node.js', 'Python', 'Docker', 'AWS'],
  projects: [
    {
      title: 'TaskFlow Pro',
      description: 'A project management platform with real-time collaboration features, used by 10,000+ teams worldwide.',
      tags: ['Vue.js', 'Firebase', 'TailwindCSS'],
    },
    {
      title: 'DataViz Dashboard',
      description: 'Interactive data visualization dashboard for business analytics with customizable charts.',
      tags: ['React', 'D3.js', 'GraphQL'],
    },
    {
      title: 'CloudDeploy CLI',
      description: 'Command-line tool for automated deployment pipelines, reducing deployment time by 80%.',
      tags: ['Node.js', 'Docker', 'AWS'],
    },
  ],
};

/**
 * E-commerce scenario content
 */
export const ecommerceContent: ScenarioContent['ecommerce'] = {
  storeName: 'TechGear Store',
  products: [
    {
      name: 'Wireless Noise-Canceling Headphones',
      price: 299.99,
      description: 'Premium sound quality with 30-hour battery life and active noise cancellation.',
      category: 'Audio',
    },
    {
      name: '4K Ultra HD Monitor',
      price: 549.99,
      description: '32-inch display with HDR support, perfect for creative professionals.',
      category: 'Monitors',
    },
    {
      name: 'Mechanical Gaming Keyboard',
      price: 129.99,
      description: 'RGB backlit with Cherry MX switches and programmable macros.',
      category: 'Accessories',
    },
    {
      name: 'Smart Watch Pro',
      price: 399.99,
      description: 'Fitness tracking, heart rate monitoring, and smartphone notifications.',
      category: 'Wearables',
    },
    {
      name: 'Portable SSD 1TB',
      price: 179.99,
      description: 'Blazing fast 1000MB/s transfer speed in a compact, rugged design.',
      category: 'Storage',
    },
    {
      name: 'Ergonomic Office Chair',
      price: 449.99,
      description: 'Lumbar support, adjustable armrests, and breathable mesh back.',
      category: 'Furniture',
    },
  ],
  categories: ['Audio', 'Monitors', 'Accessories', 'Wearables', 'Storage', 'Furniture'],
};

/**
 * Official site scenario content
 */
export const officialContent: ScenarioContent['official'] = {
  companyName: 'InnovateTech Solutions',
  mission: 'Empowering businesses through innovative technology solutions that drive growth and efficiency in the digital age.',
  services: [
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure design, migration, and management services.',
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge digital technologies.',
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security assessments and protection for your digital assets.',
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics platforms.',
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your unique business needs.',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services.',
    },
  ],
  stats: [
    { label: 'Clients Served', value: '500+' },
    { label: 'Projects Completed', value: '1,200+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Team Members', value: '150+' },
  ],
};

/**
 * Blog scenario content
 */
export const blogContent: ScenarioContent['blog'] = {
  blogName: 'Tech Insights',
  author: 'Sarah Mitchell',
  posts: [
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the emerging technologies and practices that will shape how we build web applications in the coming years.',
      date: 'Feb 15, 2025',
      category: 'Web Development',
      readTime: '8 min read',
    },
    {
      title: 'Mastering TypeScript: Advanced Patterns and Best Practices',
      excerpt: 'Deep dive into advanced TypeScript patterns that will make your code more type-safe and maintainable.',
      date: 'Feb 12, 2025',
      category: 'Programming',
      readTime: '12 min read',
    },
    {
      title: 'Building Scalable APIs with Node.js and GraphQL',
      excerpt: 'Learn how to design and implement GraphQL APIs that can handle millions of requests efficiently.',
      date: 'Feb 10, 2025',
      category: 'Backend',
      readTime: '10 min read',
    },
    {
      title: 'Introduction to Machine Learning for Web Developers',
      excerpt: 'A beginner-friendly guide to integrating ML models into web applications using TensorFlow.js.',
      date: 'Feb 8, 2025',
      category: 'AI/ML',
      readTime: '15 min read',
    },
    {
      title: 'CSS Container Queries: The Future of Responsive Design',
      excerpt: 'Discover how container queries are revolutionizing component-based responsive design.',
      date: 'Feb 5, 2025',
      category: 'CSS',
      readTime: '6 min read',
    },
  ],
  categories: ['Web Development', 'Programming', 'Backend', 'AI/ML', 'CSS', 'DevOps'],
};

/**
 * Restaurant scenario content
 */
export const restaurantContent: ScenarioContent['restaurant'] = {
  name: 'The Golden Fork',
  cuisine: 'Modern European Fusion',
  description: 'Experience the finest fusion of European cuisines crafted with locally-sourced ingredients and presented with artistic flair.',
  menu: [
    {
      category: 'Appetizers',
      items: [
        {
          name: 'Truffle Bruschetta',
          description: 'Grilled sourdough topped with black truffle, ricotta, and honey drizzle',
          price: 14,
        },
        {
          name: 'Seared Scallops',
          description: 'Pan-seared scallops with cauliflower purée and crispy pancetta',
          price: 18,
        },
        {
          name: 'French Onion Soup',
          description: 'Classic recipe with Gruyère crouton and sherry',
          price: 12,
        },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        {
          name: 'Filet Mignon',
          description: '8oz prime beef with red wine reduction, pommes purée, and seasonal vegetables',
          price: 45,
        },
        {
          name: 'Pan-Roasted Salmon',
          description: 'Atlantic salmon with lemon butter sauce, asparagus, and wild rice',
          price: 32,
        },
        {
          name: 'Duck Confit',
          description: 'Slow-cooked duck leg with cherry gastrique and roasted potatoes',
          price: 38,
        },
        {
          name: 'Wild Mushroom Risotto',
          description: 'Arborio rice with porcini, shiitake, and aged Parmesan (V)',
          price: 26,
        },
      ],
    },
    {
      category: 'Desserts',
      items: [
        {
          name: 'Chocolate Fondant',
          description: 'Warm chocolate cake with molten center and vanilla bean ice cream',
          price: 12,
        },
        {
          name: 'Crème Brûlée',
          description: 'Classic vanilla custard with caramelized sugar',
          price: 10,
        },
        {
          name: 'Lemon Tart',
          description: 'Buttery pastry shell with tangy lemon curd and meringue',
          price: 11,
        },
      ],
    },
  ],
  hours: 'Tue-Sun: 5:00 PM - 11:00 PM | Fri-Sat: Until Midnight',
  location: '123 Culinary Avenue, Downtown District',
};

/**
 * Get content for a scenario type
 */
export function getScenarioContent(type: string): ScenarioContent {
  switch (type) {
    case 'portfolio':
      return { type: 'portfolio', portfolio: portfolioContent };
    case 'ecommerce':
      return { type: 'ecommerce', ecommerce: ecommerceContent };
    case 'official':
      return { type: 'official', official: officialContent };
    case 'blog':
      return { type: 'blog', blog: blogContent };
    case 'restaurant':
      return { type: 'restaurant', restaurant: restaurantContent };
    default:
      return { type: 'portfolio', portfolio: portfolioContent };
  }
}
