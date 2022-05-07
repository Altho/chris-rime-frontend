import style from '../styles/reviews.module.css'
import {useState, useEffect, useRef} from "react";
import {Blockquote} from "@mantine/core";
import { Divider } from '@mantine/core';
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";


export default function Reviews({reviews}) {
    const pluginsList = () => [new AutoPlay({ duration: 4000, direction: "NEXT", stopOnHover: false }),new Pagination({ type: 'bullet' })]

    if (reviews) {
        {   console.log('------------------reviews.js----------------')
            console.log(reviews)}
        const length = reviews.length;
        return (

            <Flicking
                className={style.vp}
                align="prev"
                circular={true}
                bound={true}
                plugins={pluginsList()}
                panelsPerView={1}



            >




                    {reviews.map((rev) => {
                        console.log('-----------map-----------')
                        console.log(rev)
                        const id = rev.id;
                        const reviewNode = rev.attributes
                        const content = reviewNode.review;
                        const auteur = reviewNode.auteur;
                        const lien = reviewNode.lien;
                        return (
                            <div
                                key={id}>
                                <a href={lien} target={"_blank"} rel="noreferrer">

                                    <Blockquote className={style.quote} cite={`"- ${auteur}"`}>
                                        {content}

                                    </Blockquote>

                                </a>
                            </div>
                        )
                    })}

                <ViewportSlot>
                    <div className="flicking-pagination"></div>
                </ViewportSlot>



            </Flicking>


        )
    } else {
        return ('')
    }

    // useEffect(() => {
    //     reviewScroll();
    // }, [pointer, currentReview]);
    //
    // function reviewScroll(){
    //     setTimeout(function scroll() {
    //         if (pointer === length - 1) {
    //             console.log(inProp)
    //             setPointer(0)
    //             setInProp(false);
    //
    //         } else {
    //             setPointer(pointer + 1)
    //             console.log(inProp)
    //             setInProp(false);
    //
    //
    //         }
    //         setCurrentReview(reviews[pointer]);
    //         setInProp(true);
    //     }, 6000);
    // }
    //
    // function precedent(){
    //     if(pointer <= 0){
    //         setInProp(true);
    //         clearTimeout(scroll)
    //         setPointer(reviews.length-1)
    //         reviewScroll()
    //     }
    //     else{
    //         setPointer(pointer - 1)
    //     }
    //     console.log(pointer)
    //
    //     console.log(pointer)
    // }

    // return (
    //     <div className={style.review} style={{backgroundColor: `#${background}`}}>
    //         <div onClick={precedent}>Precedent</div>
    //
    //         <a href={currentReview.lien} target={"_blank"}>
    //             <div className={style.quote}>
    //             <CSSTransition in={inProp} timeout={3000}  classNames={{
    //                 enter: style.transitionEnter,
    //                 enterActive: style.transitionEnterActive,
    //                 exit: style.transitionExit,
    //                 exitActive: style.transitionExitActive,
    //             }}
    //             >
    //                 <Blockquote  styles={{
    //                     body: {color: 'white'},
    //                 }} cite={`"- ${currentReview.auteur}"`}>
    //                     {currentReview.review}
    //
    //                 </Blockquote>
    //             </CSSTransition>
    //             </div>
    //
    //         </a>
    //         <div>Suivant</div>
    //
    //     </div>
    // );


}

