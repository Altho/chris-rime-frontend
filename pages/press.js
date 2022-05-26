import {getArticles} from "../libs/fetchPress";
import {parseCookies, setCookie} from "nookies";
import Layout from "../components/layout";
import styles from "../styles/home.module.css";
import cardStyle from "../styles/press.module.css"
import {SimpleGrid, Modal, Card, Button, Image,Group, Text} from "@mantine/core";
import {format} from 'date-fns'
import {fr} from "date-fns/locale";
import {useRouter} from "next/router";
import {Fragment, useState} from 'react';
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Loader } from '@mantine/core';
import ReactMarkdown from 'react-markdown'
import InfiniteScroll from 'react-infinite-scroller';

import style from "../styles/blogList.module.css";





export async function getServerSideProps({locale}, ctx) {
    const jwt = parseCookies(ctx).jwt

    if (jwt) {
        const articlesArray = await getArticles({locale}, jwt, 0, 9)
        const articles = articlesArray.articlesList
        const total = articlesArray.total
        const cookieJwt = jwt
        return {

            props: {
                articles,
                cookieJwt,
                total


            },
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
    const cookieJwt = loginResponseData.jwt

    const articlesArray = await getArticles({locale}, cookieJwt, 0, 9)
    const articles = articlesArray.articlesList
    const total = articlesArray.total



    return {

        props: {
            articles,
            cookieJwt,
            total


        }

    }
}




export default function Articles({articles, cookieJwt, total}){
    const locale = useRouter().locale
    const {height, width}= useWindowDimensions()
    const isMobile = () => {if(width <= 900){return true}else{return false}}
    const [pageCounter, setPageCounter] = useState(9)
    const [posts, setPosts] = useState(articles);
    const [visible, setVisible] = useState(false)
    const [hasMore, setHasMore] = useState(true);
    const [opened, setOpened] = useState(false);
    const [modalContent, setModalContent] = useState({
        mainContent:'',
        name:'',
        image:'',
        auteur:'',
        editeur:'',
        magazine:'',
        date:''
    });

    const getMorePost = async () => {
        console.dir('---PAGECOUNTER---')
        console.dir(pageCounter)
        console.dir('---PAGECOUNTER---')
        if(pageCounter < total
        ){


            const res = await getArticles({locale},cookieJwt, pageCounter  , 9)
            setPageCounter(prevState => prevState + 9)


            const newPosts = res.articlesList;
            setPosts((post) => [...post, ...newPosts]);
        }
        else {
            setHasMore(false)



        }

    };


    let keyIndex = 0
    const newKey = () => {
        keyIndex++
        return keyIndex
    }




    const handleClick =  (article) => {

        const parseDate = () => {
            if( locale === 'en'){
                const date = format(new Date(article.attributes.date), 'MMMM y')
                return date

            }
            else {
                const date = format(new Date(article.attributes.date), 'MMMM y', {locale: fr})
                return date

            }
        }

        setModalContent({
                name:article.attributes.name,
                mainContent: article.attributes.content,
                image: article.attributes.image.data.attributes.url,
                auteur: article.attributes.auteur,
                editeur: article.attributes.editeur,
                magazine: article.attributes.magasine,
                date: parseDate(),

            }


        )
        setOpened(true)


    }



    return(

        <Layout>

            <Modal
                overflow="inside"
                size={isMobile() ? '100%' : '85%'}
                opened={opened}
                onClose={() => setOpened(false)}
            >
                <div className={cardStyle.headerContainer}>
                    <div className={cardStyle.imageWrapper}>
                        <Image src={modalContent.image}  width={300} />
                    </div>
                    <div className={cardStyle.headerInfos}>
                        <div>{modalContent.magazine}</div>
                        <div>{modalContent.name}</div>
                        <div>{modalContent.date}</div>



                    </div>
                </div>

                <ReactMarkdown className={cardStyle.content}>{modalContent.mainContent}</ReactMarkdown>
                <div>{modalContent.auteur}</div>



            </Modal>

            <div className={styles.albumGallery}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={getMorePost}
                    hasMore={hasMore}
                    loader={<div className={cardStyle.loaderWrapper}><div className={cardStyle.loader}><Loader color={'orange'} variant={'bars'} /></div></div>}

                >
                    <SimpleGrid cols={3}
                                spacing={"xl"}
                                breakpoints={[
                                    { maxWidth: 1200, cols: 2, spacing: 'md' },
                                    { maxWidth: 755, cols: 1, spacing: 'sm' },
                                ]}>

                        {posts.map((article) => {
                                return(
                                    <ArticleCard key={newKey()} data={article} locale={locale} onClick={() => handleClick(article)} />
                                )
                            }

                        )}

                    </SimpleGrid>
                </InfiniteScroll>
                <div>
                    {visible && <Loader />}
                </div>
            </div>


        </Layout>
    )
}

function ArticleCard({data, locale, onClick}) {


    const image = data.attributes.image.data.attributes.url
    const upDate = format(new Date(data.attributes.date), 'MMMM y')
    const upDateFr = format(new Date(data.attributes.date), 'MMMM y', {locale: fr})


    return (
        <>

            <Card onClick={onClick} className={cardStyle.card} shadow="md">
                <Card.Section>
                    <Image src={image} height={160} alt="Norway"/>
                </Card.Section>
                <Group position="apart" style={{marginBottom: 5, marginTop: 10}}>
                    <Text weight={500}
                          style={{color: 'black', fontFamily: 'Orbitron',}}>{data.attributes.magasine}</Text>
                </Group>
                <div>{data.attributes.name}</div>
                <div>{locale === 'en' ? upDate : upDateFr}</div>
                <Button  fullWidth color={"orange"}
                         className={cardStyle.button}>{locale === 'en' ? ('Read the article') : ("Lire l'article")}</Button>
            </Card>
        </>
    )
}
