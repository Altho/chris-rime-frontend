import style from '../../styles/videos.module.css'
import Layout from '/components/layout'
import { SimpleGrid } from '@mantine/core';
import qs from 'qs'
import VideoGrid from "../../components/videos/VideoGrid";
import {useState} from "react";
import {parseCookies, setCookie} from "nookies";
import fetchDataFromURL from '../../libs/fetchVideos'





export async function getServerSideProps(ctx){

    const jwt = parseCookies(ctx).jwt



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



    const videosQ = qs.stringify({
            sort: ['updatedAt:desc'],

            encodeValuesOnly: true,
            populate: '*'

        }
    );
    const pedaguoQ = qs.stringify({
        sort: ['pedaguo:asc'],
        filters: {
            pedaguo: {
                $eq: true,
            },
        },
        encodeValuesOnly: true, // prettify url
    });
    const albumQ = qs.stringify({
        sort: ['album:asc'],
        filters: {
            album: {
                $eq: true,
            },
        },
    });
    const jeuQ = qs.stringify({
        sort: ['jeu:asc'],
        filters: {
            jeu: {
                $eq: true,
            },
        },
    });
    const guestQ = qs.stringify({
        sort: ['guest:asc'],
        filters: {
            guest: {
                $eq: true,
            },
        },
    });



    const [
        videos,
        pedaguo,
        album,
        jeu,
        guest,
        albumList
    ] = await Promise.all([
        fetchDataFromURL(`${process.env.DB_HOST}/api/videos?${videosQ}`,loginResponseData.jwt),
        fetchDataFromURL(`${process.env.DB_HOST}/api/videos?${pedaguoQ}`,loginResponseData.jwt),
        fetchDataFromURL(`${process.env.DB_HOST}/api/videos?${albumQ}`,loginResponseData.jwt),
        fetchDataFromURL(`${process.env.DB_HOST}/api/videos?${jeuQ}`,loginResponseData.jwt),
        fetchDataFromURL(`${process.env.DB_HOST}/api/videos?${guestQ}`,loginResponseData.jwt),
        fetchDataFromURL(`${process.env.DB_HOST}/api/albums?populate=*`,loginResponseData.jwt),
    ]);




    return {

        props: {
            videos,
            pedaguo,
            album,
            jeu,
            guest,
            albumList



        },revalidate: 10,


    }
}



export default function Videos({videos, pedaguo, album,jeu, guest, albumList}){

    console.log(pedaguo)
    return(
        <Layout>
            <div style={{

                backgroundColor:'#fff',
                minHeight:'100vh'
            }}>
            <VideoGrid videos={videos} pedaguo={pedaguo} album={album} jeu={jeu} guest={guest} albumList={albumList} />
            </div>
        </Layout>
    )
}