import {useState} from 'react'
import {remark} from 'remark'
import styles from '../styles/blogList.module.css'
import {format} from 'date-fns'
import {  fr } from 'date-fns/locale'
import Chip from "@mui/material/Chip";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";


 function ReadMore({label, showFunction}){


    return(
        <>
            <Chip  label={label} icon={<DoubleArrowIcon />} onClick={showFunction}  />
        </>
    )

}

function DisplayBlog({mainBlog}){

    return(
       <>
    <p>{mainBlog}</p>
    </>)
}


export default function  blogList({title, publishedAt, content}){
    const [mainContent, setMainContent] = useState('')

    const showBlog = () => {
        setMainContent(content)
    }
    const date = format(new Date(publishedAt), 'Qo MMMM yyyy',{ locale: fr })
    return(
        <div className={styles.mainContainer}>
        <div className={styles.blogCard}>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <p>{content}</p>
            <ReadMore label='lire la suite' showFunction={showBlog}/>

        </div>
            <DisplayBlog mainBlog={mainContent}/>
        </div>
    )
}