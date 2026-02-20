/**
 * Theme exclusive content configuration
 * Each theme has unique hero, features, examples, tagline, and use cases
 */

import type { ThemeContent } from '../types/theme';

/** Light Day Theme Content */
export const lightDayContent: ThemeContent = {
  hero: {
    title: 'Bright & Clear',
    subtitle: 'Modern Professional Design',
    description: 'Experience the clarity of a well-lit workspace. The Light Day theme brings professional elegance to your Vue applications with clean lines and balanced whitespace.',
    callToAction: 'Get Started Today',
  },
  features: [
    {
      title: 'Optimal Readability',
      description: 'High contrast text on bright backgrounds for extended reading sessions without eye strain.',
      icon: '👁️',
    },
    {
      title: 'Clean Typography',
      description: 'Inter font family provides excellent legibility across all screen sizes and devices.',
      icon: '✨',
    },
    {
      title: 'Professional Colors',
      description: 'Carefully selected blue primary color conveys trust and reliability.',
      icon: '🎨',
    },
    {
      title: 'Universal Appeal',
      description: 'Perfect for business applications, dashboards, and professional tools.',
      icon: '💼',
    },
  ],
  examples: [
    {
      title: 'Dashboard Example',
      code: `<div class="dashboard">
  <header class="dashboard-header">
    <h1>Welcome Back</h1>
    <p class="subtitle">Your daily overview</p>
  </header>
  <div class="dashboard-grid">
    <MetricCard title="Revenue" value="+12.5%" />
    <MetricCard title="Users" value="2,847" />
    <MetricCard title="Growth" value="+8.3%" />
  </div>
</div>`,
      language: 'vue',
    },
    {
      title: 'Perfect For',
      text: 'Enterprise applications, data dashboards, admin panels, SaaS platforms, and any professional interface where clarity is paramount.',
    },
  ],
  tagline: 'Professional clarity for modern applications',
  useCases: [
    'Enterprise dashboards',
    'Data visualization',
    'Business applications',
    'Admin panels',
    'SaaS platforms',
  ],
};

/** Dark Night Theme Content */
export const darkNightContent: ThemeContent = {
  hero: {
    title: 'Night Owl Mode',
    subtitle: 'High Contrast Dark Theme',
    description: 'Designed for late-night coding sessions and extended screen time. The Dark Night theme reduces eye strain while maintaining excellent contrast and readability.',
    callToAction: 'Switch to Dark',
  },
  features: [
    {
      title: 'Reduced Eye Strain',
      description: 'Deep navy backgrounds with bright text minimize blue light exposure during nighttime use.',
      icon: '🌙',
    },
    {
      title: 'Enhanced Focus',
      description: 'Dark environment helps concentrate attention on content without distractions.',
      icon: '🎯',
    },
    {
      title: 'OLED Optimization',
      description: 'True dark colors maximize battery life on OLED displays.',
      icon: '🔋',
    },
    {
      title: 'Developer Friendly',
      description: 'Ideal for IDEs, code editors, and development tools.',
      icon: '💻',
    },
  ],
  examples: [
    {
      title: 'Code Editor Example',
      code: `<div class="code-editor">
  <div class="editor-sidebar">
    <FileIcon /> component.tsx
    <FileIcon /> styles.css
  </div>
  <div class="editor-main">
    <LineNumbers />
    <CodeHighlight>
      const theme = useTheme();
      return <App />;
    </CodeHighlight>
  </div>
</div>`,
      language: 'vue',
    },
    {
      title: 'Perfect For',
      text: 'IDE themes, code editors, terminal applications, developer tools, and nighttime usage scenarios.',
    },
  ],
  tagline: 'Built for the night shift',
  useCases: [
    'Code editors',
    'Terminal apps',
    'Developer tools',
    'Nighttime browsing',
    'Gaming interfaces',
  ],
};

