import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                            <link
                                href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@1,500&family=Nanum+Gothic&family=Orbitron&display=swap"
                                rel="stylesheet" />
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