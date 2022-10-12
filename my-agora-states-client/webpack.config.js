/** @format */

// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	devtool: 'eval',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.m?js$/i,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
					},
				},
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
		new MiniCssExtractPlugin(),
	],
}
