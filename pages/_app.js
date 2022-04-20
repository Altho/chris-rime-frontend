import '../styles/globals.css'
import { pdfjs } from 'react-pdf';
import { SessionProvider } from "next-auth/react"


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function MyApp({Component, pageProps: { session, ...pageProps }}) {
  return (
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>

          )
}

export default MyApp



