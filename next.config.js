/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instapost.beta01.site',
        pathname: '/wp-content/**',
      },
    ],
  },
}

module.exports = nextConfig
