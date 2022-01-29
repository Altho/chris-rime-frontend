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


    const currentStyle = () => {
        if (scrolled === true) {
            return styles.scrolled
        } else {
            return ''
        }
    }


    function handleScroll(e) {
        if (window.scrollY > 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', (e) => handleScroll(e));

    })
    const matches = useMediaQuery('(min-width: 900px)');
    function MenuBehavior() {
        if (matches) {
            return (
                <div className={styles.logo}>Chris Rime</div>
            )
        } else {
            if(scrolled){
                return (
                    <div className={styles.logo}>Chris Rime</div>
                )
            }
            else{
                return (
                    ''
                )
            }

        }
    }


    return (
        <nav className={`${styles.menu} ${currentStyle()}`}>
            <MenuBehavior/>

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
                        <LanguageSwitcher/>
                    </div>


                )}


            </div>

        </nav>
    )
}

function MenuItems({item, id, link}) {
    const router = useRouter();

    const frMenu = [{item: 'Accueil', id: 1, link: '/'}, {item: 'Biographie', id: 2, link: '/'}, {
        item: 'Média',
        id: 3,
        link: '/'
    }, {item: 'Pédagogie', id: 4, link: '/'}];
    const enMenu = [{item: 'Home', id: 5, link: '/'}, {item: 'Bio', id: 6, link: '/'}, {
        item: 'Media',
        id: 7,
        link: '/'
    }, {item: 'Pedagogy', id: 8, link: '/'}];
    const chosenMenu = () => {
        if (router.locale === 'fr') {
            return frMenu;
        } else {
            return enMenu
        }
    }
    return (
        chosenMenu().map(({item, id, link}) => (
            <Link key={id} href={link}>
                <div className={styles.item}>{item}</div>
            </Link>

        )))
}