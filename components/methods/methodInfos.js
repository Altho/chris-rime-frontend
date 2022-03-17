import { Table } from '@mantine/core';
import style from '../../styles/[slug].module.css'
import {useRouter} from 'next/router'
import {format} from 'date-fns'
import { fr, en } from 'date-fns/locale'


export default function MethodInfos({release,publisher,pages}){
    console.log(release, publisher, pages)
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

                <td className={style.tableTitle}>Pages :</td>
                <div >
                    <td >{pages}</td>
                </div>
            </tr>
            </thead>
        </Table>
    )
}
