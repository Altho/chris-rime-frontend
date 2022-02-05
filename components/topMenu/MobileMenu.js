import styles from '../../styles/Topmenu.module.css'
import {useRouter} from 'next/router'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import {Accordion} from "@mantine/core";
import ListenSeparator from "../albums/ListenSeparator";
const label = {

    label: {
        fontFamily: 'Orbitron, sans serif',
        fontSize: '2em',
        color:'white'
    },
    content: {
        color:'white'
    },


}

export default function MobileMenu() {
    const locale = useRouter().locale;
    return (
        <div>
        <ListenSeparator />
            {locale === 'en' ? (
                <Accordion >
                    <Accordion.Item  classNames={{

                        itemTitle: styles.label

                    }} styles={label} label="Biography">
                        Colors, fonts, shadows and many other parts are customizable to fit your design needs
                    </Accordion.Item>

                    <Accordion.Item styles={label} label="Media">
                        Configure components appearance and behavior with vast amount of settings or overwrite any part
                        of component styles
                    </Accordion.Item>

                    <Accordion.Item styles={label} label="Pedagogy">
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                    </Accordion.Item>
                </Accordion>
            ) : (
                <Accordion>
                    <Accordion.Item styles={label} label="Biographie">
                        A venir </Accordion.Item>

                    <Accordion.Item styles={label} label="Média">
                        A venir </Accordion.Item>

                    <Accordion.Item styles={label} label="Pédagogie">
                        A venir </Accordion.Item>
                </Accordion>
            )}
            <div className={styles.mobileLang}>{locale.toUpperCase()}<LanguageSwitcher/></div>
        </div>
    )
}