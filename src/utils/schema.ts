import type { CollectionEntry } from 'astro:content';

export function generateBlogPostSchema(post: CollectionEntry<'blog'>, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.data.title,
    description: post.data.description,
    datePublished: post.data.date,
    dateModified: post.data.updated || post.data.date,
    author: {
      '@type': 'Organization',
      name: 'The Local Match Co.',
      url: 'https://thelocalmatch.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Local Match Co.',
      url: 'https://thelocalmatch.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Local Match Co. — Blog',
    description: 'Insights on matchmaking, relationships, and building a business you believe in.',
    url: 'https://blog.thelocalmatch.com',
    publisher: {
      '@type': 'Organization',
      name: 'The Local Match Co.',
      url: 'https://thelocalmatch.com',
    },
  };
}
