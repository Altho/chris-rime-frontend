import style from '../../styles/videos.module.css'
import ReactPlayer from "react-player";
import {SimpleGrid} from "@mantine/core";
import {useState} from "react";
import { Chips, Chip } from '@mantine/core';
import {useRouter} from "next/router";




export default function VideoGrid({videos, pedaguo, album, jeu, guest}){
    const locale = useRouter().locale;
    const [displayedVideos, setDisplayedVideos] = useState(videos)
    const [videoCheck, setVideoCheck] = useState(true);
    const [albumCheck, setAlbumCheck] = useState(false);
    const [pedaguoCheck, setPedaguoCheck] = useState(false);
    const [jeuCheck, setJeuCheck] = useState(false);
    const [guestCheck, setGuestCheck] = useState(false);


    return(
        <>
            <div className={style.chipContainer}>
                <div className={style.chipWrapper}>
                <Chips variant="filled" >
                    <Chip value="all" onClick={() => setDisplayedVideos(videos)}>{locale === 'en'? ('All videos') : ('Toutes les vidéos')}</Chip>
                    <Chip onClick={() => setDisplayedVideos(album)}>Albums</Chip>
                    <Chip value="pedaguo" onClick={() => setDisplayedVideos(pedaguo)}>Pedaguo</Chip>
                    <Chip value="jeux" onClick={() => setDisplayedVideos(jeu)}>Jeux vidéos</Chip>
                    <Chip value="guest" onClick={() => setDisplayedVideos(guest)}>With guests</Chip>

                </Chips>
                </div>
            </div>



            <SimpleGrid
        className={style.container}
        cols={4}
        spacing="xl"
        breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
    >

        {displayedVideos === undefined ? (<h1>No videos...</h1>): displayedVideos.map(({id, attributes : {lien, pedaguo, album, guest}}) => {
           const glow = () => {
               if(pedaguo === true){
                   return style.pedaguo
               }
               else if(album === true){
                   return style.album
               }
               else if(guest === true){
                   return style.guest
               }
               else{
                   return style.jeu
               }
           }
            return(
                <div key={id} className={glow()} >
                    <ReactPlayer url={lien} width='100%' height='100%' controls />
                </div>
            )

        })}
    </SimpleGrid>
        </>
    )
}