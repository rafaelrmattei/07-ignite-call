/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'], // PAGE EXTENSIONS: Todo arquivo que vai virar uma página precisa ter a extensão page.tsx, e os aquivos de api a extensão api.ts
}

module.exports = nextConfig
