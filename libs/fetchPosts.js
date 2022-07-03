import qs from "qs";

export async function getBlogPosts({locale}){

    const query = qs.stringify({
        sort: ['publishedAt:desc'],
    }, {
        encodeValuesOnly: true,
    });

    const fetchBlog = await fetch(`${process.env.DB_HOST}/api/blogs?locale=${locale}&${query}&populate=*`)
    const blogPost = await fetchBlog.json()
    return blogPost.data.slice(0,3)
}

export async function getPostData(slug,locale,jwt) {
    const query = qs.stringify({
        filters: {
            slug: {
                $eq: slug,
            },
        },

    }, {
        encodeValuesOnly: true,
    });

    const post = await fetch(`${process.env.DB_HOST}/api/blogs?locale=${locale}&${query}&populate=*`,
        {
            headers: {

                Authorization: `Bearer ${jwt}`
            }
        }  )
    const postData = await post.json()



    return {

        ...postData.data
    }
}
