/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/LogicMinds', // Matches the exact name from your previous browser screenshot
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
