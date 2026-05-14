/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Point to the instapost subdirectory
  distDir: 'instapost/.next',
}

module.exports = nextConfig
