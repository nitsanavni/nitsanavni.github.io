export const SITE = {
  title: 'Nitsan Asks',
  description: "Nitsan Avni's blog",
  author: 'Nitsan Avni',
  links: {
    github: 'https://github.com/nitsanavni',
    linkedin: 'https://www.linkedin.com/in/nitsan-avni-53862a62',
    twitter: 'https://twitter.com/NitsanAvni',
    email: 'mailto:nitsanav@gmail.com',
  },
};

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
