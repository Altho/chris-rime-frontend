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
    console.dir('---movies---')
    console.dir(movies)


    return movies.data
}

export async function getMovieData(slug,locale, jwt) {

    console.dir('---FETCH-MOVIE-ON-SLUG---')
    console.dir(slug)
    console.dir(jwt)
    const query = qs.stringify({
        filters: {
            slug: {
                $eq: slug,
            },
        },

    }, {
        encodeValuesOnly: true,
    });
    console.dir(query)

    const movie = await fetch(`${process.env.DB_HOST}/api/movies?locale=${locale}&populate=*&${query}`,
        { headers: {

                Authorization: `Bearer ${jwt}`
            }})
    const movieData = await movie.json()
    console.dir(movieData)
    console.dir('---FETCH-MOVIE-ON-SLUG---')



    return {

        ...movieData.data
    }
}