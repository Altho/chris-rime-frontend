export async function getBlogPosts({locale}){
    const fetchBlog = await fetch(`http://127.0.0.1:1337/api/blogs?locale=${locale}`)
    const blogPost = await fetchBlog.json()
    console.log(blogPost.data)
    return blogPost.data.slice(0,3)
}

