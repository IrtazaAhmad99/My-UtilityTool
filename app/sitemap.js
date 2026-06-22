import { blogs } from "@/lib/blogData";

export default function sitemap() {
  const baseUrl = "https://your-domain.com";

  // blog pages
  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/tax-guides/${blog.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tax-slab`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tax-guides`,
      lastModified: new Date(),
    },

    ...blogUrls,
  ];
}