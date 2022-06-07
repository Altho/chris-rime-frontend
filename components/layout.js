import TopMenu from "./topMenu/Topmenu";
import Head from "next/head";
import Footer from '../components/Footer'
import CookieConsent, { Cookies } from "react-cookie-consent";
import {useRouter} from "next/router";

export const siteTitle = 'Chris Rime official'

export default function Layout({ children, home }) {
    const locale = useRouter().locale
    return(
        <div className={'wrapper'}>
        <div className={'mainDiv'}>
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
            <div className={'container'}>
    {children}
            </div>
            <CookieConsent
                location="bottom"
                buttonText={locale === 'en' ? "I understand" : "J'accepte"}
                cookieName="acceptCookie"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                {locale === 'en' ? "Cookies are only used in order to operate. We do not sale or share your data. By interacting with this website you agree to our privacy policy" : "Ce site utilise des cookies pour son bon fonctionnement. Vos données ne sont ni vendues ni échangées. en utilisant ce site vous accepetez nos conditions d'utilisation. "}
            </CookieConsent>
            <Footer/>
    </div>
        </div>

    )
}