import styles from '../../styles/Topmenu.module.css'
import {useRouter} from 'next/router'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import {useEffect, useState} from "react";
import {Drawer, Button, Group, Burger, Image} from '@mantine/core';
import {useMediaQuery} from '@mantine/hooks';
import MobileMenu from './MobileMenu'
import {useRef} from "react";
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
        <nav className={styles.menu}>
            <Link href={'/'}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>Chris Rime<Image
                        src={'/images/bg/crhat.svg'}
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
                    <div className={styles.dropbtn}>About</div>

                    <div className={styles.dropdownContent}>
                        <Link className={styles.subMenuItem} href="/biography">Biography</Link>
                        <Link className={styles.subMenuItem} href="/press">Press</Link>
                        <Link className={styles.subMenuItem} href="/albums">Discography</Link>
                        <Link className={styles.subMenuItem} href="/movies">TV/Cinema</Link>
                        <Link className={styles.subMenuItem} href="/games">Video games</Link>


                    </div>
                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>M??dia</div>

                    <div className={styles.dropdownContent}>
                        <Link className={styles.subMenuItem} href="/media/videos">Videos</Link>
                        <Link className={styles.subMenuItem} href="/media/gallery">Photos</Link>
                    </div>

                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>P??dagogie</div>

                    <div className={styles.dropdownContent}>
                        <Link className={styles.subMenuItem} href="/methods">Methods</Link>
                        <Link className={styles.subMenuItem} href="/online-teaching">Internet</Link>
                        <Link className={styles.subMenuItem} href="/publications">Publications</Link>
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
                    <div className={styles.dropbtn}>A propos</div>

                    <div className={styles.dropdownContent}>
                        <Link className={styles.subMenuItem} href="/biography">Biographie</Link>
                        <Link className={styles.subMenuItem} href="/press">Presse</Link>
                        <Link className={styles.subMenuItem} href="/albums">Discographie</Link>
                        <Link className={styles.subMenuItem} href="/movies">T??l??/Films</Link>
                        <Link className={styles.subMenuItem} href="/games">Jeux vid??os</Link>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>M??dia</div>

                    <div className={styles.dropdownContent}>
                        <Link className={styles.subMenuItem} href="/media/videos">Vid??os</Link>
                        <Link className={styles.subMenuItem} href="/media/gallery">Photos</Link>
                    </div>

                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>P??dagogie</div>

                    <div className={styles.dropdownContent}>
                        <Link className={styles.subMenuItem} href="/methods">M??thodes</Link>
                        <Link className={styles.subMenuItem} href="/online-teaching">Internet</Link>
                        <Link className={styles.subMenuItem} href="/publications">Journaux</Link>
                    </div>


                </div>

                <LanguageSwitcher/>


            </div>
        )
    }
    return router.locale === 'en' ? enMenu() : frMenu();
}