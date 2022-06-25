import {BackgroundImage} from '@mantine/core'
import Styles from '../../styles/flipCards.module.css'
import {useState} from "react";

export default function FlipCards({magazine,image,name,items}){
    const [visible, setVisible] = useState(false)

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
                        <li>{item}</li>
                    )
                } )}
            </ul>
            </div>
        </BackgroundImage>
    )

}