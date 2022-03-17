import Layout from "../../components/layout";
import {getMethodData} from "../../libs/fetchMethods";
import Description from "../../components/albums/Description";
import MethodInfos from "../../components/methods/methodInfos";
import {MediaSeparator} from "../../components/albums/MediaSeparator";
import ListenSeparator from "../../components/albums/ListenSeparator"
import Media from '../../components/albums/Media'
import Listen from '../../components/albums/Listen'
import styles from '../../styles/[slug].module.css'
import {Image} from '@mantine/core'
import Reviews from "../../components/reviews";
import Share from "../../components/social/share"
import DisplayPdf from "../../components/methods/DisplayPdf";


export async function getStaticProps({params, locale}) {
    const methodData = await getMethodData(params.slug, locale)


    return {
        props: {
            methodData
        },
        revalidate: 10,


    }
}

export async function getStaticPaths({locales}) {
    console.log('RUN STATIC PATHS')
    const fetchMethods = await fetch(`${process.env.DB_HOST}/api/methods?populate=*&locale=all`)
    const methodsData = await fetchMethods.json();
    const methods = methodsData.data
    console.log('-----FETCH METHODS DATA---------')
    console.log(methods)

    const paths = methods.map((method) => locales.map((locale) => ({

        params: {slug: method.attributes.slug},
        locale
    })))
        .flat()

    return {paths, fallback: false}
}

export default function methodDetails({methodData}) {


    const method = methodData['0'].attributes;
    console.log('----methodimage-----')
    console.log(method)
    const methodImage = method.cover.data['0'].attributes.url
    const preview = method.preview.data.attributes.url
    console.log('----------preview-----------')
    console.log(preview)
    console.log('REVIEWREVIEWREVIEW')
    console.log(method.reviews)




    return (
        <Layout>
            <AlbumTitle name={method.name} image={methodImage}/>

            <div className={styles.infoContainer}>
                <div className={styles.description}>
                    <Description description={method.description} auteur={"test"} buy={method.buy} digital={null} />
                </div>
                <MethodInfos release={method.date.toString()} publisher={method.publisher} pages={method.pages} />
            </div>

            <MediaSeparator/>
            <div className={styles.methodinfos}>
                <DisplayPdf url={preview} />
                <div className={styles.rightcolumn}>

                    <Reviews reviews={method.reviews.data}  />
                </div>

            </div>


            <ListenSeparator/>
            <Share />


        </Layout>
    )

}

function AlbumTitle({name, image}) {
    const headerStyle = () => ({
            backgroundImage: `url(${process.env.DB_HOST}${image})`,
            backgroundAttachment: 'fixed'

        })
    ;
    console.log('albumTitle')
    console.log(name)
    return (
        <div className={styles.titleBackground} style={headerStyle()}>
            <div >

                <div className={styles.titleContainer} >
                    <h1 className={styles.albumName} >{name}</h1>


                </div>
                <Image className={styles.tear} width={'100%'} src={'/images/bg/paper.svg'}/>


            </div>

        </div>

    )
}