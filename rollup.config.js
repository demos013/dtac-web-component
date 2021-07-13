import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import sourcemaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'

const pkg = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    external: [/@material-ui\/core\/.*/],
    plugins: [
      image(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      sourcemaps(),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        name: 'union',
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        name: 'union',
      },
    ],
  },
]
