function makeRequest(url) {
    return fetch(url)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
}