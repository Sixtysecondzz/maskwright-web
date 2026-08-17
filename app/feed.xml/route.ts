import { CATEGORIES } from "@/lib/blog-config";
import { getPosts } from "@/lib/blog";

export function GET() {
  const base = "https://maskwright.com";
  const posts = getPosts();
  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${base}/blog/${post.slug}</link>
      <guid>${base}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${escapeXml(CATEGORIES[post.category].title)}</category>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>MaskWright Blog</title>
    <link>${base}/blog</link>
    <description>Operator notes on local antidetect browsers, fingerprinting, and proxies.</description>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
