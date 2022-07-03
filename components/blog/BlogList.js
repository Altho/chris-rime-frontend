import {useState} from 'react'
import styles from '../../styles/blogList.module.css'
import { Card, Group, Text,Image, Button} from '@mantine/core';
import Link from 'next/link'
import {format} from 'date-fns'
import {  fr } from 'date-fns/locale'






export default function  blogList({title, publishedAt, content,locale, children,image,slug}){

    let displayTitle = title.slice(0,25)
    if(title.length > 25){
        displayTitle = displayTitle+'...'
    }


    return(
        <div className={styles.cardContainer}>
            <Link href={`/news/${slug}`}>
        <Card shadow="sm" padding="lg" radius='5px' className={styles.card}>
            <Card.Section>
                <Image
                src={`${image}`}

                height='150px'


                />
            </Card.Section>

            <Group  position="apart" style={{ marginBottom: 5, marginTop: 10 }}>
                <Text  weight={500} style={{color:'black', fontFamily:'Orbitron', }}>{displayTitle}</Text>

            </Group>
            <Text size="sm" style={{  lineHeight: 1.5, overflow:'hidden' }}>
                {content}
            </Text>
            <Button fullWidth color={"orange"} className={styles.button}>{locale === 'en' ? ('Read More') : ('Lire la suite')}</Button>


        </Card>
            </Link>
        </div>
            )}
