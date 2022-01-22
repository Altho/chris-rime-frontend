import styles from './Jumbotron.module.css'
import Image from 'next/image'


export function Jumbotron(){
    return(
        <div className={styles.jumbotron}>
            <Image
                src="/images/chrisrime.webp" // Route of the image file
                placeholder='blur'
                priority={true}
                blurDataURL='/images/crblur.jpg'
                layout='fill'
                objectPosition='top'
                objectFit='cover'
                alt="Your Name"
            />
        </div>
    )
}