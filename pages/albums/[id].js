import Layout from "../../components/layout";
import {getAlbumId, getAlbumData, getAlbums} from "../../libs/fetchAlbums";

export async function getStaticProps({ params}) {
    const albumData = await getAlbumData(params.id)
    return {
        props: {
            albumData
        }
    }
}

export async function getStaticPaths({locales}) {
    const fetchAlbums = await fetch('http://127.0.0.1:1337/api/albums?populate=*')
    const albumsData = await fetchAlbums.json();
    const albums = albumsData.data

    const paths = albums.map((album) => locales.map((locale) => ({
        params: {id: album.id.toString()},
        locale
    })))
        .flat()

    return { paths, fallback: false }
}

export default function AlbumDetails({albumData}){
    return(
        <Layout>
            {albumData.attributes.name}
        </Layout>
    )
}