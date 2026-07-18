/** @type {import('next').NextConfig} */
const repoBasePath = '/harshavardan-portfolio';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
}

module.exports = nextConfig
