
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webperfection.co.in",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;