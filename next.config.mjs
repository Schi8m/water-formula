// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir удален, так как App Router теперь используется по умолчанию
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
  reactStrictMode: true,
  transpilePackages: ['@fontsource/akt'],
  // turbopack: {}, // Раскомментируйте, если хотите явно указать пустую конфигурацию
};

export default nextConfig;