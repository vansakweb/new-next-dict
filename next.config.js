/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ch-kh-dict-doc.vercel.app",
        port: "",
        pathname: "/document/**",
      },
    ],
  },
};

module.exports = nextConfig;

// https://ch-kh-dict-doc.vercel.app