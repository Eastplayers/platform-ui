import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import pkg from "./package.json" assert { type: "json" };
import scss from "rollup-plugin-scss";

export default [
  {
    input: "src/index.tsx",
    output: {
      name: "@eastplayers/platform-ui",
      file: pkg.browser,
      format: "es",
      dir: "lib",
    },
    external: ["react/jsx-runtime"],
    plugins: [
      json(),
      typescript(),
      resolve(),
      commonjs(),
      babel({
        exclude: ["node_modules/**"],
      }),
      terser(),
      scss(),
    ],
  },
];
