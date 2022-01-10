export async function getBlogPosts(){
    const fetchBlog = await fetch('http://127.0.0.1:1337/api/blogs')
    const blogPost = await fetchBlog.json()
    console.log(blogPost.data)
    return blogPost.data
}

