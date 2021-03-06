import qs from 'qs'

export async function getArticles({locale}, jwt,page, size) {
    const query = qs.stringify({
            pagination: {
                start: page,
                limit: size,
            },

            sort: ['date:desc'],
        },

        {
            encodeValuesOnly: true,
        });
    const fetchArticles = await fetch(`${process.env.DB_HOST}/api/articles?locale=${locale}&populate=*&${query}`,
        {
            headers: {

                Authorization: `Bearer ${jwt}`
            }
        })
    const articles = await fetchArticles.json()
    const articlesArray = {
        articlesList: articles.data ,
        total: articles.meta.pagination.total
    }


    return articlesArray
}

// export async function getMethodData(slug,locale, jwt) {
//     const query = qs.stringify({
//         filters: {
//             slug: {
//                 $eq: slug,
//             },
//         },
//
//     }, {
//         encodeValuesOnly: true,
//     });
//
//     const post = await fetch(`${process.env.DB_HOST}/api/methods/?locale=all&${query}&locale=${locale}&populate=*`,
//         { headers: {
//
//                 Authorization: `Bearer ${jwt}`
//             }})
//     const postData = await post.json()
//     console.log(post)
//
//
//     return {
//
//         ...postData.data
//     }
// }