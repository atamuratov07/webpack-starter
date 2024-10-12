import webpack from 'webpack'
import { buildDevServerConfig } from './dev-server'
import { buildLoadersConfig } from './loaders'
import { buildPluginsConfig } from './plugins'
import { buildResolversConfig } from './reslovers'
import { type BuildOptions, BuildModes } from './utils/types'

export function buildWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const isDev = options.mode === BuildModes.DEV
	const isProd = options.mode === BuildModes.PROD

	return {
		mode: options.mode ?? BuildModes.DEV,
		entry: options.paths.entry,
		output: {
			path: options.paths.output,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPluginsConfig(options),
		module: {
			rules: buildLoadersConfig(options),
		},
		resolve: buildResolversConfig(options),
		devtool: isDev && 'inline-source-map',
		devServer: buildDevServerConfig(options),
	}
}
