const path = require('path');

//webpack.config.js
module.exports = {
    entry: './src/index.js',
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
    }
};