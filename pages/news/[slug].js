import Layout from "../../components/layout";
import {getPostData} from "../../libs/fetchPosts";
import BlogHeader from "../../components/blog/blogHeader";
import HeaderSeparator from "../../components/blog/headerSeparator";
import BlogPost from "../../components/blog/blogPost";
import Description from "../../components/albums/Description";
import AlbumInfos from "../../components/albums/AlbumInfos";
import {MediaSeparator} from "../../components/albums/MediaSeparator";
import ListenSeparator from "../../components/albums/ListenSeparator"
import Media from '../../components/albums/Media'
import Listen from '../../components/albums/Listen'
import ErrorPage from 'next/error'
import {Divider} from '@mantine/core';
import styles from '../../styles/[slug].module.css'
import {Image} from '@mantine/core'
import { parseCookies, setCookie }  from 'nookies'
import qs from "qs";



export async function getServerSideProps({query, locale}, ctx) {
    const jwt = parseCookies(ctx).jwt

    if (jwt) {
        const postData = await getPostData(query.slug, locale, jwt)
        console.log('albumDATA')
        console.log(postData)
        return {
            props: {
                postData
            }
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



    const postData = await getPostData(query.slug, locale, loginResponseData.jwt)
    return {
        props: {
            postData
        }
    }


}



export default function postsDetails({postData}) {

    console.log('Post Data !')
    console.log(postData)
    const post = postData['0'].attributes;
    const postImage = post.image.data.attributes.url
    console.log('----POST-MARKDOWN-------')
    console.log(post.content)
    console.log('----POST-MARKDOWN-------')



    return (
        <Layout>
            <BlogHeader title={post.title} img={postImage} date={post.updatedAt} />
            {/*<HeaderSeparator />*/}
            <BlogPost content={post.content} />
            {/*<AlbumTitle name={album.name} image={albumImage}/>*/}
            {/*<div className={styles.infoContainer}>*/}
            {/*<div className={styles.description}>*/}
            {/*    <Description description={album.description} auteur={album.descAuteur} buy={album.buy} />*/}
            {/*</div>*/}
            {/*<AlbumInfos release={album.date.toString()} label={album.label} artists={album.artistes} />*/}
            {/*</div>*/}
            {/*<MediaSeparator/>*/}
            {/*<Media media={album.videos}/>*/}
            {/*<ListenSeparator/>*/}
            {/*<Listen spotify={album.spotify} apple={album.apple} deezer={album.deezer}/>*/}
            

        </Layout>
    )

}

// function AlbumTitle({name, image}) {
//     const headerStyle = () => ({
//
//             backgroundImage: `url(http://127.0.0.1:1337${image})`,
//             backgroundAttachment: 'fixed'
//
//
//         })
//     ;
//     console.log('albumTitle')
//     console.log(name)
//     return (
//         <div>
//         <div className={styles.titleContainer} style={headerStyle()}>
//             <div className={styles.filter}>
//             <h1 className={styles.albumName} >{name}</h1>
//             </div>
//         </div>
//
//
//         </div>
//
//
//     )
// }