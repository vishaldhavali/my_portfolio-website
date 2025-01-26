/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://my-portfolio-nu-nine-92.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://my-portfolio-nu-nine-92.vercel.app/sitemap.xml",
    ],
  },
};
