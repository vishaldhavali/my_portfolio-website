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
};

module.exports = nextConfig;
