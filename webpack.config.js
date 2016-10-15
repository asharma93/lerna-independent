var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        sampleProject1: './packages/sample-project-1/src/index',
        sampleProject2: './packages/sample-project-2/src/index',
        sampleProject3: './packages/sample-project-3/src/index'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};