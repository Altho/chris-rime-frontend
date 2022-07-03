import style from '../styles/home.module.css'
import Link from 'next/link'
import {Image} from '@mantine/core'

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className={style.footer}>
            <div className={style.social}>
                <a href={'https://www.instagram.com/chrisrime.music'} target="_blank" rel={'noreferrer'} ><Image alt={'Instagram'} src={'/images/socials/instagram-brands.svg'} width={25} className={style.socialIcon}/></a>
                <a href={'https://www.facebook.com/chris.rime'} target="_blank" rel={'noreferrer'}><Image alt={'Facebook'} src={'/images/socials/facebook-brands.svg'} width={25} className={style.socialIcon}/></a>
                <a href={'https://chrisrime.bandcamp.com/'} target="_blank" rel={'noreferrer'}><Image alt={'Bancamp'} src={'/images/socials/bandcamp-brands.svg'} width={25} className={style.socialIcon}/></a>
                <a href={'https://www.youtube.com/channel/UC4QQX_UztuxVSQybBsyv8Hg'} target="_blank" rel={'noreferrer'}><Image alt={'Youtube'} src={'/images/socials/youtube.svg'} width={25} className={style.socialIcon}/></a>
            </div>
          <div className={style.copyright}>
             <div className={style.footerItem}>©{year} Chris Rime - <Link href={'/contact'}>Contact </Link> </div>
               <div className={style.footerItem}>Made by  <a href={'https://github.com/Altho/'} target={'_blank'} rel={'noreferrer'}> Altho </a></div>
          </div>

        </footer>
    )
}