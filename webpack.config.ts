import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import webpack from 'webpack'
import type { Configuration as DevServerConfig } from 'webpack-dev-server'

enum Mode {
	Dev = 'development',
	Prod = 'production',
}

interface EnvVars {
	readonly mode: Mode
	readonly port: number
}

const devServerConfig = (
	isDev: boolean,
	port: number = 5000
): DevServerConfig | undefined => {
	if (!isDev) return
	return {
		port,
		open: true,
	}
}

export default (env: EnvVars) => {
	const isDev = env.mode === Mode.Dev
	const isProd = env.mode === Mode.Prod

	const config: webpack.Configuration = {
		mode: env.mode ?? Mode.Dev,
		entry: path.resolve(__dirname, 'src', 'app', 'main.tsx'),
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html'),
			}),
			isProd &&
				new MiniCssExtractPlugin({
					filename: 'css/[name].[contenthash:8].css',
					chunkFilename: 'css/[name].[contenthash:8].css',
				}),
		].filter(Boolean),
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: {
						loader: 'swc-loader',
						options: {
							jsc: {
								parser: {
									syntax: 'typescript',
									tsx: true,
								},
								target: 'es5',
								loose: false,
								minify: {
									compress: false,
									mangle: false,
								},
								transform: {
									react: {
										runtime: 'automatic',
									},
								},
							},
							module: {
								type: 'es6',
							},
							minify: false,
							isModule: true,
						},
					},
				},
				{
					test: /\.css$/i,
					use: [
						{
							loader: isDev
								? 'style-loader'
								: MiniCssExtractPlugin.loader,
						},
						{ loader: 'css-loader' },
						{ loader: 'postcss-loader' },
					],
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		devtool: isDev && 'inline-source-map',
		devServer: devServerConfig(isDev, env.port),
	}

	return config
}
