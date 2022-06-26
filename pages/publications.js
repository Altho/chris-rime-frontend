import Layout from "../components/layout";
import fetchDataFromURL from "../libs/fetchVideos";
import ReactPlayer from "react-player";
import Style from '../styles/online-teaching.module.css'
import {useRouter} from "next/router";
import {List, ThemeIcon, SimpleGrid, Button, Image, Loader} from '@mantine/core';
import {Music} from 'tabler-icons-react';
import Masonry from 'react-masonry-css'
import FlipCards from "../components/publications/FlipCards";

const data = [
    {
        magazine: 'Guitarist & Bass Mag',
        key:1,
        name: 'Special Woodstock',
        image: '/images/mags/2.jpeg',
        items: ['Une sélection des 30 meilleurs riffs',
            'Les meilleurs phrasés de solo', 'Un panel des rééditions cd',
            '5 scores à la manière de Jimi Hendrix, Carlos Santana, Ten Years After, Joe Cocker, Creedence Clearwater Revival.'
        ],
        content:'Un numéro hors série à propos du plus gros événement de la « Pop Culture ». Les histoires, les artistes,\n' +
            'des photos, et surtout beaucoup de musique, à l\'occasion des 40 ans de Woodstock. Un numéro hors série\n' +
            'en forme d\'hommage à tous les guitaristes qui ont écrit l\'histoire du Rock. 89 pages dédiées a cet\n' +
            'événement.'

    },
    {
        magazine: 'Guitarist & Bass Mag',
        key:2,
        name: 'Special David Gilmour',
        image: '/images/mags/3.jpeg',
        items: ['Analyse complète du jeu : son et phrasé',
            'Gammes pentatoniques', 'Modes de la gamme Majeure',
            'Bends','Effets','6 scores complets','Ralentis et play-back'
        ],
        content:'Un numéro hors série à propos du plus gros événement de la « Pop Culture ». Les histoires, les artistes,\n' +
            'des photos, et surtout beaucoup de musique, à l\'occasion des 40 ans de Woodstock. Un numéro hors série\n' +
            'en forme d\'hommage à tous les guitaristes qui ont écrit l\'histoire du Rock. 89 pages dédiées a cet\n' +
            'événement.'
    },
    {
        magazine: 'Guitarist & Bass Mag',
        key:3,
        name: 'Special Eric Clapton',
        image: '/images/mags/4.jpeg',
        items: ['Le phrasé','Discographie sélective',
            '6 solos complets', '40 plans électriques / bottleneck / acoustiques',
            'Ralentis et play-back'
        ],
        content:'Une analyse précise du phrasé du guitariste légendaire Eric Clapton. Comment jouer ses phrases,\n' +
            'comprendre ses grilles, quelles sont ses influences, comment décrypter la magie du jeu du musicien. 89\n' +
            'pages consacrée au phrasé du guitariste.'
    },
    {
        magazine: 'Guitarist & Bass Mag',
        key:4,
        name: 'Special Carlos Santana',
        image: '/images/mags/5.jpeg',
        items: ['Le phrasé','Discographie sélective',
            '7 scores complets', '30 riffs & solos',
            'Ralentis et play-back'
        ],
        content:'Un numéro hors série consacré à un des plus grands guitaristes de la planete Pop-Rock-World, mais aussi\n' +
            'à un des plus grands compositeurs de hit instrumentaux. Son phrasé, ses découpes rythmiques, ses grilles,\n' +
            'ses gammes, tout cela expliqué en 89 pages.'
    },
    {
        magazine: 'Guitarist & Bass Mag',
        key:5,
        name: 'Special Guitaristes de Jazz',
        image: '/images/mags/1.png',
        items: ['Les grands guitaristes de jazz ','Les guitares du jazz',
            'Gamme Majeure et modes grecs', 'La gamme pentatonique',
            'Les modes','Les accords','Bien accompagner en jazz',' 20 plans jazz',
            '7 scores','Ralentis et play-back'
        ],
        content:'Un numéro hors série consacré aux grands guitaristes de jazz : Charlie christian, Django Reinhardt, Wes\n' +
            'Montgomery, Joe Pass, John Scofield, Grant Green. De la théorie mais surtout beaucoup de transcription\n' +
            'des solos des grands maître de l\'improvisation. 89 pages.'
    },
    {
        magazine: 'Guitarist & Bass Mag',
        key:6,
        name: 'Special Apprenez à composer',
        image: '/images/mags/7.png',
        items: ['Tout sur l’harmonie, la mélodie et la structure d’un morceau','Plus de 50 exemples choisis avec audio et tablature',
            'Dans les styles actuels : Pop, Rock, Blues, Metal, Jazz ', 'Des explications détaillées',

        ],
        content:'89 pages consacrées à la composition Pop-Rock. Des données théoriques, des analyses des classiques de\n' +
            'la Pop expliquées et jouées afin que vous compreniez mieux les clefs de la composition. Pour la guitare,\n' +
            'mais aussi pour tous les musiciens qui veulent composer et progresser.'
    },
    {
        magazine: 'Guitarist & Bass Mag',
        key:7,
        name: 'Special guitare funk',
        image: '/images/mags/8.png',
        items: ['La maîtrise du rythme','Revue des gammes utilisées',
            '10 scores complets (Sly and The Family Stone, James Brown, Jackson 5, Parliament/ Funkadelic, Prince, Nile Rodgers, Earth, Wind and Fire…)', 'Ralentis et play-back',
        ],
        content:'Cette musique dans laquelle la guitare tient un rôle majeur, se devait d’être décortiquée et analysée dans\n' +
            'un numéro hors série. De l’écurie Motown à Prince, tous les phrasés des guitaristes de funk analysés. 89\n' +
            'pages.'
    },
    {
        magazine: 'Guitarist & Bass Mag',
        key:8,
        name: 'Special reggae',
        image: '/images/mags/9.png',
        items: ['Une sélection de 30 riffs incontournables','Une sélection de riffs avec utilisation d’effets',
            '6 scores complets à la manière de Bob Marley, UB 40, Peter Tosh, Toots & The Maytals et Steel Pulse', 'Ralentis et play-back',
        ],
        content:'Toutes les guitares du Reggae de Ernest Ranglin à UB40 en passant par Bob Marley expliquées. Des\n' +
            'scores incluants les parties de guitare et de basse, des gammes, des exercices de rythme, des phrases de\n' +
            'solo, en 89 pages.'
    },
    {
        magazine: 'Guitare Pedaguo',
        key:8,
        name: 'Comment bien jouer ?',
        image: '/images/mags/11.png',
        items: ['Tracklist complète','Portrait',
            'Phrasé', 'Ralentis et play-back',
        ],
        content:'Toutes les guitares du Reggae de Ernest Ranglin à UB40 en passant par Bob Marley expliquées. Des\n' +
            'scores incluants les parties de guitare et de basse, des gammes, des exercices de rythme, des phrases de\n' +
            'solo, en 89 pages.'
    },

]


