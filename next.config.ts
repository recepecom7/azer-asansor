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
      {
        source: "/antalya-tasinma-hazirlik-rehberi",
        destination: "/blog/antalya-tasinma-hazirlik-rehberi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
