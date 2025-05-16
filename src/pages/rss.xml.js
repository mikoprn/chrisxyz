import rss from '@astrojs/rss';
import { formatBlogPosts } from "../js/utilsBlog"
const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
const posts = formatBlogPosts(Object.values(postImportResult));

// export function GET(context) {
//     return rss({
//         stylesheet: '/rss/styles.xsl',
//         title: 'my astro blog',
//         description: 'A humble Astronaut guide to the stars',
//         site: context.site,
//         items: posts.map((post) => ({
//             link: post.url,
//             title: post.frontmatter.title,
//             pubDate: post.frontmatter.date,
//             description: post.frontmatter.description,
//             customData: `<author>${post.frontmatter.author}</author>`,
//         }))
//   });
// }

import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
    stylesheet: '/rss/styles.xsl',
    title: 'Buzz’s Blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
}