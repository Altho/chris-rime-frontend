import Layout from "../../components/layout";
import {getAlbumData} from "../../libs/fetchAlbums";
import AlbumInfos from "../../components/albums/AlbumInfos";
import {MediaSeparator} from "../../components/albums/MediaSeparator";
import {createStyles} from '@mantine/core';
import Media from '../../components/albums/Media'
import Listen from '../../components/albums/Listen'
import styles from '../../styles/[slug].module.css'
import {Image} from '@mantine/core'
import Reviews from "../../components/reviews";
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import style from "../../styles/[slug].module.css";
import {useRouter} from "next/router";

export async function getServerSideProps({locale, query}, ctx) {

    console.log(query.slug)

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


    const albumData = await getAlbumData(query.slug, locale, loginResponseData.jwt)

    return {
        props: {
            albumData
        }
    }
}

const useStyles = createStyles((theme) => ({
    image: {

        '@media (max-width: 900px)': {
            width: '100vw',
        },
    },
}));


export default function AlbumDetails({albumData}) {
    console.log('ALBUM DATA')
    console.log(albumData)
    const album = albumData['0'].attributes;
    const albumImage = album.image.data.attributes.url


    return (
        <Layout>
            <AlbumTitle name={album.name} image={albumImage} buy={album.buy} digital={album.digital} album={album}/>
            <div className={styles.infoContainer}>
                <div className={styles.description}>
                    <Reviews reviews={album.reviews.data}/>

                </div>
            </div>

            <MediaSeparator/>

            <Media media={album.video.data}/>


        </Layout>
    )

}

function AlbumTitle({name, image, album, buy, digital}) {
    const {classes} = useStyles();

    const locale = useRouter().locale;
    return (
        <div>

            <div className={styles.titleContainer}>
                <div className={styles.albumHeader}>
                    <div>
                        <div className={styles.albumCover}>
                            <Image className={classes.image}
                                   src={`${process.env.DB_HOST}${image}`}
                                // width={400}
                                // height={400}

                            />
                        </div>
                        <Listen spotify={album.spotify ? album.spotify : null} apple={album.apple ? album.apple : null}
                                deezer={album.deezer ? album.deezer : null}/>

                    </div>
                    <div className={styles.albumRightContainer}>
                        <h1 className={styles.albumName}>{name}</h1>

                        <AlbumInfos release={album.date.toString()} label={album.label} artists={album.artistes}/>
                        <p className={styles.albumDescription}>{album.description}</p>
                        <div className={styles.buttonContainer}>
                            <Menu menuButton={<MenuButton
                                className={style.buy}>{locale === 'en' ? ('BUY') : ('ACHETER')}</MenuButton>}>
                                <MenuItem className={styles.menuItem}>Guitar4Fan (CD)</MenuItem>
                                <MenuItem className={styles.menuItem}>BandCamp (Digital)</MenuItem>
                            </Menu>
                        </div>
                    </div>

                </div>


            </div>

        </div>

    )
}