import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import ListenSeparator from "../components/albums/ListenSeparator";
import BioSeparator from "../components/home/BioSeparator";
import Layout, {siteTitle} from "../components/layout";
import Presentation from "../components/home/Presentation";
import ReactPlayer from "react-player";
import blogStyles from '../styles/blogList.module.css'
import {getBlogPosts} from "../libs/fetchPosts";
import ShortBio from "../components/home/ShortBio";
import BlogList from '../components/blog/BlogList'
import {Jumbotron} from "../components/Jumbotron";
import TopMenu from "../components/topMenu/Topmenu";
import BlogContainer from '../components/blog/blogContainer'
import {format} from 'date-fns'
import {getDomainLocale} from "next/dist/shared/lib/router/router";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { parseCookies, setCookie }  from 'nookies'
import { useSession, signIn, signOut } from "next-auth/react"


import qs from "qs";




export default function Home({blogs}) {


    return (

        <Layout>
            <Head>
                <title>{siteTitle}</title>

            </Head>

            <Jumbotron/>
            <main className={styles.main}>
                <BlogContainer blogs={blogs}/>
                <ShortBio/>
                <Presentation/>
                <ListenSeparator/>
                <div className={styles.mainVideo}>
                    <ReactPlayer url={'https://www.youtube.com/watch?v=dmMRsHp725s'} width={'100%'} height={'100%'}
                                 controls/>
                </div>
            </main>


        </Layout>
    )

}



export async function getStaticProps({locale}, ctx) {

    const jwt = parseCookies(ctx).jwt
    if (jwt) {

        // get posts from strapi REST API

        const query = qs.stringify({
            sort: ['publishedAt:desc'],
        }, {
            encodeValuesOnly: true,
        });

        const fetchBlog = await fetch(`${process.env.DB_HOST}/api/blogs?locale=${locale}&${query}&populate=*`,{
            headers: {

                Authorization: `Bearer ${jwt}`
            }
        })
        const blogPost = await fetchBlog.json()
        console.log(blogPost)
        const blogs = blogPost.data.slice(0,8)

        return {

            props: {
                blogs,



            }, revalidate: 10
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

    const fetchBlog = await fetch(`${process.env.DB_HOST}/api/blogs?locale=${locale}&${query}&populate=*`,{
        headers: {

            Authorization: `Bearer ${loginResponseData.jwt}`
        }
    })
    console.log(fetchBlog)
    const blogPost = await fetchBlog.json()
    console.log(blogPost)
    console.log(loginResponseData)

    const blogs = blogPost.data.slice(0,8)

    return {

        props: {
            blogs,


        }, revalidate: 10

    }

}