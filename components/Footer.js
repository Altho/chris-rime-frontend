import style from '../styles/Home.module.css'
import Link from 'next/link'
import {Image} from '@mantine/core'

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className={style.footer}>
          <div className={style.copyright}>©{year} Chris Rime -
              <Link href={'mailto:cr.guitar@gmail.com'}><a target={'_blank'}> Contact</a></Link>
               | Made by  <Link href={'https://github.com/Altho/'}><a target={'_blank'}> Altho</a></Link>
          </div>
            <Image height={50} style={{marginLeft:'auto'}} src={'/images/framus_logo.png'}/>
        </footer>
    )
}