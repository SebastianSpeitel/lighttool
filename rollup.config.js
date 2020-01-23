import ts from "@rollup/plugin-typescript";
import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import globals from "rollup-plugin-node-globals";
import html from "@rollup/plugin-html";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";

import template from "./src/template";

const production = process.env.NODE_ENV === "production";

export default {
  input: "src/main.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: !production
  },
  plugins: [
    copy({
      targets: [
        {
          src: "node_modules/vuetify/dist/vuetify.min.css",
          dest: "dist"
        }
      ]
    }),
    html({ title: "Lighttool", template }),
    ts(),
    resolve({ preferBuiltins: true }),
    commonjs(),
    globals(),
    vue({
      needMap: true,
      css: true,
      compileTemplate: false,
      template: {
        isProduction: production
      }
    }),
    postcss(),
    production && terser()
  ]
};
