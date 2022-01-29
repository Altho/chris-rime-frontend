import {useState} from 'react'
import {remark} from 'remark'
import styles from '../../styles/blogList.module.css'
import { Card, Group, Text,Image } from '@mantine/core';
// import Image from 'next/image';
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


export default function  blogList({title, publishedAt, content,children,image}){
    console.log(image)


    return(
        <div className={styles.cardContainer}>
        <Card shadow="sm" padding="lg" radius='0px' className={styles.card}>
            <Card.Section>
                <Image
                src={`http://127.0.0.1:1337${image}`}

                height='150px'


                />
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5}}>
                <Text weight={500}>{title}</Text>

            </Group>

            <Text size="sm" style={{  lineHeight: 1.5 }}>
                {content}
            </Text>


        </Card>
        </div>
            )}
