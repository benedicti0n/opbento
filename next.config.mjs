/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["puppeteer-core"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "*"
      },
      {
        hostname: 'avatars.githubusercontent.com',
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.map$/,
      use: 'raw-loader',
      type: 'asset/resource'
    });
    return config;
  }
};

export default nextConfig;
