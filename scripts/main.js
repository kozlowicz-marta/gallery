const loader = require('./loader');
const makeRequest = require('./request');
//const storage = require('./storage');
const cookies = require('./cookies');

const photoUrls = 'data/photos.json';

function renderPhoto(url) {
    const $img = document.createElement('img');
    $img.src = url;
    const $main = document.querySelector('main');
    $main.appendChild($img);
}

function displayMessage(text) {
    const $message = document.createElement('p');
    $message.textContent = text;
    const $main = document.querySelector('main');
    $main.appendChild($message);
}


async function main() {

    let photos = cookies.read('fotki');

    if (!photos) {
        loader.show()

        const photos1 = await makeRequest(photoUrls);
        const photos2 = await makeRequest(photoUrls);
        const photos3 = await makeRequest(photoUrls);

        photos = [].concat(photos1, photos2, photos3);
        console.log(photos);

        cookies.save('fotki', photos);

        loader.hide();
    }
    // for (let photo of photos) {
    //     renderPhoto(photo.avatarUrl);
    // } nizej to samo jest 

    photos.forEach(function (photo) {
        renderPhoto(photo.imageUrl);
    })

    displayMessage('My little pony');
}

main();