import type { Configuration as DevServerConfig } from 'webpack-dev-server'
import type { BuildOptions } from './utils/types'

export function buildDevServerConfig(options: BuildOptions): DevServerConfig {
	return {
		port: options.port,
		open: true,
	}
}
