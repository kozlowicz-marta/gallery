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

function main() {
    console.log('main()');
    //displayPhotos();
    //dispayMessage();

    const photos = [
        'https://picsum.photos/300/150',
        'https://picsum.photos/300/150',
        'https://picsum.photos/300/150',
    ];

    if (photos.length > 0) {
        displayPhotos(photos);
    } else {
        dispayMessage('Nie ma zdjęć w galerii', 'alert-danger')
    }

    setTimeout(function () {
        // dispayMessage('Nie ma zdjęć w galerii', 'alert-danger')
    }, 2 * 1000);
}

// main(); // wywolanie funkcji

window.addEventListener('DOMContentLoaded', main //referencja do funkcji //
);