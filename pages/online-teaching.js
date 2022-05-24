import Layout from "../components/layout";
import fetchDataFromURL from "../libs/fetchVideos";
import ReactPlayer from "react-player";
import Style from '../styles/online-teaching.module.css'
import {useRouter} from "next/router";
import { List, ThemeIcon, SimpleGrid, Button } from '@mantine/core';
import { Music } from 'tabler-icons-react';





export default function OnlineTeaching(){
    const locale = useRouter().locale

    const intro = {
        fr:"Chris Rime collabore depuis des années avec les acteurs majeurs de l'enseignement musical en ligne. D'abord avec GuitarLive.com puis I-Music-School, Chris Rime a produit des dizaines d'heures de materiel pédagogiques à l'attention des néophytes comme des confirmés. Les axes étudiés sont entre autre :",
        en:" Chris Rime has been collaborating for years with the major players in online music education. First with GuitarLive.com and then with I-Music-School, Chris Rime has produced dozens of hours of pedagogical material for beginners as well as for advanced players. The axes studied are among others :"
    }

    return(
        <Layout>
            <div className={Style.mainContainer}>
                <div className={Style.textWrapper}>
                <div className={Style.textContainer}>,
                    <div className={Style.introText}>
                        {locale === 'en' ? intro.en : intro.fr}
                    </div>

                    <div className={Style.list}>

                        <List
                            spacing="xs"
                            size="sm"
                            center
                            icon={
                                <ThemeIcon color="teal" size={24} radius="xl">
                                    <Music size={16} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>{locale === 'en' ? 'Music theory, harmony and solfege' : 'Théorie musicale, harmonie et solfège'}</List.Item>
                            <List.Item>{locale === 'en' ? 'Chord progression, improvisation, chorus' : "Progression d'accords, improvisation"}</List.Item>
                            <List.Item>{locale === 'en' ? 'Technic, exercises and dexterity' : "Technique, exercices et dexterité"}</List.Item>
                            <List.Item>{locale === 'en' ? 'Rythm and precision' : "Travail rythmique et précision"}</List.Item>
                            <List.Item>{locale === 'en' ? 'Songwriting and style analysis' : "Songwriting et analyse de style"}</List.Item>


                        </List>
                    </div>
                    </div>
                </div>
                <div className={Style.gridWrapper}>
                <SimpleGrid
                    cols={2}
                    spacing="lg"
                    className={Style.grid}
                    breakpoints={[
                        { maxWidth: 755, cols: 1, spacing: 'sm' },
                    ]}
                >
                    < ReactPlayer url={`https://www.youtube.com/watch?v=l8EDQ8vSlRE`} width='100%' height='100%' controls />
                    < ReactPlayer url={`https://www.youtube.com/watch?v=NexdHoMFXbU`} width='100%' height='100%' controls />
                    < ReactPlayer url={`https://www.youtube.com/watch?v=ubHoEJsN5oc&t=54s`} width='100%' height='100%' controls />
                    < ReactPlayer url={`https://www.youtube.com/watch?v=GTDy62S2Nbc&t=222s`} width='100%' height='100%' controls />

                </SimpleGrid>
                </div>
                <div className={Style.textWrapper}>
                    <div className={Style.textContainer}>,
                        <div className={Style.introText}>
                            {locale === 'en' ? "Find out more about Chris' online teaching on Imusic School ": "Retrouvez toutes les leçons de Chris directement sur Imusic School"}
                        </div>

                        <a href={`https://www.imusic-school.com/guitare/professeurs/chris-rime/`} target="_blank" rel={'noreferrer'}><div className={Style.buttonWrapper}><Button variant={"outline"} color={"orange"}>Imusic School  </Button></div></a>
            </div>
                </div>
            </div>
        </Layout>
    )
}