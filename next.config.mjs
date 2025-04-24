/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jkipfrcmwfxonodasykn.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cars-image/**',
      },
    ],
  },
};

export default nextConfig;
