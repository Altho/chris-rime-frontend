import {Image} from '@mantine/core'
import style from '../../styles/blogList.module.css'
import {useRouter} from "next/router";
import {format} from 'date-fns'
import { fr } from 'date-fns/locale'


export default function BlogHeader({img, title,date}){
    const locale = useRouter().locale
    const upDate = format(new Date(date), 'MMMM do y')
    const upDateFr = format(new Date(date), 'd MMMM y', {locale : fr})


    return(
        <div className={style.blogHeader}>
            <div className={style.blogImage}>
                <Image src={`${img}`} />
            </div>
            <div className={style.blogTitle}>
                {title}
            </div>
            <div className={style.date}>{locale === 'en' ? (upDate) : (upDateFr)}</div>

        </div>
    )
}