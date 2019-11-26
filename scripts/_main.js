const title = 'Galeria zdjęć'
console.log(title);

function renderPhoto(url) {
    console.log('renderPhoto', url);

    const $photo = document.createElement('img');
    $photo.src = url;

    const $main = document.querySelector('main');
    $main.appendChild($photo); //main.append(photo)
}

function displayPhotos(photos) {
    console.log('displayPhotos()');

    // console.log(photos);   //zmienilismy to na: renderPhoto(photos[i]);
    // renderPhoto(photos[0]);
    // renderPhoto(photos[1]);
    // renderPhoto(photos[2]);

    // for (let i = 0; i < photos.length; i++) {
    //     console.log(i);
    //     renderPhoto(photos[i]);
    // }

    // photos.forEach(function (photo) {
    //     renderPhoto(photo);
    // }) nizej skrocony zapis forEach (3 angumenty:Element, INDEX, KOLEKCJA)

    photos.forEach(renderPhoto);

}

function dispayMessage(text, cssClass) {

    const $text = document.createElement('p');
    // $text.innerHTML = ''; //wspiera html 
    // $text.innerText = ''; //parsuje html zeby go zigrorowac
    $text.textContent = text; // najszybsze rozwiazanie
    $text.classList.add('alert', cssClass);

    const $main = document.querySelector('main');
    $main.appendChild($text);
}

// function fetchPhotosByXHR(url) {
//     const xhr = new XMLHttpRequest(); //1
//     xhr.open('Get', url); //2
//     console.log(xhr.status);
//     xhr.addEventListener('load', function () { //3
//         const text = xhr.response;
//         const photos = JSON.parse(text);
//         console.log(typeof text);
//         console.log(typeof photos);
//     });

//     xhr.addEventListener('error', function () {
//         console.log('Blad serwera');
//     });

//     xhr.send(); //4
// }

function fetchPhotos(url) {
    console.log('fetchPhotos()');
    const options = {
        headers: new Headers({
            "x-ciasteczko": "sernik"
        })
    };
    return fetch(url, /*options*/ )
        .then(function (response) { //Promise A 
            console.log('Udało się');
            //console.log(result);
            return response.json(); //Promise B, zawsze musimi dać return
        })
}

function parsePhotoUrls(result) {
    const urls = [];
    result.forEach(function (photo) {
        urls.push(photo.imageUrl);
    });
    return urls;
}

async function main() {
    console.log('main()');
    //displayPhotos();
    //dispayMessage();

    // const photos = [
    //     // 'https://picsum.photos/300/150',
    //     // 'https://picsum.photos/300/150',
    //     // 'https://picsum.photos/300/150',
    // ];

    const photosUrl = 'https://fakes.herokuapp.com/photos';

    const photos = await makeRequest(photosUrl);
    const urls = parsePhotoUrls(photos);
    if (urls.length > 0) {
        displayPhotos(urls);
    } else {
        dispayMessage('Nie ma zdjęć w galerii', 'alert-danger');
    }

    // fetchPhotos(photosUrl)
    //     .then(function (result) { //Promise B
    //         console.log('To jest odpowiedz', result); //Json
    //         const urls = [];

    //         result.forEach(function (photo) {
    //             urls.push(photo.imageUrl);
    //         });

    //     })
    //     .catch(function (reason) {
    //         console.log(reason);
    //         dispayMessage('Problem z połączeniem', 'alert-error');
    //     })

    // fetchPhotosByXHR(photosUrl);

    setTimeout(function () {
        // dispayMessage('Nie ma zdjęć w galerii', 'alert-danger')
    }, 2 * 1000);
}

// main(); // wywolanie funkcji

window.addEventListener('DOMContentLoaded', main //referencja do funkcji //
);