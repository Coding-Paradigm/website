import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Coding Paradigm',
  description: 'Understand the why. Master the how.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Java Components',
        items: [
          { text: 'Java Virtual Machine', link: '/guides/jvm' },
          { text: 'Garbage Collection', link: '/guides/gc' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Coding-Paradigm' }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/Coding-Paradigm/website/blob/master/LICENSE">MIT License</a>',
      copyright: 'Copyright © 2025-present <a href="https://github.com/Coding-Paradigm">Coding Paradigm</a>',
    },
  }
})
