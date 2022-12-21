/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['gotogether-s.s3.ap-northeast-2.amazonaws.com'],
  },
}

module.exports = nextConfig
