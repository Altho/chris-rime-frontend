import Layout from "../../components/layout";
import {getAlbumData} from "../../libs/fetchAlbums";
import AlbumInfos from "../../components/albums/AlbumInfos";
import {MediaSeparator} from "../../components/albums/MediaSeparator";
import {Cash} from 'tabler-icons-react';
import {createStyles} from '@mantine/core';
import Media from '../../components/albums/Media'
import Listen from '../../components/albums/Listen'
import styles from '../../styles/[slug].module.css'
import Link from 'next/link'
import {Image, Button, Modal} from '@mantine/core'
import Reviews from "../../components/reviews";
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/core.css';
import {useRouter} from "next/router";
import {useState} from "react";

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
    const [opened, setOpened] = useState(false);

    const locale = useRouter().locale;
    return (
        <div>
            <Modal
                centered
                withCloseButton={false}
                opened={opened}
                onClose={() => setOpened(false)}
            >
                    <div className={styles.modalButtonContainer}>
                        <a href={album.buy} target="_blank" rel={'noreferrer'}><Button className={styles.buyButton}>{locale==='en' ? 'BUY ON GUITAR4FANS (PHYSICAL)' : 'ACHETER SUR GUITAR4FANS (PHYSIQUE)'}</Button></a>
                        <a href={album.digital} target="_blank" rel={'noreferrer'}> <Button className={styles.buyButton}>{locale==='en' ? 'BUY ON BANDCAMP (DIGITAL)' : 'ACHETER SUR BANDCAMP (NUMERIQUE)'}</Button></a>

                    </div>


            </Modal>

            <div className={styles.titleContainer}>
                <div className={styles.albumHeader}>
                    <div>
                        <div className={styles.albumCover}>
                            <Image className={classes.image}
                                   src={`${image}`}
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
                            <Button leftIcon={< Cash/>}
                                    className={styles.buy}
                                    onClick={setOpened}

                            >{locale === 'en' ? ('BUY') : ('ACHETER')}

                            </Button>}>

                        </div>
                    </div>

                </div>


            </div>

        </div>

    )
}