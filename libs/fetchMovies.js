import qs from 'qs'

export async function getMovies({locale}, jwt) {
    const query = qs.stringify({
        sort: ['date:desc'],
    }, {
        encodeValuesOnly: true,
    });
    const fetchMovies = await fetch(`${process.env.DB_HOST}/api/movies?locale=${locale}&populate=*&${query}`, {
        headers: {

            Authorization: `Bearer ${jwt}`
        }
    })
    const movies = await fetchMovies.json()



    return movies.data
}

export async function getMovieData(slug,locale, jwt) {


    const query = qs.stringify({
        filters: {
            slug: {
                $eq: slug,
            },
        },

    }, {
        encodeValuesOnly: true,
    });

    const movie = await fetch(`${process.env.DB_HOST}/api/movies?locale=${locale}&populate=*&${query}`,
        { headers: {

                Authorization: `Bearer ${jwt}`
            }})
    const movieData = await movie.json()




    return {

        ...movieData.data
    }
}