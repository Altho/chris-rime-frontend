import BlogList from "./BlogList";
import blogStyles from "../../styles/blogList.module.css";
import {useState} from "react";
import Chip from "@mui/material/Chip";
import {useRouter} from 'next/router'

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import BlogPost from "./blogPost";
import {format} from "date-fns";
import {fr} from "date-fns/locale";

export default function BlogContainer({blogs}) {
    const [mainContent, setMainContent] = useState('')
    const locale = useRouter().locale;



    return (
        <div className={blogStyles.mainContainer}>
            <div className={blogStyles.blogContainer}>
                {blogs.map(({id, attributes: {image = {}, title, description, publishedAt, content,slug} = {}}) => {
                    const imageUrl = image.data.attributes.url;
                    return(

                    <>
                        <BlogList id={id} key={id} locale={locale} title={title} content={description} slug={slug} publishedAt={publishedAt} image={imageUrl}>
                            <Chip label='Lire la suite' icon={<DoubleArrowIcon />}
                                  onClick={() => setMainContent(content)}/>
                        </BlogList>
                    </>

                )})}
                <div>
                </div>

            </div>

        </div>


    )
}