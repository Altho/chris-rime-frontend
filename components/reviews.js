import style from '../styles/reviews.module.css'
import {useState, useEffect, useRef} from "react";
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup} from 'pure-react-carousel';
import {Blockquote} from "@mantine/core";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Divider } from '@mantine/core';


export default function Reviews({reviews}) {

    if (reviews) {
        {   console.log('------------------reviews.js----------------')
            console.log(reviews)}
        const length = reviews.length;
        return (

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={20}
                isIntrinsicHeight
                totalSlides={length}
                infinite
                isPlaying={true}
                style={{
                    backgroundColor:'#ebebeb',
                    width:'100vw'

            }}
            >

                <Slider                 className={style.slide}
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
                            <Slide
                                key={id}

                                index={id}>
                                <a href={lien} target={"_blank"} rel="noreferrer">

                                    <Blockquote className={style.quote} styles={{
                                        body: {
                                            color: 'white',


                                        },
                                    }} cite={`"- ${auteur}"`}>
                                        {content}

                                    </Blockquote>

                                </a>
                            </Slide>
                        )
                    })}

                </Slider>

                <div className={style.dotsContainer}>

                    <DotGroup className={style.dots}/>
                </div>


            </CarouselProvider>


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

