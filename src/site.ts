export const SITE = {
  name: 'Nitsan Asks',
  description: "Nitsan Avni's Blog",
  avatar: 'https://s.gravatar.com/avatar/812b1bfc12d31ee16759a409058c1645?s=100',
  footerLinks: [
    { icon: 'email', href: 'mailto:nitsanav@gmail.com' },
    { icon: 'github', href: 'https://github.com/nitsanavni' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/nitsan-avni-53862a62' },
    { icon: 'twitter', href: 'https://www.twitter.com/NitsanAvni' },
  ],
};

// Matches Jekyll's `date: "%B %e, %Y"`, e.g. "January  8, 2024".
export function formatDate(date: Date) {
  const month = date.toLocaleDateString('en-US', { month: 'long', timeZone: 'UTC' });
  return `${month} ${String(date.getUTCDate()).padStart(2, ' ')}, ${date.getUTCFullYear()}`;
}

// Jekyll's default excerpt: the first block of the rendered post.
export function excerpt(html: string) {
  return html.trim().match(/^<(\w+)[\s\S]*?<\/\1>/)?.[0] ?? '';
}

export function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}
