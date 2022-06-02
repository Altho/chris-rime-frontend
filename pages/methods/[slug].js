import Layout from "../../components/layout";
import {getMethodData} from "../../libs/fetchMethods";
import MethodInfos from "../../components/methods/methodInfos";
import styles from '../../styles/[slug].module.css'
import Reviews from "../../components/reviews";
import DisplayPdf from "../../components/methods/DisplayPdf";
import {useRouter} from "next/router";
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import style from "../../styles/[slug].module.css";
import {parseCookies, setCookie} from "nookies";




export async function getServerSideProps({query, locale}, ctx) {
    const jwt = parseCookies(ctx).jwt
   if(jwt){
       const methodData = await getMethodData(query.slug, locale)

       return {
           props: {
               methodData
           }


       }

   }

    const loginData = {

        identifier: process.env.DB_EMAIL,

        password: process.env.DB_PASSWORD,

    };

    const login = await fetch(`${process.env.DB_HOST}/api/auth/local`, {

        method: 'POST',

        headers: {

            Accept: 'application/json',

            'Content-Type': 'application/json',

        },

        body: JSON.stringify(loginData),

    });

    const loginResponseData = await login.json();

    setCookie(ctx, 'jwt', loginResponseData.jwt, {

        maxAge: 30 * 24 * 60 * 60,

        path: '/',

    })


    const methodData = await getMethodData(query.slug, locale, loginResponseData.jwt)

    return {
        props: {
            methodData
        }


    }


}



export default function methodDetails({methodData}) {


    const method = methodData['0'].attributes;
    const methodImage = method.cover.data['0'].attributes.url
    const preview = method.preview.data.attributes.url
    console.log(method.reviews)




    return (
        <Layout>
            <MethodTitle name={method.name} image={methodImage} method={method} preview={preview}/>
            <Reviews reviews={method.reviews.data}  />

            <div className={styles.infoContainer}>
                <div className={styles.description}>
                </div>
            </div>





        </Layout>
    )

}

function MethodTitle({name, image, method, preview}) {

    const locale = useRouter().locale;
    console.log('---pdf---')
    console.log(preview)
    console.log('---pdf---')

    return (
        // <div className={styles.titleBackground} style={headerStyle()}>
        <div >

            <div className={styles.titleContainer} >
                <div className={styles.albumHeader}>
                    <div>
                        <div className={styles.albumCover}>
                            <DisplayPdf url={preview} />

                        </div>

                    </div>
                    <div className={styles.albumRightContainer}>
                        <h1 className={styles.albumName} >{name}</h1>

                        <MethodInfos release={method.date.toString()} publisher={method.publisher} pages={method.pages} />                        <p className={styles.albumDescription}>{method.description}</p>
                        <div className={styles.buttonContainer}>
                            <Menu menuButton={<MenuButton className={style.buy}>{locale === 'en' ? ('BUY') : ('ACHETER')}</MenuButton>}>
                                <MenuItem className={styles.menuItem}>Guitar4Fan (CD)</MenuItem>
                                <MenuItem className={styles.menuItem}>BandCamp (Digital)</MenuItem>
                            </Menu>
                        </div>
                    </div>

                </div>



                {/*</div>*/}


            </div>

        </div>

    )
}