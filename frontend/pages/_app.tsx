import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../layout/Layout'
import DeFiProvider from '../context/useContext'
import NextNProgress from "nextjs-progressbar"

function MyApp({ Component, pageProps }: AppProps) {
 

  return  <>
            <NextNProgress color="#6C0E15" />
            <DeFiProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </DeFiProvider>
          </>
}

export default MyApp
