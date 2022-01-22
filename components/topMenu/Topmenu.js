import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'


export default function TopMenu(){
    const router = useRouter();
    const frMenu = [{item: 'Accueil', id:1,link:'/'}, {item: 'Biographie', id:2,link:'/'}, {item : 'Média', id:3,link:'/'},{item : 'Pédagogie', id:4,link:'/'}];
    const enMenu = [{item: 'Home', id:1,link:'/'}, {item: 'Bio', id:2,link:'/'}, {item : 'Media', id:3,link:'/'},{item : 'Pedagogy', id:3,link:'/'}];
    const chosenMenu = () => {
        if (router.locale === 'fr'){
            return frMenu;
        }
        else {
            return enMenu
        }
    }
   return(
       <nav className={styles.menu}>
           <div className={styles.cr}>Chris Rime</div>
           <ul>
               {chosenMenu().map(({item, id,link}) => (
                   <Link href={link}>
                   <li key={id}>{item}</li>
                   </Link>
               ))}

                   <LanguageSwitcher />



           </ul>

       </nav>
   )
}