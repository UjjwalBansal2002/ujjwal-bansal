import { PERSONAL_INFO, BLOG_POSTS_DATA } from "@/data/portfolioData";

export async function GET() {
  const baseUrl = PERSONAL_INFO.siteUrl;

  const rssItemsXml = BLOG_POSTS_DATA.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
  `).join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${PERSONAL_INFO.name} — Android Engineering Blog</title>
    <link>${baseUrl}</link>
    <description>${PERSONAL_INFO.bio}</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
