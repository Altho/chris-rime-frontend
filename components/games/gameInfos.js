import { Table } from '@mantine/core';
import style from '../../styles/[slug].module.css'
import {useRouter} from 'next/router'
import {format} from 'date-fns'
import { fr } from 'date-fns/locale'


export default function GameInfos({release,publisher, developper, genre,platforms}){
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
        <Table className={style.infoTable} verticalSpacing="xs" striped={true}>
            <thead>
            <tr>
                <td className={style.tableTitle}>{currentLocale === 'en' ? ('Release Date :') : ('Date de sortie :')}</td>
                <td>{releaseDate}</td>
            </tr>
            <tr>
                <td className={style.tableTitle}>{currentLocale === 'en' ? ('Publisher :') : ('Editeur :')}</td>
                <td>{publisher}</td>
            </tr>
            <tr >

                <td className={style.tableTitle}>{currentLocale === 'en' ? ('Developper :') : ('Developpeur :')}</td>

                <td >{developper}</td>
            </tr>
            <tr >

                <td className={style.tableTitle}>Genre :</td>

                <td >{genre}</td>
            </tr>
            <tr >

                <td className={style.tableTitle}>{currentLocale === 'en' ? ('Platforms :') : ('Plateformes :')}</td>

                <td >{platforms}</td>
            </tr>
            </thead>
        </Table>
    )
}
