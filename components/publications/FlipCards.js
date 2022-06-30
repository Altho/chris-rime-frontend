import {BackgroundImage} from '@mantine/core'
import Styles from '../../styles/flipCards.module.css'
import {useState} from "react";
import {useRouter} from "next/router";


export default function FlipCards({magazine, image, name, items, content}) {
    const locale = useRouter().locale

    const [visible, setVisible] = useState(false)
    let key = 0
    const addKey = () => {
        key = key + 1;
        return key
    }

    const renderList = () => {

        if (locale === 'en') {


            return (
                items.en.map((item) => (
                    <li key={addKey()}>{item}</li>
                ))
            )

        } else {


            return (
                items.fr.map((item) => (
                    <li key={addKey()}>{item}</li>
                ))
            )

        }
    }

    return (
        <BackgroundImage
            className={Styles.card}
            src={image}
            onMouseEnter={() => setVisible(!visible)}
            onMouseLeave={() => setVisible(!visible)}

        >
            <div className={Styles.infoContainer} style={{visibility: visible ? 'visible' : 'hidden'}}>
                <div className={Styles.magazine}>{magazine}</div>
                <hr/>
                <div className={Styles.name}>{locale === 'en' ? name.en : name.fr}</div>
                <ul>
                    {renderList()}
                </ul>
                <hr/>
                <div className={Styles.content}>{locale === 'en' ? content.en : content.fr}</div>
            </div>
        </BackgroundImage>
    )

}