import {Image} from "@mantine/core";
import style from "../../styles/albums.module.css"
import Link from 'next/link'

export default function Method({url,methodName,methodDate, link}){
    console.log(url, methodName, methodDate, link)


    return (

        <Link href={`/methods/${link}`}>
            <div className={style.albumCover} >

                <Image

                    withPlaceholder


                    src={`${url}`}
                    width={232}
                    height={287}

                />
                <div className={style.titleContainer}>
                    <div className={style.capTitle}> {methodName}</div>
                    <div className={style.capDate}>{methodDate}</div>
                </div>
            </div>


        </Link>


    )
}