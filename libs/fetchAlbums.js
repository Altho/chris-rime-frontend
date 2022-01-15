export async function getAlbums({locale}){
    console.log(locale)
    const fetchImages = await fetch(`http://127.0.0.1:1337/api/albums?populate=*&locale=${locale}`)
    const imageData = await fetchBlog.json()
    return imageData.data
}
