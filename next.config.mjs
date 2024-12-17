import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: false
  },
  latex: true,
  contentDirBasePath: '/'
})

export default withNextra({
  reactStrictMode: true,
  transpilePackages: ['nextra']
})
