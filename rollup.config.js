import resolve from '@rollup/plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const env = 'production'
const packageJson = require('./package.json')

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
			resolve({ extensions }),
			typescript({ tsconfig: './tsconfig.json' }),
			postcss({
				extract: false,
				modules: true,
				use: ['sass'],
			}),
			terser(),
			babel({
				extensions,
				include: ['src/**/*'],
				exclude: 'node_modules/**',
			}),
		],
	},
	{
		input: 'dist/esm/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.css$/],
	},
]
