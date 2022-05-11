import styles from '../../styles/Topmenu.module.css'
import {useRouter} from 'next/router'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import {Accordion} from "@mantine/core";
import ListenSeparator from "../albums/ListenSeparator";
const label = {

    label: {
        fontFamily: 'Orbitron, sans serif',
        fontSize: '2em',
        color:'black'
    },
    content: {
        color:'black'
    },


}

export default function MobileMenu() {
    const locale = useRouter().locale;
    return (
        <div>
                <Accordion >
                    <Accordion.Item styles={label} label="Work">
                        <div className={styles.mobileMenuContainer}>
                          <Link href={'/biography'}><div className={styles.mobileMenuItem}>{locale === 'en' ? 'Biography' : 'Biographie'}</div></Link>
                            <Link href={'/albums'}><div className={styles.mobileMenuItem}>Albums</div></Link>
                            <Link href={'/movies'}><div className={styles.mobileMenuItem}>Cinema/TV</div></Link>
                            <Link href={'/games'}><div className={styles.mobileMenuItem}>{locale === 'en' ? 'Video Games' : 'Jeux Vidéos'}</div></Link>
                        </div>

                    </Accordion.Item>

                    <Accordion.Item styles={label} label="Media">
                        <div className={styles.mobileMenuContainer}>
                            <Link href={'/media/videos'}><div className={styles.mobileMenuItem}>{locale === 'en' ? 'Videos' : 'Vidéos'}</div></Link>
                            <Link href={'/media/gallery'}><div className={styles.mobileMenuItem}>Photos</div></Link>
                            <Link href={'/media/music'}><div className={styles.mobileMenuItem}>{locale === 'en' ? 'Music' : 'Musique'}</div></Link>
                        </div>
                    </Accordion.Item>

                    <Accordion.Item styles={label} label="Pedagogy">
                        <div className={styles.mobileMenuContainer}>
                            <Link href={'/methods'}><div className={styles.mobileMenuItem}>{locale === 'en' ? 'Methods' : 'Méthodes'}</div></Link>
                            <Link href={'/internet'}><div className={styles.mobileMenuItem}>Internet</div></Link>
                            <Link href={'/publications'}><div className={styles.mobileMenuItem}>Publications</div></Link>
                        </div>                    </Accordion.Item>
                </Accordion>


            <div className={styles.mobileLang}>{locale.toUpperCase()}<LanguageSwitcher/></div>
        </div>
    )
}