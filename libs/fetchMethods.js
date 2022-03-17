import qs from 'qs'

export async function getMethods({locale}) {
    const query = qs.stringify({
        sort: ['date:desc'],
    }, {
        encodeValuesOnly: true,
    });
    const fetchMethods = await fetch(`${process.env.DB_HOST}/api/methods?locale=${locale}&populate=*&${query}`)
    const methods = await fetchMethods.json()

    return methods.data
}

export async function getMethodData(slug,locale) {
    const query = qs.stringify({
        filters: {
            slug: {
                $eq: slug,
            },
        },

    }, {
        encodeValuesOnly: true,
    });

    const post = await fetch(`${process.env.DB_HOST}/api/methods/?locale=all&${query}&locale=${locale}&populate=*`)
    const postData = await post.json()
    console.log(post)


    return {

        ...postData.data
    }
}