/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
