import styles from '../styles/Home.module.css'
import  {getAlbums} from '../libs/fetchAlbums';
import Layout, {siteTitle} from "../components/layout";
import ShowAlbums from "../components/albums/showAlbums";
import Album from '../components/albums/Album'



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
                    <ShowAlbums albums={albums}/>

                </div>


            <footer className={styles.footer}>
            </footer>
        </Layout>
    )
}

