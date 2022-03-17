import {Text, Blockquote} from '@mantine/core'
import Link from 'next'
import style from '../../styles/[slug].module.css'
import {Button} from '@mantine/core'
import {useRouter} from 'next/router';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';

export default function Description({description,auteur,buy, digital}){
    const locale= useRouter().locale
    console.log(auteur)
    return(
    <>
    <Blockquote cite={auteur} className={style.quote} styles={{body: {color: 'black'}, cite: {color: 'white'}}}>{description}</Blockquote>




    </>
    )
}