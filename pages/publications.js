import Layout from "../components/layout";
import fetchDataFromURL from "../libs/fetchVideos";
import ReactPlayer from "react-player";
import Style from '../styles/online-teaching.module.css'
import {useRouter} from "next/router";
import {List, ThemeIcon, SimpleGrid, Button, Image, Loader} from '@mantine/core';
import {Music} from 'tabler-icons-react';
import Masonry from 'react-masonry-css'
import FlipCards from "../components/publications/FlipCards";

const data = [{
    magazine: 'Guitarist & Bass Mag',
    key: 1,
    name: {
        fr: 'Special Woodstock', en: 'Special issue : Woodstock',
    },
    image: '/images/mags/2.jpeg',
    items: {
        fr: ['Une sélection des 30 meilleurs riffs', 'The best solo phrases',
            'A panel of cd reissues', '5 scores à la manière de Jimi Hendrix, Carlos Santana, ' +
            'Ten Years After, Joe Cocker, Creedence Clearwater Revival.'],
        en: ['A selection of the 30 best riffs', 'Best chorus',
            'Selection of albums re-releases', '5 scores in the style of Hendrix and Santana ' +
            '5 scores like Jimi Hendrix, Carlos Santana, Ten Years After, Joe\n' +
            'Cocker, Creedence Clearwater Revival'],
    },
    content: {
        fr: 'Un numéro hors série à propos du plus gros événement de la « Pop Culture ». Les histoires, les artistes,\n' + 'des photos, et surtout beaucoup de musique, à l\'occasion des 40 ans de Woodstock. Un numéro hors série\n' + 'en forme d\'hommage à tous les guitaristes qui ont écrit l\'histoire du Rock. 89 pages dédiées a cet\n' + 'événement.',
        en: 'A special issue about the biggest event in "Pop Culture". Stories, artists, photos, and\n' + 'above all a lot of music, on the occasion of 40 years of Woodstock. A special issue in\n' + 'the form of a tribute to all the guitarists who wrote the history of Rock. 89 pages\n' + 'dedicated to this event.',

    }

}, {
    magazine: 'Guitarist & Bass Mag',
    key: 2,
    name: {
        fr: 'Special David Gilmour', en: 'Special issue : David Gilmour',
    },
    image: '/images/mags/3.jpeg',
    items: {
        fr: ['Analyse complète du jeu : son et phrasé', 'Gammes pentatoniques', 'Modes de la gamme Majeure',
            'Bends', 'Effets', '6 scores complets', 'Ralentis et play-back'],
        en: ['Complete analysis of the game: sound and phrasing', 'Pentatonic scales', 'Major Scale Modes',
            'Bends', 'Effects', '6 complete scores', 'Slow motion and playback']
    },
    content: {
        fr: `David Gilmour a inventé un son, un phrasé qui lui vaut le surnom de « l'homme à la stratocaster ». Son
approche mélodique et son utilisation des effets est unique et a influencé de nombreux guitaristes tout
autour de la planète. Ses modes et gammes fétiches, ses bends légendaires, son phrasé expliqués en 89
pages.`,
        en: 'David Gilmour invented a sound, a phrasing that earned him the nickname "the man with\n' +
            'the stratocaster". His melodic approach and use of effects is unique and has influenced\n' +
            'many guitarists around the world. His favorite modes and scales, his legendary bends,\n' +
            'his phrasing explained in 89 pages.',
    }
}, {
    magazine: 'Guitarist & Bass Mag',
    key: 3,
    name: {
        fr: 'Special Eric Clapton', en: 'Special issue : Eric Clapton',
    },
    image: '/images/mags/4.jpeg',
    items: {
        en: ['The phrasing', 'Selective discography', '6 complete solos',
            '40 electrical / bottleneck / acoustic licks', 'Slow motion and playback'],
        fr: ['Le phrasé', 'Discographie sélective', '6 solos complets',
            '40 plans électriques / bottleneck / acoustiques', 'Ralentis et play-back'],
    },
    content: {
        fr: 'Une analyse précise du phrasé du guitariste légendaire Eric Clapton. Comment jouer ses phrases,\n'
            + 'comprendre ses grilles, quelles sont ses influences, comment décrypter la magie du jeu du musicien. 89\n'
            + 'pages consacrée au phrasé du guitariste.',
        en: 'A precise analysis of the phrasing of legendary guitarist Eric Clapton. How to play his\n' +
            'phrases, understand his grids, what are his influences, how to decipher the magic of\n' +
            'the musician\'s game. 89 pages devoted to the phrasing of the guitarist.'
    }
}, {
    magazine: 'Guitarist & Bass Mag',
    key: 4,
    name: {
        fr: 'Special Carlos Santana', en: 'Special issue : Carlos Santana',
    },
    image: '/images/mags/5.jpeg',
    items: {
        en: ['The phrasing', 'Selective discography', '7 complete scores',
            '30 riffs & solos', 'Slow motion and playback'],
        fr: ['Le phrasé', 'Discographie sélective', '7 scores complets',
            '30 riffs & solos', 'Ralentis et play-back'],
    },


    content: {
        fr: 'Un numéro hors série consacré à un des plus grands guitaristes de la planete Pop-Rock-World, mais aussi\n'
            + 'à un des plus grands compositeurs de hit instrumentaux. Son phrasé, ses découpes rythmiques, ses grilles,\n'
            + 'ses gammes, tout cela expliqué en 89 pages.',
        en: 'A special issue dedicated to one of the greatest guitarists of the Pop-Rock-World\n' +
            'planet, but also to one of the greatest composers of instrumental hits. Its phrasing,\n' +
            'its rhythmic cuts, its grids, its scales, all this explained in 89 pages.'
    }
}, {
    magazine: 'Guitarist & Bass Mag',
    key: 5,
    name: {
        fr: 'Special Guitaristes de jazz', en: 'The great jazz guitarists',
    },
    image: '/images/mags/1.png',
    items: {
        en: ['jazz guitars', 'Major scale and Greek modes', 'The pentatonic scale',
            'The jazz chords', 'modes', 'learning good comping in jazz', '20 jazz licks', '7 scores', 'Slow motion and playback'],
        fr: ['Les grands guitaristes de jazz ', 'Les guitares du jazz',
            'Gamme Majeure et modes grecs', 'La gamme pentatonique', 'Les modes',
            'Les accords', 'Bien accompagner en jazz', ' 20 plans jazz', '7 scores', 'Ralentis et play-back'],
    },


    content: {
        fr: 'Un numéro hors série consacré aux grands guitaristes de jazz : Charlie christian, Django Reinhardt, Wes\n'
            + 'Montgomery, Joe Pass, John Scofield, Grant Green. De la théorie mais surtout beaucoup de transcription\n'
            + 'des solos des grands maître de l\'improvisation. 89 pages.',
        en: 'A special issue dedicated to the great jazz guitarists: Charlie Christian, Django\n' +
            'Reinhardt, Wes Montgomery, Joe Pass, John Scofield, Grant Green. Theory but above all a\n' +
            'lot of transcription of the solos of the great masters of improvisation. 89 pages.',
    }
}, {
    magazine: 'Guitarist & Bass Mag',
    key: 6,
    name: {
        fr: 'Special apprenez à composer', en: 'Special issue : How to compose',
    }, image: '/images/mags/7.png',
    items: {
        en: ['All about harmony, melody and song structure', 'Over 50 selected examples with audio and tablature', 'In current styles: Pop, Rock, Blues, Metal, Jazz',
            'Detailed explanations'],
        fr: ['Tout sur l’harmonie, la mélodie et la structure d’un morceau',
            'Plus de 50 exemples choisis avec audio et tablature',
            'Dans les styles actuels : Pop, Rock, Blues, Metal, Jazz ', 'Des explications détaillées',],
    },


    content: {
        fr: '89 pages consacrées à la composition Pop-Rock. Des données théoriques, des analyses des classiques de\n'
            + 'la Pop expliquées et jouées afin que vous compreniez mieux les clefs de la composition. Pour la guitare,\n'
            + 'mais aussi pour tous les musiciens qui veulent composer et progresser.',
        en: '89 pages devoted to Pop-Rock composition. Theoretical data, analyzes of Pop classics\n' +
            'explained and played so that you better understand the keys to composition. For the\n' +
            'guitar, but also for all musicians who want to compose and progress.'
    }
}, {
    magazine: 'Guitarist & Bass Mag',
    key: 7,
    name: {
        fr: 'Special funk', en: 'Special issue : Funk',
    }, image: '/images/mags/8.png',
    items: {
        en: ['Rhythm control', 'Complete Review of the scales used', '10 complete scores (Sly and The Family Stone, James Brown,\n' +
        'Jackson 5, Parliament/ Funkadelic, Prince, Nile Rodgers, Earth, Wind\n' +
        'and Fire…)','Slow motion and playback\n',],
        fr: ['La maîtrise du rythme', 'Revue des gammes utilisées',
            '10 scores complets (Sly and The Family Stone, James Brown, Jackson 5, Parliament/ Funkadelic, Prince, ' +
            'Nile Rodgers, Earth, Wind and Fire…)', 'Ralentis et play-back',],
    },


    content: {
        fr: 'Cette musique dans laquelle la guitare tient un rôle majeur, se devait d’être décortiquée et analysée dans\n'
            + 'un numéro hors série. De l’écurie Motown à Prince, tous les phrasés des guitaristes de funk analysés. 89\n'
            + 'pages.',
        en: 'This music in which the guitar plays a major role, had to be dissected and analyzed in\n' +
            'a special issue. From the Motown stable to Prince, all the phrasings of funk guitarists\n' +
            'analyzed in 89 pages.'
    }
}, {
    magazine: 'Guitarist & Bass Mag',
    key: 7,
    name: {
        fr: 'Special reggae', en: 'Special issue : Reggae',
    }, image: '/images/mags/9.png',
    items: {
        en: ['A selection of 30 best riffs', 'A selection with riffs with use of effects', '6 complete scores in the style of Bob Marley, UB 40, Peter Tosh, toots & the Maytals and Steel Pulse',
            'Playback and slow motion'],
        fr: ['Une sélection de 30 riffs incontournables', 'Une sélection de riffs avec utilisation d’effets',
            '6 scores complets à la manière de Bob Marley, UB 40, Peter Tosh, Toots & The Maytals et Steel Pulse',
            'Ralentis et play-back',],
    },


    content: {
        fr: `Toutes les guitares du Reggae de Ernest Ranglin à UB40 en passant par Bob Marley expliquées. Des
        scores incluants les parties de guitare et de basse, des gammes, des exercices de rythme, des phrases de
        solo, en 89 pages.`,
        en: 'All Reggae guitars from Ernest Ranglin to UB40 to Bob Marley explained. Scores\n' +
            'including guitar and bass parts, scales, rhythm exercises, solo phrases, in 89 pages.'
    }
}, {
    magazine: 'Guitare Pedaguo',
    key: 8,
    name: {
        fr: 'Comment bien jouer ?', en: 'How to play well ?',
    }, image: '/images/mags/11.png',
    items: {
        en: ['Complete tracklist', 'Portrait', '7 scores complets',
            'Phrasing', 'Slow motion and playback'],
        fr: ['Tracklist complète', 'Portrait', 'Phrasé', 'Ralentis et play-back',],
    },
    content: {
        fr: `145 Pages dediées aux plus grands guitaristes de l'histoire du Rock et du Blues.
        Une quinzaine de scores avec partitions et playbacks, des plans, des
        gammes, des exercices vous permettant de mieux jouer la musique des
        ces deux géant de la guitare.`,
        en: `145 pages dedicated to the greatest guitarists in the history of Rock and Blues.
Fifteen scores with tablatures and playbacks, licks, scales, exercises
allowing you to better play the music of these two guitar giants.`,
    }
},

]


export default function Publications() {
    const locale = useRouter().locale
    const breakpointColumnsObj = {
        default: 4, 1100: 3, 700: 2, 500: 1
    };

    const intro = {
        fr: "Depuis plus de 15 ans, Chris Rime publie de façon régulière des articles, dossiers, études de style etc. dans les plus grands magazines spécialisés Français. Christophe Rime a publié plus de 150 articles et vidéos pédagogiques ",
        en: "For more than 15 years Chris Rime has written on a regular basis in most of the major French guitar magazines. Chris Rime has published and recorded over 150 articles and videos "
    }

    return (<Layout>
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
                    style={{paddingBottom: '80px'}}
                    breakpoints={[{maxWidth: 755, cols: 1, spacing: 'sm'},]}
                >
                    {data.map((i) => {
                        return (<FlipCards key={i.key}
                                           image={i.image}
                                           name={i.name}
                                           content={i.content}
                                           magazine={i.magazine}
                                           items={i.items}/>)
                    })}

                </SimpleGrid>
            </div>

        </Layout>


    )
}