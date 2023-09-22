import typescript from "@rollup/plugin-typescript"
import { terser } from 'rollup-plugin-terser'
export default [{
  input: './index.ts',
  output: {
    file: './lib/index.min.js',
    format: 'esm'
  },
  plugins: [typescript(), terser()]

}, {
  input: "./index.ts",
  output: {
    file: "./lib/index.js",
    format: "esm"
  },
  plugins: [typescript()]
}]