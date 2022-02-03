import style from '../styles/reviews.module.css'
import {useState, useEffect, useRef} from "react";
import {Blockquote} from "@mantine/core";
import Link from '@mantine/core'

export default function Reviews({reviews, background}) {
    const [currentReview, setCurrentReview] = useState(reviews[0]);
    const [pointer, setPointer] = useState(1);
    const length = reviews.length;
    console.log(background)

    useEffect(() => {
        console.log('pointer', pointer);
        setTimeout(() => {
            if (pointer === length - 1) {
                console.log('reset')
                setPointer(0)
            } else {
                console.log(pointer.current)
                setPointer(pointer + 1)
                console.log(pointer.current)

            }
            console.log(reviews[pointer])
            setCurrentReview(reviews[pointer]);
        }, 5000);
    }, [pointer, currentReview]);

    return (
        <div className={style.review} style={{backgroundColor: `#${background}`}}>
            <a href={currentReview.lien} target={"_blank"}>
                <Blockquote styles={{
                    body: {color: 'white'},
                }}
                            cite={`"- ${currentReview.auteur}"`}>
                    {currentReview.review}

                </Blockquote>
            </a>

        </div>
    );
}