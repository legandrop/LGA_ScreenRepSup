/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ScreenRepSup',
  assetPrefix: '/ScreenRepSup/',
}

module.exports = nextConfig
