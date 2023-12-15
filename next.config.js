/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sobre',
        destination: '/about',
      },
    ];
  },
};

module.exports = nextConfig;
