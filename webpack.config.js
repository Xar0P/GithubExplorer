const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
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