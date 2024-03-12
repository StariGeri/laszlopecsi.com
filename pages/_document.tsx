import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EN8CW121T9"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-EN8CW121T9');
          `}
        </Script>

      </Head>
      <body className='bg-background'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
