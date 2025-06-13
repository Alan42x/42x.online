import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://42x.online',
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    // 使用 Sharp 服务
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // 支持现代格式
    formats: ['webp', 'avif'],
    // 默认使用 WebP
    defaultFormat: 'webp',
    // 优化质量
    quality: 75,
    // 启用缓存
    cacheDir: '.astro/image-cache',
    // 添加尺寸优化
    densities: [1, 2],
    // 启用响应式图片
    remotePatterns: [{ protocol: "https" }]
  },
  build: {
    // 优化构建输出
    assets: '_assets',
    inlineStylesheets: 'auto'
  },
  output: 'static',
  compressHTML: true
});

