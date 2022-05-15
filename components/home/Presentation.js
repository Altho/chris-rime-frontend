import style from '../../styles/home.module.css'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useState} from "react";
import {Button} from '@mantine/core'

export default function Presentation() {
    const [isOpened, setIsOpened] = useState(0)
    const locale = useRouter().locale;


    const opened = () => {
        return {maxHeight: 'max-content'}
    }


    const closed = () => {
        return {maxHeight: '300px'}
    }

    const drawer = (n) => {
        if (isOpened === n) {
            return style.opened
        } else {
            return style.closed
        }
    }

    const textOpened = () => {
        if (locale === 'en') {
            return 'Minimize'
        } else {
            return 'Minimiser'
        }
    }

    const textClosed = () => {
        if (locale === 'en') {
            return 'Read more'
        } else {
            return 'En savoir plus'
        }
    }

    const presentationText = {

        musicFR: 'Chris Rime a multiplié les projets personnels depuis ses plus jeunes années. Sa volonté artistique prendra forme avec son premier disque « Rime », qui sortira en 1995. Ce disque, véritable succès, lui vaudra le titre de nouveau virtuose de la guitare et lui permettra d&aposenchainer 5 autres albums toujours accompagné de rythmiques prestigieuses (Michel Alibo/Mokthar Samba ; Linley Marthe/Paco Sery ; Etienne MBappé/Roger Biwandu ; Marcus Miller/Roger Biwandu ; Hadrien Feraud/Tilo Bertholo). Sa musique se vend dans les quatre coins du monde, elle est axée autour de la guitare et balance entre le Jazz, le Jazz-Fusion et Blues. Il a joué dans de nombreux clubs de Jazz et festivals et continue encore de le faire avec son nouveau projet « At the Bar With Mr Punk ». Depuis 1997, Chris a composé et produit de nombreuses musiques pour la Télé, les jeux vidéo et le cinema.',
        musicEN: 'Chris Rime has multiplied personal projects since his younger years. His artistic will will take shape with his first record "Rime", which will be released in 1995. This record, a real success, earned him the title of new guitar virtuoso and allowed him to make 5 other albums always accompanied by prestigious rhythmic (Michel Alibo/Mokthar Samba; Linley Marthe/Paco Sery; Etienne MBappé/Roger Biwandu; Marcus Miller/Roger Biwandu; Hadrien Feraud/Tilo Bertholo). His music is sold in the four corners of the world, it is centered around the guitar and balances between Jazz, Jazz-Fusion and Blues. He has played in many jazz clubs and festivals and continues to do so with his new project "At the Bar With Mr Punk". Since 1997, Chris has composed and produced many music for TV, video games and movies.',
        sidemanFR: 'Chris Rime est plus connu pour les disques sortis sous son nom ou ses ouvrages pédagogiques, néanmoins, il a, tout au long de sa carrière, travaillé en tant que sideman ou arrangeur/producteur avec des musiciens et musiciennes de renom dans des styles aussi différents que le Jazz, la World Music, la Fusion, le Gospel ou la Pop. En voici une liste non exhaustive : Raul Paz, Clementine, Paco Sery, Linley Marthe, Laurent De Wilde, Etienne M’Bappé, Stéphane Belmondo, Roger Biwandu, Marcus Miller, Mario Canonge, Georges Seba, Djeli Moussa Diawara, Audren, Nguyen Lê, Le Choeur Gospel de Paris, Maggie Blanchard, Nicole Croisille, Tairo, Axel Tony, Bijou ...',
        sidemandEN: 'Chris Rime is best known for the records he has released under his own name or for his pedagogical works, but throughout his career he has worked as a sideman or arranger/producer with renowned musicians in styles as diverse as Jazz, World Music, Fusion, Gospel or Pop. Here is a non-exhaustive list: Raul Paz, Clementine, Paco Sery, Linley Marthe, Laurent De Wilde, Etienne M\'Bappé, Stéphane Belmondo, Roger Biwandu, Marcus Miller, Mario Canonge, Georges Seba, Djeli Moussa Diawara, Audren, Nguyen Lê, Le Choeur Gospel de Paris, Maggie Blanchard, Nicole Croisille, Tairo, Axel Tony, Bijou...',
        pedagoFR:'Chris Rime a écrit plusieurs méthodes autour de la guitare ou de la MAO, mais avant cela il avait enseigné de nombreuses années dans des conservatoires ou des écoles de musiques actuelles. Ses méthodes sont maintenant devenues des références dans le milieu de la guitare en France et à l’étranger où elles ont été traduites. Il a également été directeur du Centre des Musiques Actuelles à Valenciennes de 2003 à 2007 où il a pu mettre en pratique certaines de ses idées novatrices en matière de pédagogie. Il a croisé sur sa route plus de 3000 élèves (cours particuliers ou Master classes) dont une grande partie travaille maintenant dans les métiers de la musique. Depuis 2007, Chris Rime parcoure la France pour animer stages et Master Classes.',
        pedagoEN:'Chris Rime has written several methods for the guitar or for computer music , but before that he taught for many years in conservatories or music schools. His methods have now become references in the guitar world in France and abroad where they have been translated. He was also director of the Centre des Musiques Actuelles in Valenciennes from 2003 to 2007 where he was able to put into practice some of his innovative ideas in pedagogy. He has met more than 3000 students (private lessons or master classes), many of whom are now working in the music industry. Since 2007, Chris Rime has been traveling all over France to give workshops and master classes.',

    }


    const btnTxt = () => {
        if (locale === 'en' && isOpened === true) {
            return 'Minimize'
        } else if (locale === 'en' && isOpened === false) {
            return 'Read more'
        } else if (locale === 'fr' && isOpened === true) {
            return 'Minimiser'
        } else if (locale === 'fr' && isOpened === false) {
            return 'Lire la suite'
        }
    }
    const handleClick = () => {
        setIsOpened(!isOpened)
        console.log(isOpened)
    }
    return (
        <div>
            <div className={style.presentationContainer}>
                <div className={style.paragraphContainer}>
                    <div className={`${style.paragraph} ${drawer(1)}`}>
                        <div className={style.icon}>
                            <Image
                                src={'/images/icons/music.svg'}
                                width={50}
                                height={50}
                            />
                        </div>

                        {locale === 'en' ? presentationText.musicEN : presentationText.musicFR}
                    </div>
                    <div className={style.readBtnContainer}>
                        <Button color="orange" variant={"outline"}
                                onClick={isOpened === 1 ? () => setIsOpened(0) : () => setIsOpened(1)}>{isOpened === 1 ? textOpened() : textClosed()}</Button>

                    </div>
                </div>
                <div className={style.paragraphContainer}>
                    <div className={`${style.paragraph} ${drawer(2)}`}>
                        <div className={style.icon}>
                            <Image
                                src={'/images/icons/acc.svg'}
                                width={50}
                                height={50}
                            />
                        </div>


                        {locale === 'en' ? presentationText.sidemandEN : presentationText.sidemanFR}

                    </div>
                    <div className={style.readBtnContainer}>
                        <Button color="orange" variant={"outline"}
                                onClick={isOpened === 2 ? () => setIsOpened(0) : () => setIsOpened(2)}>{isOpened === 2 ? textOpened() : textClosed()}</Button>
                    </div>
                </div>

                <div className={style.paragraphContainer}>
                    <div className={`${style.paragraph} ${drawer(3)}`}>

                        <div className={style.icon}>
                            <Image
                                src={'/images/icons/teacher.svg'}
                                width={50}
                                height={50}
                            />
                        </div>

                        {locale === 'en' ? presentationText.pedagoEN : presentationText.pedagoEN}


                    </div>
                    <div className={style.readBtnContainer}>
                        <Button color="orange" variant={"outline"}
                                onClick={isOpened === 3 ? () => setIsOpened(0) : () => setIsOpened(3)}>{isOpened === 3 ? textOpened() : textClosed()}</Button>
                    </div>
                </div>


            </div>

        </div>
    )
}

