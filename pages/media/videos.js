import style from '../../styles/videos.module.css'
import Layout from '/components/layout'
import { SimpleGrid } from '@mantine/core';
import qs from 'qs'
import ReactPlayer from 'react-player'
import VideoGrid from "../../components/videos/VideoGrid";
import {useState} from "react";
import {useQuery, useQueryClient} from "react-query";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient()





export async function getServerSideProps(){

    const videosQ = qs.stringify({
        sort: ['updatedAt:desc'],
    }, {
        encodeValuesOnly: true,
    });
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

    const fetchVideos = await fetch(`http://127.0.0.1:1337/api/videos?${videosQ}`)
    const videoData = await fetchVideos.json()
    const videos = videoData.data

    const fetchPedaguo = await fetch(`http://127.0.0.1:1337/api/videos?${pedaguoQ}`)
    const pedaguoData = await fetchPedaguo.json()
    const pedaguo = pedaguoData.data

    const fetchAlbum = await fetch(`http://127.0.0.1:1337/api/videos?${albumQ}`)
    const albumData = await fetchAlbum.json()
    const album = albumData.data

    const fetchJeu = await fetch(`http://127.0.0.1:1337/api/videos?${jeuQ}`)
    const jeuData = await fetchJeu.json()
    const jeu = jeuData.data

    const fetchGuest = await fetch(`http://127.0.0.1:1337/api/videos?${guestQ}`)
    const guestData = await fetchGuest.json()
    const guest = guestData.data








    return {

        props: {
            videos,
            pedaguo,
            album,
            jeu,
            guest



        },


    }
}



export default function Videos({videos, pedaguo, album,jeu, guest}){

    console.log(pedaguo)
    return(
        <Layout>
            <VideoGrid videos={videos} pedaguo={pedaguo} album={album} jeu={jeu} guest={guest} />
        </Layout>
    )
}