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
      },
      {
        text: 'Unit Tests',
        items: [
          { text: '001: CAFEBABE', link: '/guides/tests/001' },
          { text: '002: String Comparison', link: '/guides/tests/002' },
          { text: '003: Data Overflow and Underflow', link: '/guides/tests/003' },
          { text: '004: Trap from Autoboxing', link: '/guides/tests/004' },
          { text: '005: Overloading Arguments Resolution', link: '/guides/tests/005' }
        ]
      },
      {
        text: 'Benchmarks',
        items: [
          { text: '001: Method Calls', link: '/guides/benchmarks/001' },
          { text: '002: Setting Field Values', link: '/guides/benchmarks/002' },
          { text: '003: Getting Field Values', link: '/guides/benchmarks/003' },
          { text: '004: Concatenating Strings', link: '/guides/benchmarks/004' },
          { text: '005: Set vs List ~ Contains', link: '/guides/benchmarks/005' }
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
