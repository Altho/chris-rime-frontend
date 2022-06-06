import styles from '../styles/home.module.css'
import  {getAlbums, getSideAlbums} from '../libs/fetchAlbums';
import Layout, {siteTitle} from "../components/layout";
import ShowAlbums from "../components/albums/showAlbums";
import {useRouter} from "next/router";
import Album from '../components/albums/Album'
import ListenSeparator from "../components/albums/ListenSeparator";
import {SimpleGrid} from "@mantine/core";



export async function getStaticProps({locale}, ctx) {
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
    const albums = await getAlbums({locale}, loginResponseData.jwt)
    const sideman = await getSideAlbums({locale}, loginResponseData.jwt)
    return {

        props: {
            albums,
            sideman


        },revalidate: 10
    }
}

export default function Albums({albums, sideman}){
    const locale = useRouter().locale
    return(
        <Layout>
            <div className={styles.albumTitleContainer}>
                <div className={styles.albumTitle}>{locale === 'en' ? "Chris Rime's Albums" : "Albums de Chris Rime"}</div>

                <div className={styles.chrisAlbumGallery}>
                <SimpleGrid cols={4}
                            spacing="lg"
                            breakpoints={[
                                { maxWidth: 980, cols: 3, spacing: 'md' },
                                { maxWidth: 755, cols: 2, spacing: 'sm' },
                                { maxWidth: 600, cols: 1, spacing: 'sm' },
                            ]}>
                    <ShowAlbums albums={albums} theme={'light'}/>
                </SimpleGrid>
            </div>
            <ListenSeparator />
                <div >

                <div className={styles.sidemanGallery}>
                <div className={styles.sidemanTitle}>{locale === 'en' ? "Albums featuring Chris Rime" : "Albums avec Chris Rime"}</div>
                <SimpleGrid cols={4}
                            spacing="lg"
                            breakpoints={[
                                { maxWidth: 980, cols: 3, spacing: 'md' },
                                { maxWidth: 755, cols: 2, spacing: 'sm' },
                                { maxWidth: 600, cols: 1, spacing: 'sm' },
                            ]}>
                    <ShowAlbums albums={sideman} theme={'dark'}/>
                </SimpleGrid>
                </div>
            </div>
        </div>

            <footer className={styles.footer}>
            </footer>
        </Layout>
    )
}

