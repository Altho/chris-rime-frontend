import {Image, Badge, Blockquote, Button} from '@mantine/core'
import Link from 'next/link'
import style from '../../styles/latest.module.css'
import {useRouter} from "next/router";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styles from "../../styles/home.module.css";
import ReactPlayer from "react-player";




export default function LatestRelease(album){


    const router = useRouter()

    const locale = useRouter().locale

    const data = album.album[0].attributes
    const path = useRouter().pathname
    return(


        <div className={style.container}>
            <div className={style.badgeContainer}>
                <Badge className={style.badge} color="orange" size="xl" radius="lg">{locale === 'en' ? 'Now available' : 'Disponible maintenant'}</Badge>

            </div>
            <div className={style.wrapper}>
                <Image
                    src={data.image.data.attributes.url}
                    className={style.albumImage}
                    alt={'Album cover'}
                    height={350}
                    width={350}
                />
                <div className={style.textContainer}>
                    <div className={style.titre}>{data.name}</div>
                    <div className={styles.mainVideo}>
                        <ReactPlayer url={'https://www.youtube.com/watch?v=dmMRsHp725s'} width={'100%'} height={'100%'}
                                     controls/>
                    </div>

                    {/*<AudioPlayer*/}
                    {/*    autoPlay={false}*/}
                    {/*    src={data.audio.data.attributes.url}*/}
                    {/*    preload={'none'}*/}

                    {/*/>*/}


                </div>
                <Link href={`/albums/${data.slug}`}><Button  className={style.button}>{locale === 'en' ? 'Discover' : 'Découvrir'}</Button></Link>

            </div>

        </div>

    )
}