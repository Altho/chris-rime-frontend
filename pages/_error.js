import Styles from '../styles/error.module.css'
import {useRouter} from "next/router";
import Link from 'next/link'
import Layout from "../components/layout";
import {Image} from "@mantine/core";

function Error({ statusCode }) {
    const locale = useRouter().locale
    return (
        <Layout>
            <div className={Styles.errorContainer}>
        <div className={Styles.errorCode}>{statusCode}</div>
                <p className={Styles.errorMessage}>
                    {statusCode===404 ? locale === 'en' ? "Sorry, this page doesn't exist" : "Désolé, cette page n'existe pas" : locale === 'en' ? 'Sorry, an error happened' : "désole, une erreur s'est produite"}
                </p>
                <Image src={'/images/404.svg'} />
            <Link href={'/'}><div className={Styles.backMessage}>{locale === 'en' ? ' << Back to christopherime.com' : '<< Retourner sur christopherime.com'}</div></Link>
            </div>
        </Layout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error