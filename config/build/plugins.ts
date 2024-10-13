import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { DefinePlugin, type Configuration } from 'webpack'
import { BuildModes, type BuildOptions } from './utils/types'

export function buildPluginsConfig(
	options: BuildOptions
): Configuration['plugins'] {
	const isDev = options.mode === BuildModes.DEV
	const isProd = options.mode === BuildModes.PROD

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: options.paths.html,
			favicon: options.paths.favicon,
		}),
		new DefinePlugin({
			__ENV_MODE__: JSON.stringify(options.mode),
		}),
	]

	if (isDev) {
		plugins.push(
			new ForkTsCheckerWebpackPlugin(),
			new ReactRefreshWebpackPlugin()
		)
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			}),
			new CopyPlugin({
				patterns: [],
			})
		)
	}

	return plugins
}
