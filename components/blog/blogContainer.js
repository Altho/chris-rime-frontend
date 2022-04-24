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
import {CarouselProvider, DotGroup, Slide, Slider} from "pure-react-carousel";
import style from "../../styles/reviews.module.css";
import {Blockquote} from "@mantine/core";

export default function BlogContainer({blogs}) {
    const [mainContent, setMainContent] = useState('')
    const locale = useRouter().locale;
    let slideId = -1;

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





                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={20}
                    isIntrinsicHeight
                    totalSlides={blogs.length}
                    infinite
                    isPlaying={true}
                    style={{
                        backgroundColor:'#ebebeb',
                        width:'100vw'

                    }}

                >


                    <Slider
                    >


                        {blogs.map(({id, attributes: {image = {}, title, description, publishedAt, content,slug} = {}}) => {
                            const imageUrl = image.data.attributes.url;

                            slideId++;

                                return(

                                <Slide key={id} index={slideId}>
                                    <BlogList id={id} key={id} locale={locale} title={title} content={description} slug={slug} publishedAt={publishedAt} image={imageUrl}>
                                        <Chip label='Lire la suite' icon={<DoubleArrowIcon />}
                                              onClick={() => setMainContent(content)}/>
                                    </BlogList>
                                </Slide>

                            )})}

                    </Slider>

                    <div className={style.dotsContainer}>

                        <DotGroup className={style.dots}/>
                    </div>


                </CarouselProvider>





                <div>
                </div>



        </div>


    )
}