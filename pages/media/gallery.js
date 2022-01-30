

export async function getStaticProps(){
    const fetchPhotos = await fetch(`http://127.0.0.1:1337/api/photos?populate=*`)
    const photoData = await fetchPhotos.json()
    const photos = photoData.data['0'].attributes.image.data


    return {

        props: {
            photos


        }
    }
}

export default function Gallery({photos}){
    console.log(photos)
    return(
        <>
            {photos.map(({attributes : image})=>{
                return(
                <img src={`http://localhost:1337${image.url}`}/>
                )
            })}
        </>
    )
}