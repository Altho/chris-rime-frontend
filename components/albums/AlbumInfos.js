import { Table } from '@mantine/core';
import style from '../../styles/[slug].module.css'
import {useRouter} from 'next/router'
import {format} from 'date-fns'

export default function AlbumInfos({release,label,artists}){
    console.log('album info !!')
    console.log(release, label, artists)
    const locale = useRouter().locale
    const releaseDate = format(new Date(release), 'ii MMM y')
    return(
        <Table className={style.infoTable} verticalSpacing="xs" striped={true}>
            <thead>
            <tr>
            <td className={style.tableTitle}>{locale === 'en' ? ('Release Date :') : ('Date de sortie :')}</td>
            <td>{releaseDate}</td>
            </tr>
            <tr>
                <td className={style.tableTitle}>Label :</td>
                <td>{label}</td>
            </tr>
            <tr >

                <td className={style.tableTitle}>{locale === 'en' ? ('Artists :') : ('Artistes :')}</td>
                    <div >
                        <td >{artists}</td>
                </div>
            </tr>
            </thead>
        </Table>
    )
}