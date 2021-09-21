const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'; 

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
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
    devServer: {
        static: path.resolve(__dirname, 'public'), // Mostrando onde está o conteudo estatico da aplicação
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
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ],
    }
};