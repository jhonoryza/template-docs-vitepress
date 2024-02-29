import sidebar from "./sidebar";
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig ({
  lang: 'en-US',
  title: "docs",
  description: "docs",
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'ayu-dark',
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'FAQ', link: '/faq/',}
    ],
    sidebar: sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present'
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/jhonoryza/template-docs-vitepress'}
    ],
    search: {
      provider: 'local'
    }
  }
})
