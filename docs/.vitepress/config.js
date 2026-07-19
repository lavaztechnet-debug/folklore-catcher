import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Folklore Field Catcher",
  description: "Regional Research & Field Notes",
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }, { text: 'Research Logs', link: '/research/' }]
  }
})
