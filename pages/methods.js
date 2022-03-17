import styles from '../styles/Home.module.css'
import  {getMethods} from '../libs/fetchMethods';
import Layout, {siteTitle} from "../components/layout";
import ShowMethods from "../components/methods/ShowMethods";
import {SimpleGrid} from "@mantine/core";



export async function getStaticProps({locale}) {
    const methods = await getMethods({locale})
    return {

        props: {
            methods


        },
        revalidate: 10,
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

