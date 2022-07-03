import qs from 'qs'

export async function getMethods({locale}, jwt) {
    const query = qs.stringify({
        sort: ['date:desc'],
    }, {
        encodeValuesOnly: true,
    });
    const fetchMethods = await fetch(`${process.env.DB_HOST}/api/methods?locale=${locale}&populate=*&${query}`,
        {
            headers: {

                Authorization: `Bearer ${jwt}`
            }
        })
    const methods = await fetchMethods.json()

    return methods.data
}

export async function getMethodData(slug,locale, jwt) {
    const query = qs.stringify({
        filters: {
            slug: {
                $eq: slug,
            },
        },

    }, {
        encodeValuesOnly: true,
    });

    const post = await fetch(`${process.env.DB_HOST}/api/methods/?locale=all&${query}&locale=${locale}&populate=*`,
        { headers: {

                Authorization: `Bearer ${jwt}`
            }})
    const postData = await post.json()


    return {

        ...postData.data
    }
}