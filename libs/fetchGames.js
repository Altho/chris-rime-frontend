import qs from 'qs'

export async function getGames({locale}, jwt) {
    const query = qs.stringify({
        sort: ['release:desc'],
    }, {
        encodeValuesOnly: true,
    });
    const fetchGames = await fetch(`${process.env.DB_HOST}/api/games?locale=${locale}&populate=*&${query}`, {
        headers: {

            Authorization: `Bearer ${jwt}`
        }
    })
    const games = await fetchGames.json()



    return games.data
}

export async function getGamesData(slug,locale, jwt) {
    const query = qs.stringify({
        filters: {
            slug: {
                $eq: slug,
            },
        },

    }, {
        encodeValuesOnly: true,
    });

    const games = await fetch(`${process.env.DB_HOST}/api/games/?locale=all&${query}&locale=${locale}&populate=*`, {
        headers: {

            Authorization: `Bearer ${jwt}`
        }
    })
    const gamesData = await games.json()
    console.log(games)


    return {

        ...gamesData.data
    }
}