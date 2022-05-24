async function fetchDataFromURL(url, token) {


    const response = await fetch(url, {
        headers: {

            Authorization: `Bearer ${token}`
        }
    });




    const payload = await response.json();


    return payload.data;
}

export default fetchDataFromURL