import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import blogStyles from '../styles/blogList.module.css'
import {getBlogPosts} from "../libs/fetchPosts";
import BlogList from '../components/BlogList'
import {Jumbotron} from "../components/Jumbotron";
import TopMenu from "../components/Topmenu";
import BlogContainer from'../components/blogContainer'
import {format} from 'date-fns'

export async function getStaticProps({locale}) {


const blogs = await getBlogPosts({locale});

  return {
    props: {
      blogs
    }
  }
}

export default function Home({blogs}) {
console.log(blogs)
  return (

    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <TopMenu/>
      <Jumbotron/>
      <main className={styles.main}>
          <BlogContainer blogs={blogs}/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
