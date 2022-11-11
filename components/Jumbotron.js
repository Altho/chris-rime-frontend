import styles from './Jumbotron.module.css'
import {Image} from '@mantine/core'



export function Jumbotron(){
    return(
        <div className={styles.jumbotron}>
            <video className={styles.video} src={"/mainvid.mp4"} controls controlsList={'nodownload, nofullscreen'} autoPlay playsInline loop muted></video>

        </div>
    )
}