/** Ocean Blue Theme Content */
export const oceanBlueContent: ThemeContent = {
  hero: {
    title: 'Tranquil Waters',
    subtitle: 'Calming Blue Palette',
    description: 'Let your interface flow like the ocean. This theme brings serenity to your applications with soothing blues and organic, flowing layouts inspired by water.',
    callToAction: 'Dive In',
  },
  features: [
    {
      title: 'Calming Effect',
      description: 'Cool blue tones promote relaxation and reduce stress during long sessions.',
      icon: '🌊',
    },
    {
      title: 'Organic Flow',
      description: 'Masonry layout mimics the natural, irregular patterns of ocean waves.',
      icon: '💧',
    },
    {
      title: 'Refreshing Aesthetic',
      description: 'Light blue backgrounds feel open and airy like a clear sky over water.',
      icon: '☁️',
    },
    {
      title: 'Nature Inspired',
      description: 'Colors drawn from sea, sky, and coastal landscapes.',
      icon: '🏖️',
    },
  ],
  examples: [
    {
      title: 'Travel App Example',
      code: `<div class="travel-card">
  <img src="beach.jpg" class="card-image" />
  <div class="card-content">
    <h3>Maldives Getaway</h3>
    <p>Experience crystal clear waters...</p>
    <Button variant="ocean">Book Now</Button>
  </div>
</div>`,
      language: 'vue',
    },
    {
      title: 'Perfect For',
      text: 'Travel applications, meditation apps, wellness platforms, and any interface where tranquility is valued.',
    },
  ],
  tagline: 'Flow with digital tides',
  useCases: [
    'Travel booking',
    'Meditation apps',
    'Spa websites',
    'Wellness platforms',
    'Environmental causes',
  ],
};

/** Forest Green Theme Content */
export const forestGreenContent: ThemeContent = {
  hero: {
    title: 'Natural Harmony',
    subtitle: 'Organic Green Aesthetics',
    description: 'Bring the outdoors into your interface. The Forest Green theme uses the timeless elegance of serif typography and earthy greens to create a sophisticated, natural experience.',
    callToAction: 'Go Green',
  },
  features: [
    {
      title: 'Classic Typography',
      description: 'Merriweather serif font adds literary sophistication and traditional elegance.',
      icon: '📖',
    },
    {
      title: 'Earthy Colors',
      description: 'Deep forest greens evoke nature, growth, and environmental consciousness.',
      icon: '🌲',
    },
    {
      title: 'Organic Layout',
      description: 'Bento box grid creates visual variety like a forest canopy.',
      icon: '🍃',
    },
    {
      title: 'Sustainable Feel',
      description: 'Perfect for eco-conscious brands and environmental initiatives.',
      icon: '♻️',
    },
  ],
  examples: [
    {
      title: 'Article Layout Example',
      code: `<article class="forest-article">
  <header class="article-header">
    <h1>The Future of Conservation</h1>
    <p class="byline">By Dr. Jane Woods</p>
  </header>
  <div class="article-content">
    <p>In the heart of the ancient forest...</p>
    <blockquote class="pullquote">
      "Nature speaks in whispers"
    </blockquote>
  </div>
</article>`,
      language: 'vue',
    },
    {
      title: 'Perfect For',
      text: 'Blogs, magazines, environmental sites, educational platforms, and literary publications.',
    },
  ],
  tagline: 'Rooted in natural beauty',
  useCases: [
    'Environmental sites',
    'Educational platforms',
    'Literary blogs',
    'Organic products',
    'Wellness content',
  ],
};

/** Sunset Orange Theme Content */
export const sunsetOrangeContent: ThemeContent = {
  hero: {
    title: 'Vibrant Energy',
    subtitle: 'Warm Sunset Palette',
    description: 'Capture the warmth and energy of a golden hour sunset. This theme radiates positivity and enthusiasm with its vibrant oranges and dynamic horizontal scrolling.',
    callToAction: 'Feel the Warmth',
  },
  features: [
    {
      title: 'High Energy',
      description: 'Warm orange tones stimulate creativity and enthusiasm.',
      icon: '☀️',
    },
    {
      title: 'Geometric Modern',
      description: 'Poppins font brings clean geometric shapes for contemporary appeal.',
      icon: '🔷',
    },
    {
      title: 'Dynamic Layout',
      description: 'Horizontal scrolling creates momentum and forward movement.',
      icon: '➡️',
    },
    {
      title: 'Action Oriented',
      description: 'Warm colors encourage user engagement and action.',
      icon: '⚡',
    },
  ],
  examples: [
    {
      title: 'Portfolio Example',
      code: `<div class="portfolio-scroll">
  <ProjectCard>
    <img src="project1.jpg" />
    <h3>Summer Campaign</h3>
    <p>Brand refresh for...</p>
  </ProjectCard>
  <ProjectCard>
    <img src="project2.jpg" />
    <h3>Product Launch</h3>
    <p>Go-to-market strategy...</p>
  </ProjectCard>
</div>`,
      language: 'vue',
    },
    {
      title: 'Perfect For',
      text: 'Creative portfolios, marketing sites, startup landing pages, and energetic brand experiences.',
    },
  ],
  tagline: 'Ignite your creative spark',
  useCases: [
    'Creative portfolios',
    'Marketing landing pages',
    'Startup websites',
    'Food & beverage',
    'Entertainment',
  ],
};

