import '../styles/globals.css'
import {pdfjs} from 'react-pdf';
import {NotificationsProvider} from '@mantine/notifications';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/bar.css'; //styles of nprogress
import { ReactQueryDevtools } from "react-query/devtools";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function MyApp({Component, pageProps}) {
    return (
        <QueryClientProvider client={queryClient}>
        <NotificationsProvider>


            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>

        </NotificationsProvider>

        </QueryClientProvider>


    )
}

export default MyApp



