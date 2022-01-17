import BlogList from "./BlogList";
import blogStyles from "../../styles/blogList.module.css";
import {useState} from "react";
import Chip from "@mui/material/Chip";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import BlogPost from "./blogPost";
import {format} from "date-fns";
import {fr} from "date-fns/locale";

export default function BlogContainer( {blogs}){
    const [mainContent, setMainContent] = useState('')
    const handleClick = (title)=>{
        setMainContent('')
    }


    return(
        <div className={blogStyles.mainContainer}>
        <div className={blogStyles.blogContainer}>
            {blogs.map(({ id, attributes: {title, description,publishedAt,content} }) => (
                <>
                <BlogList id={id} key={id} title={title} content={description} publishedAt={publishedAt} >
                <Chip  label='Lire la suite' icon={<DoubleArrowIcon />} onClick={()=>setMainContent(content)} />
                </BlogList>
                </>

                ))}
            <div>
            </div>

        </div>
<BlogPost content={mainContent                                                                                                              } />

        </div>


    )
}