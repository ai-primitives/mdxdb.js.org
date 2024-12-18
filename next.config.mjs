import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: []
  },
  flexsearch: {
    codeblocks: true
  }
})

export default withNextra({
  reactStrictMode: true
})
