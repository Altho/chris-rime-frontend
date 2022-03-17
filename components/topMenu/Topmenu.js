import styles from '../../styles/Topmenu.module.css'
import {useRouter} from 'next/router'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import {useEffect, useState} from "react";
import {Drawer, Button, Group, Burger, Image} from '@mantine/core';
import {useMediaQuery} from '@mantine/hooks';
import MobileMenu from './MobileMenu'
import ListenSeparator from "../albums/ListenSeparator";

const drawerStyles = {

    drawer: {
        backgroundColor: 'fff',

    },
    header: {
        backgroundColor: 'black',
        margin: '0px'
    },
    closeButton: {
        color: 'white',
        width:'40px',
        height:'40px'
    },
    body:{
        color:'black'
    }


}


export default function TopMenu() {
    const [opened, setOpened] = useState(false);


    // const currentStyle = () => {
    //     if (scrolled === true) {
    //         return styles.scrolled
    //     } else {
    //         return ''
    //     }
    // }

    //
    // function handleScroll(e) {
    //     if (window.scrollY > 100) {
    //         setScrolled(true)
    //     } else {
    //         setScrolled(false)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', (e) => handleScroll(e));
    //
    // })
    const matches = useMediaQuery('(min-width: 900px)');


    return (
        <nav className={`${styles.menu}`}>
            <Link href={'/'}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>Chris Rime<Image
                        src={'/images/bg/waveform.svg'}
                        width={100}

                    /></div>
                </div>

            </Link>


            <Drawer
                opened={opened}
                styles={drawerStyles}
                onClose={() => setOpened(false)}

                padding='null'
                size="xl"
            >
                <MobileMenu/>
            </Drawer>


            <div className={styles.menuContainer}>
                {!matches ? (
                    <Image src={'/images/icons/musicburger.svg'} style={{cursor: 'pointer'}} width={30}
                           onClick={() => setOpened((o) => !o)}
                    />
                ) : (
                    <div className={styles.menuItems}>
                        <MenuItems/>
                    </div>


                )}


            </div>

        </nav>
    )
}

export function MenuItems() {
    const router = useRouter();


    const enMenu = () => {

        return (
            <div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>Bio <span>▼</span></div>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>Media <span>▼</span></div>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>

                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>Pedagogy <span>▼</span></div>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>

                </div>
                <LanguageSwitcher/>

            </div>
        )
    }


    const frMenu = () => {
        return (
            <div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>Bio <span>▼</span></div>

                    <div className={styles.dropdownContent}>
                        <Link href="/biography">Biographie</Link>
                        <Link href="/albums">Discographie</Link>
                        <Link href="#">Télé/Films</Link>
                        <Link href="#">Jeux vidéos</Link>


                    </div>
                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>Média <span>▼</span></div>

                    <div className={styles.dropdownContent}>
                        <Link href="/media/videos">Vidéos</Link>
                        <Link href="/media/gallery">Photos</Link>
                        <Link href="#">Musique</Link>
                    </div>

                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>Pédagogie <span>▼</span></div>

                    <div className={styles.dropdownContent}>
                        <Link href="#">Méthodes</Link>
                        <Link href="#">Internet</Link>
                        <Link href="#">Journaux</Link>
                    </div>


                </div>

                <LanguageSwitcher/>


            </div>
        )
    }
    console.log(enMenu())
    console.log(frMenu())
    return router.locale === 'en' ? enMenu() : frMenu();
}