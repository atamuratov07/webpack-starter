import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type ModuleOptions } from 'webpack'
import type { BuildOptions } from './utils/types'
import { BuildModes } from './utils/types'

export function buildLoadersConfig(
	options: BuildOptions
): ModuleOptions['rules'] {
	const isDev = options.mode === BuildModes.DEV

	const swcLoader = {
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
	}

	const tailwindLoader = {
		test: /\.css$/i,
		use: [
			{
				loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			},
			{ loader: 'css-loader' },
			{ loader: 'postcss-loader' },
		],
	}

	return [swcLoader, tailwindLoader]
}
