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
    config.resolve.alias.canvas = false;
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
      encoding: false,
    };
    return config;
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
