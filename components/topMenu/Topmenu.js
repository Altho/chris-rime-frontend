import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'


export default function TopMenu({locale}){
    const router = useRouter();
    const frMenu = [{item: 'Accueil', id:1}, {item: 'Biographie', id:2}, {item : 'Média', id:3}];
    const enMenu = [{item: 'Home', id:1}, {item: 'Bio', id:2}, {item : 'Media', id:3}];
    const chosenMenu = () => {
        console.log(router.locale)
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
               {chosenMenu().map(({item, id}) => (
                   <li key={id}>{item}</li>
               ))}

                   <LanguageSwitcher />


           </ul>

       </nav>
   )
}