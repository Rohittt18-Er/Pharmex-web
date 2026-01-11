import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['lucide-react'],
  experimental: {
    serverActions: {
      allowedOrigins: ["192.168.205.98", "localhost:3000"],
    },
  },
  // Adding allowedDevOrigins as a top-level option based on the warning.
  allowedDevOrigins: ["192.168.205.98"],
};

export default nextConfig;
