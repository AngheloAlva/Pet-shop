/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn11.bigcommerce.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mazuri.cl'
      },
      {
        protocol: 'https',
        hostname: 'utfs.io'
      }
    ]
  }
};

export default nextConfig;
