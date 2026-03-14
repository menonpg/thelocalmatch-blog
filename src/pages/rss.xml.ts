import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  return rss({
    title: "The Local Match Co. — Blog",
    description: "Insights on matchmaking, relationships, and building a business you believe in.",
    site: context.site || 'https://blog.thelocalmatch.com',
    items: posts
      .filter(post => !post.data.draft)
      .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.description || '',
        link: `/blog/${post.slug}/`,
      })),
    customData: `<language>en-us</language>`,
  });
}
