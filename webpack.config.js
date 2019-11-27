module.exports = {
    mode: "development",

    entry: __dirname + '/scripts/main.js',

    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    }

};