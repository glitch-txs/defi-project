import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="DeFi personal project" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='shortcut icon' href='http://localhost:3000/logo.png' type='image/png'/>
      </Head>
      <body>
        <Main />
        <div id='modal'/>
        <NextScript />
      </body>
    </Html>
  )
}
