import Layout from "../components/layout";
import fetchDataFromURL from "../libs/fetchVideos";
import ReactPlayer from "react-player";
import Style from '../styles/online-teaching.module.css'
import {useRouter} from "next/router";
import {List, ThemeIcon, SimpleGrid, Button, Image, Loader} from '@mantine/core';
import {Music} from 'tabler-icons-react';
import Masonry from 'react-masonry-css'


export default function Publications() {
    const locale = useRouter().locale
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const intro = {
        fr: "Depuis plus de 15 ans, Chris Rime publie de façon régulière des articles, dossiers, études de style etc. dans les plus grands magazines spécialisés Français. Christophe Rime a publié plus de 150 articles et vidéos pédagogiques ",
        en: "For more than 15 years Chris Rime has written on a regular basis in most of the major French guitar magazines. Chris Rime has published and recorded over 150 articles and videos "
    }

    return (
        <Layout>
            <div className={Style.mainContainer}>
                <div className={Style.textWrapper}>
                    <div className={Style.textContainer}>,
                        <div className={Style.introText}>
                            {locale === 'en' ? intro.en : intro.fr}
                        </div>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className={Style.gridMasonry}
                            columnClassName={Style.grid_column}>
                            < Image src={'/images/mags/gp.png'}/>
                            < Image src={'/images/mags/guitarist.png'}/>
                            < Image src={'/images/mags/gxt.png'}/>
                        </Masonry>




                    </div>
                </div>
            </div>
            <div className={Style.gridWrapper}>
                <SimpleGrid
                    cols={2}
                    spacing="lg"
                    breakpoints={[
                        {maxWidth: 755, cols: 1, spacing: 'sm'},
                    ]}
                >
                    < Image src={'/images/mags/1.png'}
                    width={300}
                    />
                    < Image src={'/images/mags/2.jpeg'}
                            width={300}
                    />
                    < Image src={'/images/mags/3.jpeg'}
                            width={300}
                    />
                    < Image src={'/images/mags/4.jpeg'}
                            width={300}
                    />
                    < Image src={'/images/mags/5.jpeg'}
                            width={300}
                    />
                    < Image src={'/images/mags/7.png'}
                            width={300}
                    />
                    < Image src={'/images/mags/8.png'}
                            width={300}
                    />
                    < Image src={'/images/mags/9.png'}
                            width={300}
                    />

                </SimpleGrid>
            </div>

        </Layout>


    )
}