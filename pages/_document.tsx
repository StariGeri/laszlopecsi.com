import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleAnalytics } from '@next/third-parties/google';


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className='bg-background'>
        <Main />
        <NextScript />
      </body>
      <GoogleAnalytics gaId='G-EN8CW121T9'/>
    </Html>
  )
}
