import '../styles/globals.css'
import { pdfjs } from 'react-pdf';
import { NotificationsProvider } from '@mantine/notifications';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function MyApp({ Component, pageProps }) {
  return (
      <NotificationsProvider>

      <Component {...pageProps} />

      </NotificationsProvider>

          )
}

export default MyApp



