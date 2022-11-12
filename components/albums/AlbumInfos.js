import { Table } from '@mantine/core';
import style from '../../styles/[slug].module.css'
import {useRouter} from 'next/router'
import {format} from 'date-fns'
import { fr } from 'date-fns/locale'


export default function AlbumInfos({release,label,artists}){
    const currentLocale = useRouter().locale
    const localisation = () => {
    if(currentLocale === 'fr'){
        return {locale: fr}
    }
    else{
        return {locale: en}
    }
    }

    const releaseDate = format(new Date(release), 'MMMM y', localisation())
    return(
        <Table className={style.infoTable} verticalSpacing="xs" striped>
            <thead>
            <tr>
            <td className={style.tableTitle}>{currentLocale === 'en' ? ('Release Date :') : ('Date de sortie :')}</td>
            <td>{releaseDate}</td>
            </tr>
            <tr>
                <td className={style.tableTitle}>Label :</td>
                <td>{label}</td>
            </tr>
            <tr >

                <td className={style.tableTitle}>{currentLocale === 'en' ? ('Artists :') : ('Artistes :')}</td>

                        <td >{artists}</td>

            </tr>
            </thead>
        </Table>
    )
}
