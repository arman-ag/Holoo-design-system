import commonjs from '@rollup/plugin-commonjs';
import image from "@rollup/plugin-image";
import resolve from '@rollup/plugin-node-resolve';
import { createRequire } from 'node:module';
import { dts } from "rollup-plugin-dts";
import esbuild from 'rollup-plugin-esbuild';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";
import { visualizer } from "rollup-plugin-visualizer";


const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [
  {

    treeshake: true,
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: "named",
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      esbuild({  // All options are optional
        include: /\.[jt]sx?$/, // default, inferred from `loaders` option
        exclude: ["node_modules", "stories"], // default
        sourceMap: true, // default
        minify: true,
        target: 'esnext', // default, or 'es20XX', 'esnext'
        jsx: 'transform', // default, or 'preserve'
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        // Like @rollup/plugin-replace
        define: {
          __VERSION__: '"x.y.z"',
        },
        tsconfig: 'tsconfig.json', // default
      }),
      visualizer(),
      peerDepsExternal(),
      resolve({}),
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
      image(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
