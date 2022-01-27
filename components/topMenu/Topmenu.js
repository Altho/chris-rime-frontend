// import styles from '../../styles/Topmenu.module.css'
// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import LanguageSwitcher from './LanguageSwitcher'
// import {useEffect, useState} from "react";
//
//
//
// export default function TopMenu(){
//     const router = useRouter();
//     const [scrolled, setScrolled] = useState(false);
//     const frMenu = [{item: 'Accueil', id:1,link:'/'}, {item: 'Biographie', id:2,link:'/'}, {item : 'Média', id:3,link:'/'},{item : 'Pédagogie', id:4,link:'/'}];
//     const enMenu = [{item: 'Home', id:5,link:'/'}, {item: 'Bio', id:6,link:'/'}, {item : 'Media', id:7,link:'/'},{item : 'Pedagogy', id:8,link:'/'}];
//     const chosenMenu = () => {
//         if (router.locale === 'fr'){
//             return frMenu;
//         }
//         else {
//             return enMenu
//         }
//     }
//
//     const currentStyle = () => {
//         if(scrolled===true){
//             return styles.scrolled
//         }
//         else{
//             return ''
//         }
//     }
//
//
//
//     function handleScroll(e){
//         if(window.scrollY > 100){
//             setScrolled(true)
//         }
//         else{
//             setScrolled(false)
//         }
//     }
//
//     useEffect(() => {
//         window.addEventListener('scroll',(e)=> handleScroll(e));
//
//     })
//
//
//    return(
//        <nav className={`${styles.menu} ${currentStyle()}`}>
//            <div className={styles.logo}>Chris Rime</div>
//            <ul>
//                {chosenMenu().map(({item, id,link}) => (
//                    <Link key={id} href={link}>
//                    <li>{item}</li>
//                    </Link>
//                ))}
//
//
//
//
//
//            </ul>
//
//        </nav>
//    )
// }

