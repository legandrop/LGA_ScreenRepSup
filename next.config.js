/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/screenrs',
  assetPrefix: '/screenrs/',
}

module.exports = nextConfig
