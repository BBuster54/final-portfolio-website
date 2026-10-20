import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this app when other projects exist alongside it.
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [{
      source: "/demos/carbon-footprint-tracker",
      destination: "/demos/carbon-footprint-tracker/index.html",
      permanent: false,
    }];
  },
  async headers() {
    return [{
      source: "/demos/carbon-footprint-tracker/:path*",
      headers: [
        { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self' data: blob:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    }];
  },
};

export default nextConfig;
