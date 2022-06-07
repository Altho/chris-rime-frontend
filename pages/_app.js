import '../styles/globals.css'
import {pdfjs} from 'react-pdf';
import {NotificationsProvider} from '@mantine/notifications';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/bar.css'; //styles of nprogress

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function MyApp({Component, pageProps}) {
    return (
        <NotificationsProvider>


            <Component {...pageProps} />

        </NotificationsProvider>

    )
}

export default MyApp



