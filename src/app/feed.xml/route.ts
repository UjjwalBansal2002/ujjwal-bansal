import { PERSONAL_INFO, PROJECTS_DATA } from "@/data/portfolioData";

export async function GET() {
  const baseUrl = PERSONAL_INFO.siteUrl;

  const rssItemsXml = PROJECTS_DATA.map((project) => `
    <item>
      <title><![CDATA[${project.title}]]></title>
      <description><![CDATA[${project.description}]]></description>
      <link>${baseUrl}#projects</link>
      <guid isPermaLink="false">${project.id}</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  `).join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${PERSONAL_INFO.name} — Native Android Developer Portfolio</title>
    <link>${baseUrl}</link>
    <description>${PERSONAL_INFO.summary}</description>
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
