import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build'
import type { BuildMode, BuildPaths } from './config/build/utils/types'
import { BuildModes } from './config/build/utils/types'

interface EnvVars {
	mode?: BuildMode
	port: number
}

export default (env: EnvVars) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'app', 'main.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	const config: webpack.Configuration = buildWebpackConfig({
		mode: env.mode ?? BuildModes.DEV,
		port: env.port ?? 3000,
		paths,
	})

	return config
}
