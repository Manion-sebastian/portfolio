/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // supply array of trusted domains
    domains: ['placekitten.com']
  }
}

module.exports = nextConfig
