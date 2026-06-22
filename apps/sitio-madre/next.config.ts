import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@educamates/ui"],

  // Allow images from the original site during development
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "educamates.edu.mx",
        pathname: "/**",
      },
    ],
  },

  // Redirect legacy routes to consolidated kebab-case versions (SEO 301)
  async redirects() {
    return [
      {
        source: "/educacioninicial",
        destination: "/maternal",
        permanent: true,
      },
      {
        source: "/educacion-inicial",
        destination: "/maternal",
        permanent: true,
      },
      {
        source: "/quienes-somos",
        destination: "/nosotros/quienes-somos",
        permanent: true,
      },
      {
        source: "/nuestro-equipo",
        destination: "/nosotros/nuestro-equipo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
