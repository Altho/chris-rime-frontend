import styles from '../../styles/Topmenu.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import {Accordion} from "@mantine/core";

export default function MobileMenu(){
    const locale = useRouter().locale;
    return(
        <div>

            {locale === 'en' ? (
                <Accordion>
                    <Accordion.Item label="Biography">
                        Colors, fonts, shadows and many other parts are customizable to fit your design needs
                    </Accordion.Item>

                    <Accordion.Item label="Media">
                        Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
                    </Accordion.Item>

                    <Accordion.Item label="Pedagogy">
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                    </Accordion.Item>
                </Accordion>
            ):(
                <Accordion>
                    <Accordion.Item label="Biographie">
                        Colors, fonts, shadows and many other parts are customizable to fit your design needs
                    </Accordion.Item>

                    <Accordion.Item label="Média">
                        Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
                    </Accordion.Item>

                    <Accordion.Item label="Pédagogie">
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                    </Accordion.Item>
                </Accordion>
            )}
            <div className={styles.mobileLang}>{locale.toUpperCase()}<LanguageSwitcher /></div>
        </div>
    )
}