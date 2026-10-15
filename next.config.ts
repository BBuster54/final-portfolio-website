import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this app when other projects exist alongside it.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
