import {Image} from "@mantine/core";
import style from "../../styles/albums.module.css"
import {useState} from "react";
import Link from 'next/link'

export default function Album({url,albumTitle,albumDate, link, theme}){


return (

    <Link href={`/albums/${link}`}>
    <div className={style.albumCover} >

    <Image


        src={`${url}`}
        width={250}
        height={250}

    />
            <div className={style.titleContainer}>
            <div className={theme === 'light' ? style.capTitle : style.capTitleDark}> {albumTitle}</div>
            <div className={theme === 'light' ? style.capDate : style.capDateDark}>{albumDate}</div>
            </div>
        </div>


    </Link>


)
}