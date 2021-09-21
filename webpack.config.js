const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // Arquivo padrão/entrada
    output: { // Identificando que arquivo vai ser retornado
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: { // Que arquivos ele vai transformar
        extensions: [
            '.js', '.jsx'
        ]
    },
    module: { // Como a aplicação vai se comportar com os arquivos
        rules: [
            {
                test: /\.js?x$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ],
    }
};