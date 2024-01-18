/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["mynirhomqqlmayjfxemr.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mynirhomqqlmayjfxemr.supabase.co",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
