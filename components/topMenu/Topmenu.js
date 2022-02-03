import styles from '../../styles/Topmenu.module.css'
import {useRouter} from 'next/router'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import {useEffect, useState} from "react";
import {Drawer, Button, Group, Burger} from '@mantine/core';
import {useMediaQuery} from '@mantine/hooks';
import MobileMenu from './MobileMenu'


export default function TopMenu() {
    const [scrolled, setScrolled] = useState(false);
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
            <div className={styles.logo}>Chris Rime</div>
            </Link>




            <Drawer
                opened={opened}

                onClose={() => setOpened(false)}
                title="Chris Rime"
                padding="xl"
                size="xl"
            >
                <MobileMenu/>
            </Drawer>


            <div className={styles.menuContainer}>
                {!matches ? (
                    <Burger
                        opened={opened}
                        size="lg"
                        onClick={() => setOpened((o) => !o)}
                        color='white'
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
                        <Link href="#">Biographie</Link>
                        <Link href="/albums">Discographie</Link>
                        <Link href="#">Télé/Films</Link>
                        <Link href="#">Jeux vidéos</Link>


                    </div>
                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>Média <span>▼</span></div>

                    <div className={styles.dropdownContent}>
                        <Link href="#">Vidéos</Link>
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