import { fileURLToPath } from "url";
import fs from "fs";
import ts from "typescript"
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
const tsconfig = ts.readConfigFile(tsconfigPath, ts.sys.readFile)
const currentDirName = path.resolve(__dirname, './').split('/').at(-1);
const outCurDirName = process.env.OUT_DIR + "/" + currentDirName
const inCurDirName = process.env.OUT_DIR
const regex = /^\.\.\//;
tsconfig.config.compilerOptions.outDir = regex.test(process.env.OUT_DIR) ? outCurDirName : inCurDirName

fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig.config, null, 2));