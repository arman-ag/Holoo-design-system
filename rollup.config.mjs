import commonjs from '@rollup/plugin-commonjs';
import image from "@rollup/plugin-image";
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from "rollup-plugin-visualizer";
// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import typescript from '@rollup/plugin-typescript';
import { createRequire } from 'node:module';
import { dts } from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";


const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      visualizer(),
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.jsx'],
      }),
      typescript(),
      postcss({
        config: {
          modules: true,
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      commonjs(),
      terser(),
      image(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
