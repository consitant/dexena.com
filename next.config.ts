import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // Video liegt auf consitant.com (nginx) — transparent unter dexena.com/alea.mp4 servieren
        source: "/alea.mp4",
        destination: "https://consitant.com/alea.mp4",
      },
    ];
  },
  async headers() {
    return [
      {
        // Static brand/email assets — stable URLs, long-lived caching
        source: "/img/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
