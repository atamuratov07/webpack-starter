import type { Configuration } from 'webpack'
import type { BuildOptions } from './utils/types'

export function buildResolversConfig(
	options: BuildOptions
): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@': options.paths.src,
		},
	}
}
