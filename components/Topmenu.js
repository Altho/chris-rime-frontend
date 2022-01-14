import styles from '../styles/Home.module.css'

export default function TopMenu(){
   return(
       <nav className={styles.menu}>
           <div className={styles.cr}>Chris Rime</div>
           <ul>
               <li>Accueil</li>
               <li>Biographie</li>
               <li>Média</li>
               <li>Boutique</li>
               <li>Presse</li>
               <li></li>
           </ul>

       </nav>
   )
}