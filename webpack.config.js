const path = require('path');

const ManifestPlugin = require('webpack-manifest-plugin');

const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',

    entry: {
        bundle: './index.js'
    },

    devServer: {
        historyApiFallback: true
    },

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'public/assets'),
        publicPath: '/assets/'
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
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  "css-loader"
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },

    plugins: [
        new ManifestPlugin(),
        new webpack.DefinePlugin({
            __SERVER__: false,
            __CLIENT__: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}