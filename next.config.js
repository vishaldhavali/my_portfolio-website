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
      fs: false,
      path: false,
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
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "@radix-ui/react-icons"],
    workerThreads: true,
    cpus: 4,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
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
