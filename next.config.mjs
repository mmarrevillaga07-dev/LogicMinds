/** @type {import('next').NextConfig} */
const nextConfig = {
  // Forces Next.js to generate a static "out" folder instead of a dynamic server build
  output: 'export',
  
  // Forces asset links to match your exact GitHub repository path routing
  basePath: '/LogicMinds', // Matches the exact name from your previous browser screenshot
  
  // Necessary because GitHub Pages lacks an image optimization server background
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
