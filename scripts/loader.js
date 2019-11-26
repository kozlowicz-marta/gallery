const loader = {
    show() {
        const $svg = document.createElement('img');
        $svg.src = 'images/loader.svg';
        $svg.id = 'loader';
        const $main = document.querySelector('main');
        $main.appendChild($svg);
    },
    hide() {
        const $loader = document.querySelector('#loader');
        $loader.remove();
    }
};