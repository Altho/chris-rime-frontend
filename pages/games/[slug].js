import Layout from "../../components/layout";
import {getGamesData} from "../../libs/fetchGames";
import Description from "../../components/albums/Description";
import GameInfos from "../../components/games/gameInfos";
import {MediaSeparator} from "../../components/albums/MediaSeparator";
import ListenSeparator from "../../components/albums/ListenSeparator"
import { createStyles } from '@mantine/core';
import Listen from '../../components/albums/Listen'
import styles from '../../styles/[slug].module.css'
import {Image} from '@mantine/core'
import Reviews from "../../components/reviews";
import DisplayPdf from "../../components/methods/DisplayPdf";
import {useRouter} from "next/router";
import AlbumInfos from "../../components/albums/AlbumInfos";
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import style from "../../styles/[slug].module.css";
import Media from "../../components/albums/Media";
import {parseCookies, setCookie} from "nookies";
import {marked} from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser';

const useStyles = createStyles((theme) => ({
    image: {

        '@media (max-width: 900px)': {
            width: '100vw',
        },
    },
}));


export async function getServerSideProps({query, locale}, ctx) {
    const jwt = parseCookies(ctx).jwt


    if (jwt) {
        const gameData = await getGamesData(params.slug, locale, jwt)

        return {
            props: {
                gameData
            },


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

    const gameData = await getGamesData(query.slug, locale, loginResponseData.jwt)

    return {
        props: {
            gameData
        },

    }


}



export default function gameDetails({gameData}) {


    const game = gameData['0'].attributes;
    const gameImage = game.image.data.attributes.url




    return (
        <Layout>
            <GameTitle name={game.name} image={gameImage} game={game} />

            <div className={styles.infoContainer}>
                <div className={styles.description}>
                </div>
            </div>

            <MediaSeparator/>

            <Media media={game.videos.data}/>


        </Layout>
    )

}

function GameTitle({name, image, game}) {
    const { classes } = useStyles();


    const locale = useRouter().locale;
    const parsed = parse(game.description)

    return (
        // <div className={styles.titleBackground} style={headerStyle()}>
        <div >

            <div className={styles.titleContainer} >
                <div className={styles.albumHeader}>
                    <div>
                        <div className={styles.albumCover}>
                            <Image className={classes.image}
                                   src={`${image}`}
                                // width={400}
                                // height={400}

                            />

                        </div>

                    </div>
                    <div className={styles.albumRightContainer}>
                        <h1 className={styles.albumName} >{name}</h1>

                        <GameInfos release={game.release.toString()} publisher={game.publisher} developper={game.developper} genre={game.genre} platforms={game.plateformes} />
                        <div className={styles.albumDescription}>
                            <div className="ck-editor">
                                {parsed}
                            </div>

                        </div>

                    </div>

                </div>



                {/*</div>*/}


            </div>

        </div>

    )
}