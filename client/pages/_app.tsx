import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { default as Axios  } from 'axios'

export default function App({ Component, pageProps }: AppProps) {
  
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERRVER_BASE_URL + "/api";
  
  return <Component {...pageProps} />
}
