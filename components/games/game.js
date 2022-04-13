import {Image} from "@mantine/core";
import style from "../../styles/albums.module.css"
import Link from 'next/link'

export default function Game({url,gameName,gameDate, link}){


    return (

        <Link href={`/games/${link}`}>
            <div className={style.albumCover} >

                <Image

                    withPlaceholder


                    src={`${process.env.DB_HOST}${url}`}
                    width={232}
                    height={287}

                />
                <div className={style.titleContainer}>
                    <div className={style.capTitle}> {gameName}</div>
                    <div className={style.capDate}>{gameDate}</div>
                </div>
            </div>


        </Link>


    )
}