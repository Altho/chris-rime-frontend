import styles from '../styles/Home.module.css'
import  {getAlbums} from '../libs/fetchAlbums';
import Layout, {siteTitle} from "../components/layout";
import ShowAlbums from "../components/albums/showAlbums";
import Album from '../components/albums/Album'
import {SimpleGrid} from "@mantine/core";



export async function getStaticProps({locale}) {
    const albums = await getAlbums({locale})
    return {

        props: {
            albums


        }
    }
}

export default function Albums({albums}){
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
                    <ShowAlbums albums={albums}/>
                    </SimpleGrid>
                </div>


            <footer className={styles.footer}>
            </footer>
        </Layout>
    )
}

