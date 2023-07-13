import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import del from 'rollup-plugin-delete'

export default {
  input:"src/models/index.ts",

  output: {
    dir: "output",
    entryFileNames: 'brello-business-logic.js',
    format: "es",
  },
  plugins: [typescript(), del({ targets: 'output/*' })],
};
