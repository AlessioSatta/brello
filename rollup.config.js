import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default {
  input:"src/models/index.ts",

  output: {
    dir: "output",
    entryFileNames: 'brello-business-logic.ts',
    format: "es",
  },
  plugins: [typescript(), dts()],
};
