import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './_layout'

function App({ Component, pageProps }: AppProps) {

  // check if we are on the 404 page
  if (Component.name === 'Custom404') {
    return <Component {...pageProps} />
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;
