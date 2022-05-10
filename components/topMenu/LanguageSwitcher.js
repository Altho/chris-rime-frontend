import {useRouter} from "next/router";
import {Switch} from "@mantine/core";
import Image from "@mantine/core";
import style from "../../styles/home.module.css"



export default function CountrySwitcher() {
    const router = useRouter();
    const src = router.locale === 'en' ? '/images/flags/en.svg' : '/images/flags/fr.svg';
    const checkCheck = () => {
        if(router.locale === 'en'){
            return false
        }
        else {
            return true
        }
    }
    return (
        <>
            <Switch
                checked={checkCheck()}
                className={style.flag}
                onClick={() => {router.push({pathname:router.asPath},{pathname:router.asPath},{locale : router.locale === 'fr' ? 'en' : 'fr'})}}
                onLabel='FR' offLabel='EN'
                size="lg"
                color="orange"


            />


        </>
    )
}