import styles from '../styles/home.module.css'
import  {getMovies} from '../libs/fetchMovies';
import Layout, {siteTitle} from "../components/layout";
import ShowMovies from "../components/movies/ShowMovies";
import {SimpleGrid} from "@mantine/core";
import { parseCookies, setCookie }  from 'nookies'




export async function getStaticProps({locale}, ctx) {
    const jwt = parseCookies(ctx).jwt

    if (jwt) {

        const movies = await getMovies({locale}, jwt)
        return {

            props: {
                movies


            },revalidate: 10
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

    const movies = await getMovies({locale}, loginResponseData.jwt)
    return {

        props: {
            movies


        },revalidate: 10
    }

}

export default function Movies({movies}){
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
                    <ShowMovies movies={movies}/>
                </SimpleGrid>
            </div>


            <footer className={styles.footer}>
            </footer>
        </Layout>
    )
}
