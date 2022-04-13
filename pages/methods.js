import styles from '../styles/Home.module.css'
import  {getMethods} from '../libs/fetchMethods';
import Layout, {siteTitle} from "../components/layout";
import ShowMethods from "../components/methods/ShowMethods";
import {SimpleGrid} from "@mantine/core";
import {parseCookies, setCookie} from "nookies";



export async function getServerSideProps({locale}, ctx) {
    const jwt = parseCookies(ctx).jwt

    if (jwt) {
        const methods = await getMethods({locale}, jwt)
        return {

            props: {
                methods


            },
        }
    }

    const loginData = {

        identifier: process.env.DB_EMAIL,

        password: process.env.DB_PASSWORD,

    };

    const login = await fetch(`${process.env.DB_HOST}/api/auth/local`, {

        method: 'POST',

        headers: {

            Accept: 'application/json',

            'Content-Type': 'application/json',

        },

        body: JSON.stringify(loginData),

    });

    const loginResponseData = await login.json();

    setCookie(ctx, 'jwt', loginResponseData.jwt, {

        maxAge: 30 * 24 * 60 * 60,

        path: '/',

    })

    const methods = await getMethods({locale}, loginResponseData.jwt)
    return {

        props: {
            methods


        }

    }
}

export default function Methods({methods}){
    return(
        <Layout>

            <div className={styles.albumGallery}>
                <SimpleGrid cols={4}
                            spacing="lg"
                            breakpoints={[
                                { maxWidth: 980, cols: 3, spacing: 'md' },
                                { maxWidth: 755, cols: 2, spacing: 'sm' },
                                { maxWidth: 600, cols: 1, spacing: 'sm' },
                            ]}>
                    <ShowMethods methods={methods}/>
                </SimpleGrid>
            </div>


            <footer className={styles.footer}>
            </footer>
        </Layout>
    )
}

