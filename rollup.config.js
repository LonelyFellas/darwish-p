import typescript from "@rollup/plugin-typescript"
import { terser } from 'rollup-plugin-terser'
export default [
  {
    input: 'packages/index.ts',
    output: {
      file: 'lib/index.min.js',
      format: 'esm'
    },
    plugins: [typescript(), terser()]
  }, {
    input: "packages/hooks/index.ts",
    output: {
      file: "lib/hooks/index.min.js",
      format: "esm"
    },
    plugins: [typescript(), terser()]
  }
]