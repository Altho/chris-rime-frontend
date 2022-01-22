import {useRouter} from "next/router";

export async function getAlbums({locale}) {
    const fetchImages = await fetch(`http://127.0.0.1:1337/api/albums?locale=${locale}&populate=*`)
    const imageData = await fetchImages.json()
    return imageData.data
}

export async function getAlbumId({locales}) {

    const data = await getAlbums({locale: 'en'});

    const paths = data.map((album) => locales.map((locale) => ({
        params: {
            id: album.id.toString(),
            locale
        }
    })))

   return paths
}

export async function getAlbumData(id) {
    const album = await fetch(`http://127.0.0.1:1337/api/albums/${id}?populate=*&`)
    const albumData = await album.json()


    return {
        id,
        ...albumData.data
    }
}