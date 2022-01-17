import Image from "next/image";
import style from "../../styles/albums.module.css"
import {useState} from "react";

export default function Album({url,albumTitle,albumDate}){
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
    <div className={style.infos} >

    <Image
        className={style.albumCover}
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
        src={`http://127.0.0.1:1337${url}`}
        width={200}
        height={200}

    />
        <div className={style.text} >{title}{date}</div>
    </div>
)
}