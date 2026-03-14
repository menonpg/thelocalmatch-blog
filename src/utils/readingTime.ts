export function calculateReadingTime(content: string, wordsPerMinute: number = 200): number {
  const plainText = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[#*_~\[\]()]/g, '')
    .replace(/---[\s\S]*?---/g, '');
  const words = plainText.trim().split(/\s+/).filter(word => word.length > 0).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
