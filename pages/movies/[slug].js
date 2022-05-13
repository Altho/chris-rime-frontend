import Layout from "../../components/layout";
import {getMovieData} from "../../libs/fetchMovies";
import MovieInfos from "../../components/movies/movieInfos";
import styles from '../../styles/[slug].module.css'
import Reviews from "../../components/reviews";
import DisplayPdf from "../../components/methods/DisplayPdf";
import { createStyles } from '@mantine/core';

import {useRouter} from "next/router";
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import style from "../../styles/[slug].module.css";
import {parseCookies, setCookie} from "nookies";
import {Image} from "@mantine/core";
import Media from "../../components/albums/Media";
import {MediaSeparator} from "../../components/albums/MediaSeparator";

const useStyles = createStyles((theme) => ({
    image: {

        '@media (max-width: 900px)': {
            width: '100vw',
        },
    },
}));


export async function getServerSideProps({query, locale}, ctx) {
    const jwt = parseCookies(ctx).jwt
    console.dir('---QUERY---')
    console.dir(query.slug)
    if(jwt){
        const movieData = await getMovieData(query.slug, locale,jwt)

        return {
            props: {
                movieData
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


    const movieData = await getMovieData(query.slug, locale, loginResponseData.jwt)
    return {
        props: {
            movieData
        }


    }


}



export default function movieDetails({movieData}) {


    const movie = movieData['0'].attributes;
    const movieImage = movie.image.data.attributes.url




    return (
        <Layout>
            <MovieTitle name={movie.name} image={movieImage} movie={movie}/>

            <div className={styles.infoContainer}>
                <div className={styles.description}>
                </div>
            </div>
            <MediaSeparator/>

            <Media media={movie.video}/>




        </Layout>
    )

}

function MovieTitle({name, image, movie}) {
    const { classes } = useStyles();

    const locale = useRouter().locale;
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

                        <MovieInfos
                            date={movie.date.toString()}
                            realisation={movie.realisation}
                            acteurs={movie.acteurs}
                            duree={movie.duree}
                        />                        <p className={styles.albumDescription}>{movie.description}</p>

                    </div>

                </div>



                {/*</div>*/}


            </div>

        </div>

    )
}