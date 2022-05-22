import qs from 'qs'

export async function getArticles({locale}, jwt,page, size) {
    const query = qs.stringify({
            pagination: {
                page: page,
                pageSize: size,
            },

        sort: ['date:desc'],
    },

        {
        encodeValuesOnly: true,
    });
    const fetchArticles = await fetch(`${process.env.DB_HOST}/api/articles?_limit=5&_start=0&locale=${locale}&populate=*&${query}`,
        {
            headers: {

                Authorization: `Bearer ${jwt}`
            }
        })
    const articles = await fetchArticles.json()
    const articlesArray = {
        articlesList: articles.data ,
        pages: articles.meta.pagination.pageCount
    }
    console.dir('---ARTICLES---')
    console.dir(articles)
    console.dir('---ARTICLES---')


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