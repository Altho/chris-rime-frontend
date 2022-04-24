import BlogList from "./BlogList";
import blogStyles from "../../styles/blogList.module.css";
import {useState} from "react";
import Chip from "@mui/material/Chip";
import {useRouter} from 'next/router'
import useWindowDimensions from "../../hooks/useWindowDimensions";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import BlogPost from "./blogPost";
import {format} from "date-fns";
import {fr} from "date-fns/locale";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";import style from "../../styles/reviews.module.css";
import {Blockquote} from "@mantine/core";

export default function BlogContainer({blogs}) {
    const [mainContent, setMainContent] = useState('')
    const locale = useRouter().locale;
    let slideIndex = -1;
    const {height, width} = useWindowDimensions()

    const slidesToShow = () => {
        if (width <= 600) {
            return 1
        }
        else if (width <= 900) {
            return 2
        }
        else if (width <= 1440) {
            return 3
        }

    }
    console.log(blogs.length)


    return (
        <div className={blogStyles.blogContainer}>

            <h1>{slidesToShow()}</h1>

            <Flicking
                align="prev"
                circular={true}
                bound={true}
                panelsPerView={slidesToShow()}

                onMoveEnd={e => {
                    console.log(e);
                }}>
                {blogs.map(({id, attributes: {image = {}, title, description, publishedAt, content,slug} = {}}) => {
                    const imageUrl = image.data.attributes.url;
                    slideIndex++;



                    return(

                        <div key={slideIndex}>
                        <BlogList id={id} key={id} locale={locale} title={title} content={description} slug={slug} publishedAt={publishedAt} image={imageUrl}>
                            <Chip label='Lire la suite' icon={<DoubleArrowIcon />}
                                  onClick={() => setMainContent(content)}/>
                        </BlogList>
                        </div>


                    )})}
            </Flicking>















                <div>
                </div>



        </div>


    )
}