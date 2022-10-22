/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // supply array of trusted domains
    domains: ['placekitten.com', 'linkedin.com', 'imgur.com', 'github.com', 'media-exp1.licdn.com']
  }
}

module.exports = nextConfig
