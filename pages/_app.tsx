import type { AppProps } from "next/app"
import '@libs/Tailwind.css'
import Head from "@components/Head"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head /> 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
