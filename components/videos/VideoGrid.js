import style from '../../styles/videos.module.css'
import ReactPlayer from "react-player";
import {SimpleGrid} from "@mantine/core";
import {useState} from "react";
import {  Chip } from '@mantine/core';
import {useRouter} from "next/router";
import Select from 'react-select'
import {getAlbums} from "../../libs/fetchAlbums";
import { SegmentedControl } from '@mantine/core';




export default function VideoGrid({videos, pedaguo, album, jeu, guest,albumList}){
    const locale = useRouter().locale;
    const [displayedVideos, setDisplayedVideos] = useState(albumList[1].attributes.video.data)
    const list = albumList.map(({attributes: {name}}) => name)







    return(
        <>



            <div className={style.chipContainer}>
                <div className={style.chipWrapper}>
                <Chips variant="filled" >
                    <Chip value="all" onClick={() => setDisplayedVideos(videos)}>{locale === 'en'? ('All videos') : ('Toutes les vidéos')}</Chip>
                    <Chip value="pedaguo" onClick={() => setDisplayedVideos(pedaguo)}>{locale === 'en'? ('Educational') : ('Pédago')}</Chip>
                    <Chip value="jeux" onClick={() => setDisplayedVideos(jeu)}>{locale === 'en'? ('Video Games') : ('Jeux Vidéos')}</Chip>
                    <Chip value="guest" onClick={() => setDisplayedVideos(guest)}>Sideman</Chip>

                </Chips>
                    <div className={style.selectWrapper}>
                        <span>{locale === 'en' ? ('Filter by album | ')  : ('Filtrer par album | ')}</span>
                    <Select
                        placeholder={locale === 'en' ? ('Chose an album')  : ('Choisir un album')}
                        className={style.select}
                        width={'300px'}
                        getOptionLabel ={option => option.attributes.name}
                        getOptionValue ={option => option.id}
                        options={albumList}
                        onChange={(value) => {setDisplayedVideos(value.attributes.video.data)}}
                    />
                    </div>


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

        {displayedVideos === null ? (<h1>No videos...</h1>): displayedVideos.map(({id, attributes : {lien, pedaguo, album, guest}}) => {

            return(
                <div key={id} className={style.album} >
                    <ReactPlayer url={lien} width='100%' height='100%' controls />
                </div>
            )

        })}
    </SimpleGrid>
        </>
    )
}
