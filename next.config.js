/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['gotogether-s.s3.ap-northeast-2.amazonaws.com'],
  },
  i18n,
}

module.exports = nextConfig
