import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@import "@/styles/utils/variables.scss";`,
  },
};

export default nextConfig;
