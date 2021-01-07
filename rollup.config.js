import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import styles from "rollup-plugin-styles";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

process.env.BABEL_ENV = "production";

export default {
  input: "./src/index.tsx",
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    styles({ modules: true, autoModules: true }),
    copy({ targets: [{ src: "public/*", dest: "dist/" }] }),
    typescript({ typescript: require("typescript") }),
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      include: ["src/**/*"],
      exclude: "node_modules/**",
      babelHelpers: "runtime",
    }),
    terser(),
  ],
  output: [{ file: pkg.main, format: "cjs" }],
};
