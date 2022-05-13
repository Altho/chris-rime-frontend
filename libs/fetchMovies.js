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