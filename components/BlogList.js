import {useState} from 'react'
import {remark} from 'remark'
import styles from '../styles/blogList.module.css'
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


export default function  blogList({title, publishedAt, content,children}){

    return(
        <div className={styles.mainContainer}>
        <div className={styles.blogCard}>
            <h1>{title}</h1>
            <h2>{publishedAt}</h2>
            <p>{content}</p>
            {children}
        </div>
        </div>
            )}
