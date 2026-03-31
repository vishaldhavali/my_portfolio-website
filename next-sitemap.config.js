/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vishaldhavali.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/404", "/500", "/api/*"],
  transform: async (config, path) => {
    return {
      loc: path,
      priority: path === "/" ? 1.0 : 0.7,
      changefreq: path === "/" ? "weekly" : "monthly",
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    additionalSitemaps: ["https://vishaldhavali.vercel.app/sitemap.xml"],
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
