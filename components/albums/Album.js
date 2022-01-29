import Image from "next/image";
import style from "../../styles/albums.module.css"
import {useState} from "react";
import Link from 'next/link'

export default function Album({url,albumTitle,albumDate, link}){
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    function mouseIn(){
        console.log(albumTitle)
        setTitle(albumTitle);
        setDate(albumDate)
    }
    function mouseOut(){
        setTitle('');
        setDate('')
    }
return (

    <Link href={`/albums/${link}`}>
    <div className={style.albumCover} >

    <Image

        onMouseEnter={mouseIn}
        placeholder='color'
        layout='responsive'
        objectFit='cover'

        onMouseLeave={mouseOut}
        src={`http://127.0.0.1:1337${url}`}
        width={250}
        height={250}

    />

            <div className={style.capTitle}> {albumTitle}</div>
            <div className={style.capDate}>{albumDate}</div>
        </div>


    </Link>


)
}