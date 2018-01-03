﻿const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');

var env = process.env.NODE_ENV || 'development';
var plugins = [
new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body',
    })
];

console.log('NODE_ENV:', env);

if (env === 'production') {
plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}

//webpack.config.js
module.exports = {
    entry: [ 
        'react-hot-loader/patch',
        './src/index.js'
        ],
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'index.bundle.js'
    },
    module: {
    	rules: [
    		{
    			test: /\.js$/,
    			loader: "babel-loader"
    		},
    		{
       			test: /\.css$/,
        		use: [
            		{ loader: 'style-loader'},
            		{
                		loader: 'css-loader',
                		options: {
                    		modules: true
                		}
            		}
        		]
    		}
    	]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeJsPlugin ({
            sourceMap: true
        })
	]
};

