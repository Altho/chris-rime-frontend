import Masonry from 'react-masonry-css'
import {Image,Skeleton, Modal, Loader} from '@mantine/core'
import style from '../../styles/gallery.module.css'
import Layout from '/components/layout'
import {useState} from "react";
import qs from 'qs'
import { parseCookies, setCookie }  from 'nookies'



export async function getStaticProps(ctx){
    const jwt = parseCookies(ctx).jwt

    if(jwt) {
        const query = qs.stringify({
            sort: ['publishedAt:desc'],
        }, {
            encodeValuesOnly: true,
        });
        const fetchPhotos = await fetch(`${process.env.DB_HOST}/api/photos?${query}&populate=*`, {
            headers: {

                Authorization: `Bearer ${jwt}`
            }
        })
        const photoData = await fetchPhotos.json()
        const photos = photoData.data['0'].attributes.image.data


        return {

            props: {
                photos


            },revalidate: 10,
        }
    }

    const loginData = {

        identifier: process.env.DB_EMAIL,

        password: process.env.DB_PASSWORD,

    };

    const login = await fetch(`${process.env.DB_HOST}/api/auth/local`, {

        method: 'POST',

        headers: {

            Accept: 'application/json',

            'Content-Type': 'application/json',

        },

        body: JSON.stringify(loginData),

    });

    const loginResponseData = await login.json();

    setCookie(ctx, 'jwt', loginResponseData.jwt, {

        maxAge: 30 * 24 * 60 * 60,

        path: '/',

    })

    const query = qs.stringify({
        sort: ['publishedAt:desc'],
    }, {
        encodeValuesOnly: true,
    });
    const fetchPhotos = await fetch(`${process.env.DB_HOST}/api/photos?${query}&populate=*`, {
        headers: {

            Authorization: `Bearer ${loginResponseData.jwt}`
        }
    })
    const photoData = await fetchPhotos.json()
    const photos = photoData.data['0'].attributes.image.data


    return {

        props: {
            photos


        },revalidate: 10,
    }
}

export default function Gallery({photos}){


    const [opened, setOpened] = useState(false);
    const [url, setUrl] = useState('')
    const [credit, setCredit] = useState('')
    const handleClick = (photo, caption) => {
        setOpened(true);
        setUrl(photo);
        setCredit(caption)
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
                withCloseButton={false}
                centered
                size="90vh"
                overlayOpacity={0.80}
                padding={0}
                radius={0}
                noFocusTrap

            >
                <div className={style.container}>
                <Image  onClick={() => setOpened(false)} src={url} />
                <div className={style.text}>{credit && `© ${credit}`}</div>

                </div>
            </Modal>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={style.grid}
                columnClassName={style.grid_column}>
                {photos.map(({attributes : image})=>{
                    return(
                        <div key={image.url} className={style.container}>
                        <Image key={image.url}  withPlaceholder placeholder={<Skeleton/>} onClick={() => handleClick(`${image.url}`, `${image.caption}`)} src={`${image.url}`}/>
                            <div className={style.text}>{image.caption && `© ${image.caption}`}</div>

                        </div>
                    )
                })}
            </Masonry>

        </Layout>
    )
}