export default function Publications() {
    const locale = useRouter().locale
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const intro = {
        fr: "Depuis plus de 15 ans, Chris Rime publie de façon régulière des articles, dossiers, études de style etc. dans les plus grands magazines spécialisés Français. Christophe Rime a publié plus de 150 articles et vidéos pédagogiques ",
        en: "For more than 15 years Chris Rime has written on a regular basis in most of the major French guitar magazines. Chris Rime has published and recorded over 150 articles and videos "
    }

    return (
        <Layout>
            <div className={Style.mainContainer}>
                <div className={Style.textWrapper}>
                    <div className={Style.textContainer}>,
                        <div className={Style.introText}>
                            {locale === 'en' ? intro.en : intro.fr}
                        </div>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className={Style.gridMasonry}
                            columnClassName={Style.grid_column}>
                            < Image src={'/images/mags/gp.png'}/>
                            < Image src={'/images/mags/guitarist.png'}/>
                            < Image src={'/images/mags/gxt.png'}/>
                        </Masonry>


                    </div>
                </div>
            </div>
            <div className={Style.gridWrapper}>
                <SimpleGrid
                    cols={2}
                    spacing="lg"
                    style={{paddingBottom:'80px'}}
                    breakpoints={[
                        {maxWidth: 755, cols: 1, spacing: 'sm'},
                    ]}
                >
                    {data.map((i) => {
                        return (
                            <FlipCards key={i.key}
                                       image={i.image}
                                       name={i.name}
                                       content={i.content}
                                       magazine={i.magazine}
                                       items={i.items}/>
                        )
                    })}

                </SimpleGrid>
            </div>

        </Layout>


    )
}