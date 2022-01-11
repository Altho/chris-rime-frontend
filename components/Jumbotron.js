import styles from './Jumbotron.module.css'
import Image from 'next/image'


export function Jumbotron(){
    return(
        <div className={styles.jumbotron}>
            <Image
                src="/images/chrisrime.jpg" // Route of the image file
                placeholder='blur'
                blurDataURL='/images/chrisrime-blur.jpg'
                layout='fill'
                objectPosition='top'
                objectFit='cover'
                alt="Your Name"
            />
        </div>
    )
}