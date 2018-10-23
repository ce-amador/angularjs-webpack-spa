var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var uglifyJSPlugin = require('uglifyjs-webpack-plugin')
var cleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
  'dist'
]

let cleanOptions = {
  //root:     path.resolve(__dirname, 'node_modules/webpack/'),
  exclude:  ['shared.js'],
  verbose:  true,
  dry:      false
}

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            },
            {
                test: /\.html?$/,
                loader: 'html-loader'
            },
            {
                test: /\.css?$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: '../index.html',
            template: './src/app.html',
            inject: true
        }),
        new uglifyJSPlugin({
            minimize: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new cleanWebpackPlugin(pathsToClean, cleanOptions)
    ]
};
