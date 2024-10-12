import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { Configuration } from 'webpack'
import type { BuildOptions } from './utils/types'
import { BuildModes } from './utils/types'

export function buildPluginsConfig(
	options: BuildOptions
): Configuration['plugins'] {
	const isDev = options.mode === BuildModes.DEV
	const isProd = options.mode === BuildModes.PROD

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: options.paths.html,
		}),
	]

	if (isDev) {
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			})
		)
	}

	return plugins
}
