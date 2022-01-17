import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout, {siteTitle} from "../components/layout";
import blogStyles from '../styles/blogList.module.css'
import {getBlogPosts} from "../libs/fetchPosts";
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
      </main>

      <footer className={styles.footer}>
      </footer>
    </Layout>
  )
}
