import {Image, Badge, Blockquote, Button} from '@mantine/core'
import Link from 'next/link'
import style from '../../styles/latest.module.css'
import {useRouter} from "next/router";
import ReactPlayer from "react-player";



export default function LatestRelease(album){

    const router = useRouter()

    const locale = useRouter().locale

    const data = album.album[0].attributes
    const path = useRouter().pathname
    console.log(data)
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
                    <Blockquote className={style.quote}> {data.description}</Blockquote>
                    <ReactPlayer url={'https://soundcloud.com/magazine-records-1/mr167_1?in=magazine-records-1/sets/mr167&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'}
                                 width={'100%'}
                                 height={'80px'}
                                 controls/>

                </div>
                <Link href={`/albums/${data.slug}`}><Button  className={style.button}>{locale === 'en' ? 'Discover' : 'Découvrir'}</Button></Link>

            </div>

        </div>
    )
}