async function fetchDataFromURL(url, token) {
    console.log('---URL-AND-TOKEN---')
    console.log(url)
    console.log(token)
    console.log('---URL-AND-TOKEN---')

    const response = await fetch(url, {
        headers: {

            Authorization: `Bearer ${token}`
        }
    });

    console.log('---RESPONSE---')
    console.log(response)
    console.log('---RESPONSE---')


    const payload = await response.json();

    console.log('---PAYLOAD---')
    console.log(payload)
    console.log('---PAYLOAD---')

    return payload.data;
}

export default fetchDataFromURL