const path = require('path');

const webpack = require('webpack');

module.exports = {
    mode: 'development',
    target: 'node',

    entry: {
        renderApp: './initializers/server/renderApp.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'serverApp'),
        libraryTarget: 'commonjs'
    },

    resolve: {
        alias: {
            '~': process.cwd()
        }
    },

    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                loader: 'ignore-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'ignore-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            __SERVER__: true,
            __CLIENT__: false,
            'global.GENTLY': false
        })
    ]
}