import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com', 'pan.vinua.cn']
  }
};

export default withMDX(config);
