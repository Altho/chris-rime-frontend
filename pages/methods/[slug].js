import Layout from "../../components/layout";
import {getMethodData} from "../../libs/fetchMethods";
import MethodInfos from "../../components/methods/methodInfos";
import {Modal, Button} from '@mantine/core'
import styles from '../../styles/[slug].module.css'
import Reviews from "../../components/reviews";
import DisplayPdf from "../../components/methods/DisplayPdf";
import {useRouter} from "next/router";
import {useState} from "react";
import {Cash} from 'tabler-icons-react';
import {marked} from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import style from "../../styles/[slug].module.css";
import {parseCookies, setCookie} from "nookies";
import parse, {attributesToProps} from 'html-react-parser';
import ReactPlayer from "react-player";


export async function getServerSideProps({query, locale}, ctx) {
    const jwt = parseCookies(ctx).jwt
    if (jwt) {
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


    return (
        <Layout>
            <div className={style.pdfContainer}>
                <MethodTitle name={method.name} image={methodImage} method={method} preview={preview}/>
                <Reviews reviews={method.reviews.data}/>

                <div className={styles.infoContainer}>
                    <div className={styles.description}>
                    </div>
                </div>
            </div>


        </Layout>
    )

}

function MethodTitle({name, image, method, preview}) {
    const options = {
        replace: domNode => {
            if (domNode.attribs && domNode.name === 'oembed') {
                const props = attributesToProps(domNode.attribs);
                return <ReactPlayer {...props} width={'100%'} />;
            }
        }
    };
    const [opened, setOpened] = useState(false);
    const parsed = parse(method.description, options)


    const locale = useRouter().locale;


    return (
        // <div className={styles.titleBackground} style={headerStyle()}>
        <div>
            <Modal
                centered
                withCloseButton={false}
                opened={opened}
                onClose={() => setOpened(false)}
            >
                <div className={styles.modalButtonContainer}>
                    {method.lien_achat_1 && (<a href={method.lien_achat_1} target="_blank" rel={'noreferrer'}>
                            <Button
                                className={styles.buyButton}>{locale === 'en' ? `BUY ON ${method.vendeur_lien_1.toUpperCase()}` : `ACHETER ON ${method.vendeur_lien_1.toUpperCase()}`}
                            </Button></a>
                    )}

                    {method.lien_achat_2 && (<a href={method.lien_achat_2} target="_blank" rel={'noreferrer'}>
                            <Button
                                className={styles.buyButton}>{locale === 'en' ? `BUY ON ${method.vendeur_lien_2.toUpperCase()}` : `ACHETER ON ${method.vendeur_lien_2.toUpperCase()}`}
                            </Button></a>
                    )}

                    {method.lien_achat_3 && (<a href={method.lien_achat_3} target="_blank" rel={'noreferrer'}>
                            <Button
                                className={styles.buyButton}>{locale === 'en' ? `BUY ON ${method.vendeur_lien_3.toUpperCase()}` : `ACHETER ON ${method.vendeur_lien_3.toUpperCase()}`}
                            </Button></a>
                    )}


                </div>


            </Modal>

            <div className={styles.titleContainer}>
                <div className={styles.albumHeader}>
                    <div>
                        <div className={styles.methodCover}>
                            <DisplayPdf url={preview}/>

                        </div>

                    </div>
                    <div className={styles.albumRightContainer}>
                        <h1 className={styles.albumName}>{name}</h1>

                        <MethodInfos release={method.date.toString()} publisher={method.publisher}
                                     pages={method.pages}/>                       <div className={styles.albumDescription}>
                        <div className="ck-editor">
                            {parsed}
                        </div>

                    </div>
                        <div className={styles.buttonContainer}>
                            <Button leftIcon={< Cash/>}
                                    className={styles.buy}
                                    onClick={setOpened}

                            >{locale === 'en' ? ('BUY') : ('ACHETER')}

                            </Button>
                        </div>
                    </div>

                </div>


                {/*</div>*/}


            </div>

        </div>

    )
}