import {useState} from 'react'
import {remark} from 'remark'
import styles from '../../styles/blogList.module.css'
import { Card, Group, Text,Image, Button } from '@mantine/core';
import {useRouter} from 'next/router'
import {format} from 'date-fns'
import {  fr } from 'date-fns/locale'
import Chip from "@mui/material/Chip";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";



//
//  function ReadMore({label, showFunction}){
//
//
//     return(
//         <>
//             <Chip  label={label} icon={<DoubleArrowIcon />} onClick={showFunction}  />
//         </>
//     )
//
// }

// function DisplayBlog({mainBlog}){
//
//     return(
//        <>
//     <p>{mainBlog}</p>
//     </>)
// }


export default function  blogList({title, publishedAt, content,children,image,slug}){
    const router = useRouter()
    const locale = router.locale;
    console.log(image)


    return(
        <div className={styles.cardContainer}>
        <Card onClick={() => {router.push(`/news/${slug}`)}} shadow="sm" padding="lg" radius='0px' className={styles.card}>
            <Card.Section>
                <Image
                src={`${image}`}

                height='150px'


                />
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: 10 }}>
                <Text weight={500} style={{color:'black', fontFamily:'Orbitron'}}>{title}</Text>

            </Group>

            <Text size="sm" style={{  lineHeight: 1.5, overflow:'hidden' }}>
                {content}
            </Text>
            <Button fullWidth className={styles.button}>{locale === 'en' ? ('Read More') : ('Lire la suite')}</Button>


        </Card>
        </div>
            )}
