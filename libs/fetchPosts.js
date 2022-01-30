import qs from "qs";

export async function getBlogPosts({locale}){

    const query = qs.stringify({
        sort: ['publishedAt:desc'],
    }, {
        encodeValuesOnly: true,
    });

    console.log(locale)
    const fetchBlog = await fetch(`http://127.0.0.1:1337/api/blogs?locale=${locale}&${query}&populate=*`)
    const blogPost = await fetchBlog.json()
    console.log(blogPost.data)
    return blogPost.data.slice(0,3)
}

export async function getPostData(slug,locale) {
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
    const post = await fetch(`http://127.0.0.1:1337/api/blogs/?locale=${locale}&${query}&populate=*`)
    const postData = await post.json()
    console.log('post query !')
    console.log(postData.data)


    return {

        ...postData.data
    }
}

