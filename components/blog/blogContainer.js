import BlogList from "./BlogList";
import blogStyles from "../../styles/blogList.module.css";
import {useState} from "react";
import {useRouter} from 'next/router'
import {Button} from '@mantine/core'
import useWindowDimensions from "../../hooks/useWindowDimensions";
import BlogPost from "./blogPost";
import {format} from "date-fns";
import {fr} from "date-fns/locale";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

import "@egjs/react-flicking/dist/flicking.css";import style from "../../styles/reviews.module.css";
import { AutoPlay } from "@egjs/flicking-plugins";

import {Blockquote} from "@mantine/core";



export default function BlogContainer({blogs}) {
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
        else {
            return 3
        }

    }






    const [mainContent, setMainContent] = useState('')
    const locale = useRouter().locale;
    let slideIndex = -1;


   const pluginsList = () => [new AutoPlay({ duration: 4000, direction: "NEXT", stopOnHover: false }),new Pagination({ type: 'bullet' })]

    return (
        <div className={blogStyles.mainContainer}>
            <div className={blogStyles.titleContainer}>
           <div className={blogStyles.titre}> - NEWS -</div>
            </div>
        <div className={blogStyles.blogContainer}>


            <Flicking
                align="prev"
                circular={true}
                bound={true}
                panelsPerView={slidesToShow()}
                plugins={pluginsList()}

                >
                {blogs.map(({id, attributes: {image = {}, title, description, publishedAt, content,slug} = {}}) => {
                    const imageUrl = image.data.attributes.url;
                    slideIndex++;



                    return(

                        <div key={slideIndex} style={{padding: '40px 0 40px 0'}}>
                        <BlogList id={id} key={id} locale={locale} title={title} content={description} slug={slug} publishedAt={publishedAt} image={imageUrl}>
                            <Button>{locale === 'en' ? 'Read more' : 'Lire la suite'}</Button>

                        </BlogList>

                        </div>


                    )})}

                <ViewportSlot>
                    <div className="flicking-pagination"></div>
                </ViewportSlot>

            </Flicking>



                <div>
                </div>



        </div>
        </div>


    )

}

