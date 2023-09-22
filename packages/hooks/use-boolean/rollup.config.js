import ts from "typescript"
import path, { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import typescript from "@rollup/plugin-typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const tsOutDirConfig = ts.readConfigFile(resolve(__dirname, 'tsconfig.json'), ts.sys.readFile).config.compilerOptions.outDir

const currentFileName = path.resolve(__dirname, "./src/index.ts");
const plugins = [typescript()];


const outputConfig = function () {
  const outputObj = (type) => {
    return {
      file: path.resolve(__dirname, tsOutDirConfig + `/index.${type}.js`),
      format: type
    }
  }
  return [
    {
      input: currentFileName,
      output: outputObj('esm'),
      plugins
    }, {
      input: currentFileName,
      output: outputObj('cjs'),
      plugins
    }
  ]
}()


export default outputConfig