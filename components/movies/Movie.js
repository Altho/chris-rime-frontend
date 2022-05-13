import {Image} from "@mantine/core";
import style from "../../styles/albums.module.css"
import Link from 'next/link'

export default function Movie({url,movieName,movieDate, link}){


    return (

        <Link href={`/movies/${link}`}>
            <div className={style.albumCover} >

                <Image

                    withPlaceholder


                    src={`${url}`}
                    width={232}
                    height={287}

                />
                <div className={style.titleContainer}>
                    <div className={style.capTitle}> {movieName}</div>
                    <div className={style.capDate}>{movieDate}</div>
                </div>
            </div>


        </Link>


    )
}