import style from '../../styles/home.module.css'
import {Blockquote} from "@mantine/core";
import BioSeparator from "./BioSeparator";
import {useRouter} from "next/router";
import Link from 'next/link'
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import {Quote} from 'tabler-icons-react'


export default function ShortBio({testimonials}) {
    const {height, width} = useWindowDimensions()
    const locale = useRouter().locale;
    const pluginsList = () => [new AutoPlay({ duration: 4000, direction: "NEXT", stopOnHover: true }),new Pagination({ type: 'bullet' })]

    return (
        <div>
        <div  className={style.shortBio}>
            <div className={style.filter}>
                <div className={style.fitting}>

                    <Flicking
                        className={style.vp}
                        align="prev"
                        circular={true}
                        bound={true}
                        plugins={pluginsList()}
                        panelsPerView={1}



                    >




                        {testimonials.map((testimonial) => {
                            const id = testimonial.id;
                            const testiNode = testimonial.attributes
                            const content = testiNode.quote;
                            const auteur = testiNode.author;
                            return (
                                <div
                                    key={id}>


                                        <Blockquote className={style.quote} cite={`"- ${auteur}"`} icon={width > 900 ? < Quote /> : null}>
                                            {content}

                                        </Blockquote>


                                </div>
                            )
                        })}

                        <ViewportSlot>
                            <div className="flicking-pagination"></div>
                        </ViewportSlot>



                    </Flicking>


            </div>
                <BioSeparator/>
            </div>

        </div>

        </div>
    )
}