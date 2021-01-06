import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
process.env.BABEL_ENV = "production";

export default {
  input: "./src/index.tsx",
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    postcss({ modules: true }),
    copy({ targets: [{ src: "public/*", dest: "dist/" }] }),
    typescript({ typescript: require("typescript") }),
    resolve({ extensions, browser: true }),
    commonjs(),
    babel({
      extensions,
      include: ["src/**/*"],
      exclude: "node_modules/**",
      babelHelpers: "runtime",
    }),
    terser(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "dist"],
      historyApiFallback: true,
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
  ],
  output: [{ file: pkg.main, format: "cjs" }],
};
