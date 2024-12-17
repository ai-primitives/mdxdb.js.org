export default {
  project: {
    link: 'https://github.com/ai-primitives/mdxdb'
  },
  docsRepositoryBase: 'https://github.com/ai-primitives/mdxdb.js.org/blob/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – mdxdb'
    }
  },
  logo: (
    <>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>mdxdb</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="mdxdb: MDX-based database with vector search" />
      <meta name="og:title" content="mdxdb: MDX-based database with vector search" />
    </>
  ),
  footer: {
    text: `MIT ${new Date().getFullYear()} © ai-primitives`
  }
}
