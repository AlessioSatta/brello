import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";

const outDir = "dist";

export default [
  {
    input: "src/index.ts",
    output: {
      dir: outDir,
      entryFileNames: "index.js",
      format: "es",
    },
    plugins: [del({ targets: outDir }), typescript()],
  },
];
