import {useRouter} from "next/router";
import qs from 'qs'

export async function getAlbums({locale}) {
    const qs = require('qs');
    const query = qs.stringify({
        sort: ['date:desc'],
    }, {
        encodeValuesOnly: true,
    });
    console.log(query)
    const fetchImages = await fetch(`http://127.0.0.1:1337/api/albums?locale=${locale}&populate=*&${query}`)
    const imageData = await fetchImages.json()

    return imageData.data
}

export async function getAlbumId({locales}) {

    const data = await getAlbums({locale: 'all'});


    const paths = data.map((album) => locales.map((locale) => ({
        params: {
            slug: album.attributes.slug,
            locale
        }
    })))

   return paths
}

export async function getAlbumData(slug,locale) {
    const query = qs.stringify({
        filters: {
            slug: {
                $eq: slug,
            },
        },

    }, {
        encodeValuesOnly: true,
    });
    console.log(query)
    console.log('locale!!!')
    console.log(locale)
    const album = await fetch(`http://127.0.0.1:1337/api/albums/?locale=all&${query}&locale=${locale}&populate=*`)
    const albumData = await album.json()
    console.log(album)


    return {

        ...albumData.data
    }
}