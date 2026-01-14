/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable strict mode
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'yetiracing.cusat.co.in',
        },
      ],
    },
    output: 'standalone', // Ensures better build optimizations
  };
  
  export default nextConfig;
  