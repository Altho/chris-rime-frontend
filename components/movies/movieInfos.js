import {Table} from '@mantine/core';
import style from '../../styles/[slug].module.css'
import {useRouter} from 'next/router'
import {format} from 'date-fns'
import {fr} from 'date-fns/locale'


export default function MovieInfos({date, realisation, acteurs, duree}) {
    const currentLocale = useRouter().locale
    const localisation = () => {
        if (currentLocale === 'fr') {
            return {locale: fr}
        } else {
            return {locale: en}
        }
    }

    const releaseDate = format(new Date(date), 'yyyy', localisation())
    return (
        <Table className={style.infoTable} verticalSpacing="xs" striped={true}>
            <thead>
            <tr>
                <td className={style.tableTitle}>{currentLocale === 'en' ? ('Release Date :') : ('Date de sortie :')}</td>
                <td>{releaseDate}</td>
            </tr>
            <tr>
                <td className={style.tableTitle}>{currentLocale === 'en' ? ('Film-maker :') : ('Réalisation :')}</td>
                <td>{realisation}</td>
            </tr>
            <tr>
                <td className={style.tableTitle}>{currentLocale === 'en' ? ('Actors :') : ('Acteurs :')}</td>
                <td>{acteurs}</td>
            </tr>
            <tr>
                <td className={style.tableTitle}>{currentLocale === 'en' ? ('Length :') : ('Durée :')}</td>
                <td>{duree}</td>
            </tr>
            </thead>
        </Table>
    )
}
