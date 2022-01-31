import Masonry from 'react-masonry-css'
import {Image, Modal} from '@mantine/core'
import style from '../../styles/gallery.module.css'
import Layout from '/components/layout'
import {useState} from "react";
import qs from 'qs'


export async function getStaticProps(){
    const query = qs.stringify({
        sort: ['publishedAt:desc'],
    }, {
        encodeValuesOnly: true,
    });
    const fetchPhotos = await fetch(`http://127.0.0.1:1337/api/photos?${query}&populate=*`)
    const photoData = await fetchPhotos.json()
    const photos = photoData.data['0'].attributes.image.data


    return {

        props: {
            photos


        }
    }
}

export default function Gallery({photos}){


    const [opened, setOpened] = useState(false);
    const [url, setUrl] = useState('')
    const handleClick = (photo) => {
        setOpened(true);
        setUrl(photo);
    }
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    console.log(photos)
    return(

        <Layout>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                hideCloseButton
                centered
                size="90vh"
                overlayOpacity={0.80}
                padding={0}
                radius={0}
                noFocusTrap

            >
                <Image onClick={() => setOpened(false)} src={url}/>
            </Modal>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={style.grid}
                columnClassName={style.grid_column}>
                {photos.map(({attributes : image})=>{
                    return(
                        <Image onClick={() => handleClick(`http://localhost:1337${image.url}`)} src={`http://localhost:1337${image.url}`}/>
                    )
                })}
            </Masonry>

        </Layout>
    )
}