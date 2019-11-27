const storage = {
    save(key, value) {
        localStorage.setItem(
            key,
            JSON.stringify(value), //parsujemy do stringa
        );
    },

    format() {
        localStorage.clear();

    },
    read(key) {
        const text = localStorage.getItem(key);
        return JSON.parse(text); //odwracamy proces parsowania
    }
};

module.exports = storage;