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


export async function getStaticProps({params, locale}) {
    const postData = await getPostData(params.slug, locale)
    console.log('albumDATA')
    console.log(postData)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths({locales}) {
    const fetchPosts = await fetch('http://127.0.0.1:1337/api/blogs?populate=*&locale=all')
    const postsData = await fetchPosts.json();
    const posts = postsData.data
    console.log('!!Posts')
    console.log(posts)

    const paths = posts.map((post) => locales.map((locale) => ({
        params: {slug: post.attributes.slug},
        locale
    })))
        .flat()

    return {paths, fallback: false}
}

export default function postsDetails({postData}) {

    console.log('Post Data !')
    console.log(postData)
    const post = postData['0'].attributes;
    const postImage = post.image.data.attributes.url
    console.log(`localhost:1337${postImage}`)


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