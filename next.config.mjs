/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      '127.0.0.1',
      'us-east-1-shared-usea1-02.graphassets.com',
	  'blog-back-4j9v.onrender.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
      {
        protocol: 'https',
        hostname: 'blog-back-4j9v.onrender.com',
        pathname: '/media/**', 
      },
    ],
  },
}

export default nextConfig
