import styles from './Jumbotron.module.css'
import {Image} from '@mantine/core'


export function Jumbotron(){
    return(
        <div className={styles.jumbotron}>
            <Image src={"/images/framus_logo.png"}
                   className={styles.framus}
                    width={100}
            />
        </div>
    )
}