import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: '/',
})

export default withNextra({
  reactStrictMode: true,
})
