module.exports = {
  siteUrl: "https://banhchungcotien.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.8, // Default priority for all pages

  // Explicitly add localized routes
  additionalPaths: async (config) => {
    const result = [];

    // Add /vi and /en routes with high priority
    result.push({
      loc: "/vi",
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/en",
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    });

    return result;
  },
};
