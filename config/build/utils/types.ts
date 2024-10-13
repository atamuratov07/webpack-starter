export interface BuildPaths {
	entry: string
	output: string
	html: string
	src: string
	favicon: string
	public: string
}

export const enum BuildModes {
	DEV = 'development',
	PROD = 'production',
}

export type BuildMode = `${BuildModes}`

export interface BuildOptions {
	port: number
	paths: BuildPaths
	mode: BuildMode
}
