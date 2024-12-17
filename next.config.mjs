import nextra from 'nextra'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  defaultShowCopyCode: true,
  search: {
    codeblocks: false
  }
})

export default withNextra({
  reactStrictMode: true
})
