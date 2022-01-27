import Layout from "../../components/layout";
import { getAlbumData} from "../../libs/fetchAlbums";

export async function getStaticProps({ params,locale}) {
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

    return { paths, fallback: false }
}

export default function AlbumDetails({albumData}){
    const album = albumData['0'].attributes;
    return(
        <Layout>
            {album.name}
            {album.locale}
        </Layout>
    )
}