import Layout from "../../components/layout";
import {getAlbumData} from "../../libs/fetchAlbums";
import Description from "../../components/albums/Description";
import AlbumInfos from "../../components/albums/AlbumInfos";
import {MediaSeparator} from "../../components/albums/MediaSeparator";
import Media from '../../components/albums/Media'
import ErrorPage from 'next/error'
import {Divider} from '@mantine/core';
import styles from '../../styles/[slug].module.css'
import Image from 'next'


export async function getStaticProps({params, locale}) {
    const albumData = await getAlbumData(params.slug, locale)
    console.log('albumDATA')
    console.log(albumData)
    return {
        props: {
            albumData
        }
    }
}

export async function getStaticPaths({locales}) {
    const fetchAlbums = await fetch('http://127.0.0.1:1337/api/albums?populate=*&locale=all')
    const albumsData = await fetchAlbums.json();
    const albums = albumsData.data

    const paths = albums.map((album) => locales.map((locale) => ({
        params: {slug: album.attributes.slug},
        locale
    })))
        .flat()

    return {paths, fallback: false}
}

export default function AlbumDetails({albumData}) {


        const album = albumData['0'].attributes;
        const albumImage = album.image.data.attributes.url


        return (
            <Layout>
                <AlbumTitle name={album.name} image={albumImage}/>
                <div className={styles.infoContainer}>
                <div className={styles.description}>
                    <Description description={album.description} auteur={album.descAuteur} />
                </div>
                <AlbumInfos release={album.date.toString()} label={album.label} artists={album.artistes} />
                </div>
                <MediaSeparator/>
                <Media/>

            </Layout>
        )

}

function AlbumTitle({name, image}) {
    const headerStyle = () => ({

            backgroundImage: `url(http://127.0.0.1:1337${image})`,


        })
    ;
    console.log('albumTitle')
    console.log(name)
    return (
        <div>
        <div className={styles.titleContainer} style={headerStyle()}>
            <div className={styles.filter}>
            <h1 className={styles.albumName} >{name}</h1>
            </div>
        </div>


        </div>


    )
}