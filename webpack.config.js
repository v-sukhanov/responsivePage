const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js'
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin(),
		new miniCssExtractPlugin({
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].[contenthash].css'
		})
	],
	devServer: {
		port: 4444
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader']
			 },
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img/',
							publicPath: 'img/',
							esModule: false
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					miniCssExtractPlugin.loader,
					'css-loader',
				]
			},
			{
				test: /\.scss$/,
				use: [
					miniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
}