const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './assets/js/index.js',
	//watch: true,

	plugins: [
		new HtmlWebpackPlugin({
			template: './assets/index.html',
			filename: './index.html'
		}),
	],

	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};