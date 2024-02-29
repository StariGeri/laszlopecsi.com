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
      {
        protocol: 'https',
        hostname: 'vssapevldqrtycxdjgjt.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/artImages/hero_images/**',
      },
    ],
  },
  output: "standalone",

};

module.exports = nextConfig;
