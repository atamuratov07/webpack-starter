import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type ModuleOptions, type RuleSetRule as Loader } from 'webpack'
import { type BuildOptions, BuildModes } from './utils/types'

export function buildLoadersConfig(
	options: BuildOptions
): ModuleOptions['rules'] {
	const isDev = options.mode === BuildModes.DEV

	const swcLoader: Loader = {
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

	const tailwindLoader: Loader = {
		test: /\.css$/i,
		use: [
			{
				loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			},
			{ loader: 'css-loader' },
			{ loader: 'postcss-loader' },
		],
	}

	const assetLoader: Loader = {
		test: /\.(png|jpe?g|gif|webp)$/i,
		type: 'asset/resource',
		// generator: {
		// 	filename: 'img/[name].[hash][ext]',
		// },
	}

	return [swcLoader, tailwindLoader, assetLoader]
}
