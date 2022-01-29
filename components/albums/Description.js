import {Text, Blockquote} from '@mantine/core'
import Link from 'next'
import Style from '../../styles/[slug].module.css'
export default function Description({description,auteur}){
    console.log(auteur)
    return(
    <>
    <Blockquote cite={auteur} styles={{body: {color: 'white'}, cite: {color: 'white'}}}>{description}</Blockquote>
    </>
    )
}