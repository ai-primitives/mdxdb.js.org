import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'nextra-theme-docs/style.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.scrollTo(0, 0)
    })
  }, [router])
  return <Component {...pageProps} />
}
