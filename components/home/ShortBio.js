import style from '../../styles/Home.module.css'
import {Blockquote} from "@mantine/core";
import BioSeparator from "./BioSeparator";
import {useRouter} from "next/router";
import Link from 'next/link'

export default function ShortBio() {
    const locale = useRouter().locale;
    return (
        <div>
        <div  className={style.shortBio}>
            <div className={style.filter}>
                <div className={style.fitting}>
            <Blockquote styles={{body:{color:'white'}, icon:{color:'white'} }}>
                Chris Rime, entouré par une famille de musiciens, commence la musique à 10 ans. Au collège, il joue de
                la batterie et surtout de la guitare et anime déja de nombreuses soirées privées. A 16 ans, il reçoit sa
                première commande pour illustrer un court métrage puis rencontre Nguyen Lê avec qui il forme un duo qui
                se produit de manière régulière dans les clubs de jazz parisiens. La majorité à peine acquise, il
                traverse l&aposatlantique pour s&aposinscrire au mythique Berklee College of Music.
            </Blockquote>
                    <div className={style.buttonContainer}>
                        <div className={style.bioButton}> <Link className={style.link} href={'/biography'}>{locale === 'en' ?('Read more') : ('En savoir plus')}</Link></div>
                    </div>
            </div>
                <BioSeparator/>
            </div>

        </div>

        </div>
    )
}