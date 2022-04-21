import '../styles/globals.css'
import { pdfjs } from 'react-pdf';
import { SessionProvider } from "next-auth/react"


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps} />


          )
}

export default MyApp



