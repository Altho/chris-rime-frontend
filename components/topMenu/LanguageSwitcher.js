import {useRouter} from "next/router";
import Image from "next/image";
import style from "../../styles/Home.module.css"

export default function CountrySwitcher() {
    const router = useRouter();
    const src = router.locale === 'en' ? '/images/flags/en.svg' : '/images/flags/fr.svg';
    return (
        <>
            <Image className={style.flag}
                src={src}
                width={30}
                height={30}
                onClick={() => {router.push(router.pathname, router.pathname, {locale : router.locale === 'fr' ? 'en' : 'fr'})}}
            />

        </>
    )

}