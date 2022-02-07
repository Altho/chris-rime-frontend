import {Text, Blockquote} from '@mantine/core'
import Link from 'next'
import style from '../../styles/[slug].module.css'
import {Button} from '@mantine/core'
import {useRouter} from 'next/router';
export default function Description({description,auteur,buy}){
    const locale= useRouter().locale
    console.log(auteur)
    return(
    <>
    <Blockquote cite={auteur} className={style.quote} styles={{body: {color: 'white'}, cite: {color: 'white'}}}>{description}</Blockquote>
        <Button
            className={style.buy}
            component='a'
            target="_blank"
            href={buy}>
            {locale==='en' ? ('BUY NOW') : ('ACHETER')}
        </Button>

    </>
    )
}