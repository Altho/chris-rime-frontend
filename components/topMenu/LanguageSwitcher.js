import {useRouter} from "next/router";
import Image from "next/image";

export default function CountrySwitcher() {
    const router = useRouter();
    const src = router.locale === 'en' ? '/images/flags/en.svg' : '/images/flags/fr.svg';
    return (
        <>
            <Image
                src={src}
                width={40}
                height={30}
                onClick={() => {router.push('/', '/', {locale : router.locale === 'fr' ? 'en' : 'fr'})}}
            />

        </>
    )

}