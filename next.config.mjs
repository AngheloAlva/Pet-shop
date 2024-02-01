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
      }
    ]
  }
};

export default nextConfig;
