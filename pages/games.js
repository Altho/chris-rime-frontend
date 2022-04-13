import styles from '../styles/Home.module.css'
import  {getGames} from '../libs/fetchGames';
import Layout, {siteTitle} from "../components/layout";
import ShowGames from "../components/games/ShowGames";
import {SimpleGrid} from "@mantine/core";
import { parseCookies, setCookie }  from 'nookies'




export async function getServerSideProps({locale}, ctx) {
    const jwt = parseCookies(ctx).jwt

    if (jwt) {

        const games = await getGames({locale}, jwt)
        return {

            props: {
                games


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

    const games = await getGames({locale}, loginResponseData.jwt)
    return {

        props: {
            games


        },
    }

}

export default function Games({games}){
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
                    <ShowGames games={games}/>
                </SimpleGrid>
            </div>


            <footer className={styles.footer}>
            </footer>
        </Layout>
    )
}

