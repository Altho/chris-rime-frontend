import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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


export async function getStaticProps({locale}) {
const blogs = await getBlogPosts({locale});

  return {

    props: {
      blogs


    }
  }
}

export default function Home({blogs}, locale) {
console.log(`Current locale is : ${{locale}}`)
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
            <ReactPlayer url={'https://www.youtube.com/watch?v=dmMRsHp725s'} width={'100%'} height={'100%'} controls/>
          </div>
      </main>


    </Layout>
  )
}
