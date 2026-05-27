/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/v2',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
