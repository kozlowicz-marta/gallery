// console.log('plik załadowanyl')

const title = 'Galeria zdjęć'
console.log(title);

function renderPhoto(url) {
    console.log('renderPhoto', url);

    const $photo = document.createElement('img');
    $photo.src = url;

    const $main = document.querySelector('main');
    $main.appendChild($photo); //main.append(photo)
}

function displayPhotos() {
    console.log('displayPhotos()');

    const photos = [
        'https://picsum.photos/300/150',
        'https://picsum.photos/300/150',
        'https://picsum.photos/300/150',
    ];

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

function main() {
    console.log('main()');
    displayPhotos();
}

// main(); // wywolanie funkcji

window.addEventListener('DOMContentLoaded', main //referencja do funkcji //
);