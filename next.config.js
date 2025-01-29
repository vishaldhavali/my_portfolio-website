/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Don't prevent deployment if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't prevent deployment if there are type errors
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    return config;
  },
  compress: true,
  poweredByHeader: false,
  images: {
    domains: ["my-portfolio-nu-nine-92.vercel.app"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 176, 256],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [],
  },
  experimental: {
    optimizeCss: false,
    workerThreads: false,
    cpus: undefined,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self'; frame-src 'self';",
          },
        ],
      },
      {
        source: "/assets/resume/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: "inline",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  output: "standalone",
  staticPageGenerationTimeout: 180,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
