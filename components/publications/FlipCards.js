import {BackgroundImage} from '@mantine/core'
import Styles from '../../styles/flipCards.module.css'
import {useState} from "react";

export default function FlipCards({magazine,image,name,items}){
    const [visible, setVisible] = useState(false)
    let key = 0
    const addKey = () => {
        key = key + 1;
        return key
    }

    return (
        <BackgroundImage
            className={Styles.card}
            src={image}
            onMouseEnter={() => setVisible(!visible)}
            onMouseLeave={() => setVisible(!visible)}

        >
            <div className={Styles.infoContainer} style={{visibility : visible ? 'visible' : 'hidden'}}>
                <div className={Styles.magazine}>{magazine}</div>
                <hr/>
                <div className={Styles.name}>{name}</div>
            <ul>
                {items.map((item) =>{
                    return (
                        <li key={addKey()}>{item}</li>
                    )
                } )}
            </ul>
            </div>
        </BackgroundImage>
    )

}