/** Cyber Purple Theme Content */
export const cyberPurpleContent: ThemeContent = {
  hero: {
    title: 'Neon Future',
    subtitle: 'Cyberpunk Aesthetics',
    description: 'Enter the digital realm of tomorrow. The Cyber Purple theme combines neon aesthetics with monospace typography for a futuristic, tech-forward experience.',
    callToAction: 'Enter the Matrix',
  },
  features: [
    {
      title: 'Monospace Code',
      description: 'JetBrains Mono provides the authentic developer terminal experience.',
      icon: '⌨️',
    },
    {
      title: 'Neon Accents',
      description: 'Vibrant purples and pinks create electric contrast against dark backgrounds.',
      icon: '💜',
    },
    {
      title: 'Tech Forward',
      description: 'Perfect for showcasing technical prowess and innovation.',
      icon: '🚀',
    },
    {
      title: 'Efficient Layout',
      description: 'Compact list layout maximizes information density.',
      icon: '📊',
    },
  ],
  examples: [
    {
      title: 'Terminal Interface Example',
      code: `<div class="cyber-terminal">
  <div class="terminal-header">
    <span class="prompt">root@cyber:~$</span>
  </div>
  <div class="terminal-body">
    <span class="success">✓</span> System initialized
    <span class="info">ℹ</span> Loading modules...
    <span class="accent">▶</span> Execute protocol
  </div>
</div>`,
      language: 'vue',
    },
    {
      title: 'Perfect For',
      text: 'Developer tools, CLI interfaces, tech products, blockchain apps, and gaming platforms.',
    },
  ],
  tagline: 'Welcome to the future',
  useCases: [
    'Developer tools',
    'CLI interfaces',
    'Blockchain apps',
    'Gaming platforms',
    'Tech startups',
  ],
};

/** Minimal Gray Theme Content */
export const minimalGrayContent: ThemeContent = {
  hero: {
    title: 'Less is More',
    subtitle: 'Professional Minimalism',
    description: 'Embrace the power of restraint. The Minimal Gray theme removes distractions and focuses on content with neutral tones and clean, professional Source Sans Pro typography.',
    callToAction: 'Simplify',
  },
  features: [
    {
      title: 'Distraction Free',
      description: 'Neutral grays recede into the background, putting content first.',
      icon: '🎯',
    },
    {
      title: 'Professional Sans',
      description: 'Source Sans Pro offers clarity without personality.',
      icon: '✓',
    },
    {
      title: 'Universal Design',
      description: 'Works in any context from corporate to creative.',
      icon: '◼️',
    },
    {
      title: 'Content Focused',
      description: 'Simple grid layout lets content shine without decoration.',
      icon: '📄',
    },
  ],
  examples: [
    {
      title: 'Document Reader Example',
      code: `<div class="minimal-reader">
  <article class="document">
    <h1>Project Proposal</h1>
    <div class="metadata">
      <span>Version 2.3</span>
      <span>Last updated: Today</span>
    </div>
    <section class="content">
      <h2>Executive Summary</h2>
      <p>This proposal outlines...</p>
    </section>
  </article>
</div>`,
      language: 'vue',
    },
    {
      title: 'Perfect For',
      text: 'Documentation, knowledge bases, academic platforms, corporate intranets, and reading-focused applications.',
    },
  ],
  tagline: 'Simplicity is the ultimate sophistication',
  useCases: [
    'Documentation',
    'Knowledge bases',
    'Academic platforms',
    'Corporate intranets',
    'Note-taking apps',
  ],
};

/** Map theme IDs to their content */
export const themeContentMap: Record<string, ThemeContent> = {
  'light-day': lightDayContent,
  'dark-night': darkNightContent,
  'ocean-blue': oceanBlueContent,
  'forest-green': forestGreenContent,
  'sunset-orange': sunsetOrangeContent,
  'cyber-purple': cyberPurpleContent,
  'minimal-gray': minimalGrayContent,
};

/**
 * Get theme content by ID
 */
export function getThemeContent(themeId: string): ThemeContent | undefined {
  return themeContentMap[themeId];
}

/**
 * Get default content fallback
 */
export function getDefaultContent(): ThemeContent {
  return lightDayContent;
}
