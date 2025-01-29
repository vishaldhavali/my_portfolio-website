/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vishaldhavali.vercel.app",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/500"],
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
