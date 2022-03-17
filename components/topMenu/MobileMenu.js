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
            {locale === 'en' ? (
                <Accordion >
                    <Accordion.Item  classNames={{

                        itemTitle: styles.label

                    }} styles={label} label="Work">
                        <div className={styles.mobileMenuContainer}>
                            <div className={styles.mobileMenuItem}><a href={'/biography'}>Biography</a></div>
                            <div className={styles.mobileMenuItem}><a href={'/albums'}>Albums</a></div>
                            <div className={styles.mobileMenuItem}><a href={'/biography'}>Cinema/TV</a></div>
                            <div className={styles.mobileMenuItem}><a href={'/biography'}>Video Games</a></div>
                        </div>

                    </Accordion.Item>

                    <Accordion.Item styles={label} label="Media">
                        <div className={styles.mobileMenuContainer}>
                            <div className={styles.mobileMenuItem}><a href={'/media/videos'}>Videos</a></div>
                            <div className={styles.mobileMenuItem}><a href={'/media/gallery'}>photos</a></div>
                            <div className={styles.mobileMenuItem}><a href={'/media/music'}>Music</a></div>
                        </div>
                    </Accordion.Item>

                    <Accordion.Item styles={label} label="Pedagogy">
                        <div className={styles.mobileMenuContainer}>
                            <div className={styles.mobileMenuItem}><a href={'/methods'}>Methods</a></div>
                            <div className={styles.mobileMenuItem}><a href={'/internet'}>Internet</a></div>
                            <div className={styles.mobileMenuItem}><a href={'/publications'}>Publications</a></div>
                        </div>                    </Accordion.Item>
                </Accordion>
            ) : (
                <Accordion>
                    <Accordion.Item styles={label} label="Biographie">
                        A venir </Accordion.Item>

                    <Accordion.Item styles={label} label="Média">
                        A venir </Accordion.Item>

                    <Accordion.Item styles={label} label="Pédagogie">
                        A venir </Accordion.Item>
                </Accordion>
            )}
            <div className={styles.mobileLang}>{locale.toUpperCase()}<LanguageSwitcher/></div>
        </div>
    )
}