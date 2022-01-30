import TopMenu from "./topMenu/Topmenu";
import Head from "next/head";
import Footer from '../components/Footer'


export const siteTitle = 'Chris Rime official'

export default function Layout({ children, home }) {
    return(<div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="Chris Rime official"
                content="Chris Rime official website"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>

    <TopMenu />
    {children}
            <Footer/>
    </div>

    )
}