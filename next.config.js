/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.instapost.co',
        pathname: '/wp-content/**',
      },
    ],
  },
}

module.exports = nextConfig
