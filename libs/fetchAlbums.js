import {useRouter} from "next/router";
import qs from 'qs'

export async function getAlbums({locale}, jwt) {
    // const qs = require('qs');
    const query = qs.stringify({
        sort: ['date:desc'],
            filters: {
                perso: {
                    $eq: true,
                },
            },
    },

        {
        encodeValuesOnly: true,
    });
    console.log(query)
    const fetchImages = await fetch(`${process.env.DB_HOST}/api/albums?locale=${locale}&populate=*&${query}`, {

        headers: {

            Authorization: `Bearer ${jwt}`

        }
    })
    const imageData = await fetchImages.json()

    return imageData.data
}

export async function getSideAlbums({locale}, jwt) {
    // const qs = require('qs');
    const query = qs.stringify({
            sort: ['famille:desc', 'date:desc'],
            filters: {
                perso: {
                    $eq: false,
                },
            },

        },

        {
            encodeValuesOnly: true,
        });
    console.log(query)
    const fetchImages = await fetch(`${process.env.DB_HOST}/api/albums?locale=${locale}&populate=*&${query}`, {

        headers: {

            Authorization: `Bearer ${jwt}`

        }
    })
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

export async function getAlbumData(slug,locale, jwt) {
    const query = qs.stringify({
        filters: {
            slug: {
                $eq: slug,
            },
        },

    }, {
        encodeValuesOnly: true,
    });

    const post = await fetch(`${process.env.DB_HOST}/api/albums/?locale=all&${query}&locale=${locale}&populate=*`,{
        headers: {

            Authorization: `Bearer ${jwt}`

        }
    })
    const postData = await post.json()


    return {

        ...postData.data
    }
}