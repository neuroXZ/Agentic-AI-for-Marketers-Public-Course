/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TODO: remove "placehold.co" once app/page.tsx uses a real local
    // trainer photo (e.g. public/trainer.jpg) instead of the placeholder.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

module.exports = nextConfig;
