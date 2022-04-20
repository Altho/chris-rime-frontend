import {Image} from "@mantine/core";
import style from "../../styles/albums.module.css"
import {useState} from "react";
import Link from 'next/link'

export default function Album({url,albumTitle,albumDate, link}){


return (

    <Link href={`/albums/${link}`}>
    <div className={style.albumCover} >

    <Image

        withPlaceholder


        src={`${url}`}
        width={250}
        height={250}

    />
            <div className={style.titleContainer}>
            <div className={style.capTitle}> {albumTitle}</div>
            <div className={style.capDate}>{albumDate}</div>
            </div>
        </div>


    </Link>


)
}