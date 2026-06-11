import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'polovtsev.by',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year for production
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // For icons
  },
  reactStrictMode: true,
  // compiler: {
  //   emotion: true, // Enable if using Emotion
  // },
  // webpack: (config:any, { isServer }: { isServer: boolean }) => {
  //   // Webpack cache enabled for production
  //   if (!isServer) {
  //     config.cache = true; // Cache speeds up the build in production
  //   }
  //   return config;
  // },

    // ❗ Remove custom webpack cache — it breaks live reload
    webpack: (config:NextConfig) => {
      return config;
    },
  

  experimental: {},

  // output: 'standalone', // For production, minimizes the bundle
  // Compression optimization
  compress: true,
  // Enable SWC minifier for JS/CSS
  // swcMinify: true,

  transpilePackages: ['framer-motion'],
};

module.exports = nextConfig;
