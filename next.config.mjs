/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROD_URL: process.env.PROD_URL,
  },
};

export default nextConfig;
