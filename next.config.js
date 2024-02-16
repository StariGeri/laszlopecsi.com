/** @type {import('next').NextConfig} */

const { hostname } = require('os');


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vssapevldqrtycxdjgjt.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/artImages/collection/**',
      },
    ],
  },

};

module.exports = nextConfig;
