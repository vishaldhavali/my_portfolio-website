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
  additionalPaths: async (config) => [
    { loc: "/#about", priority: 0.8, changefreq: "monthly" },
    { loc: "/#skills", priority: 0.8, changefreq: "monthly" },
    { loc: "/#projects", priority: 0.9, changefreq: "weekly" },
    { loc: "/#work", priority: 0.9, changefreq: "monthly" },
    { loc: "/#contact", priority: 0.7, changefreq: "monthly" },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
