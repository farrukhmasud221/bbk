const path = require('path');
const webpack = require('webpack');
//const packageJson = require('./package.json');
//const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        "guiapp": "./app/guiapp.js",

        "vendor": [
            'jquery',
            'bootstrap',
            'angular',
            '@uirouter/core',
            '@uirouter/angularjs',
            'angular-ui-grid',
            'angular-ui-bootstrap',
            //'style-loader',
            //'css-loader',
            //"angular-animate",
            "angularjs-toaster",
            "ui-select"
            // "flatpickr"
        ]
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        new UglifyJsPlugin()
    ],
    output: {
        path: path.join(__dirname, "bundles"),
        publicPath: 'bundles/',
        filename: "[name].js"
    },

    resolve: {
        extensions: ['.js', '.css']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: [/@uirouter/]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: { loader: 'babel-loader', options: { presets: ['babel-preset-es2015'] } },
            },
            // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    }
};
