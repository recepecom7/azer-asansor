import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/hizmet-bolgeleri",
        destination: "/antalya-hizmet-bolgeleri",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
