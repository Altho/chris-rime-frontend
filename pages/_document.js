import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
                        <link rel="icon" type="image/png" href="/assets/favicon.png" />

                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument