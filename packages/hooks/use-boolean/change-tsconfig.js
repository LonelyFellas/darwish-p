import { fileURLToPath } from "url";
import fs from "fs";
import ts from "typescript"
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
/** 当前路径 */
const __dirname = dirname(__filename);
/** tsconfig.json路径  */
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
/** tsconfig.json内容  */
const tsconfig = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
/** 工程名称  */
const currentDirName = path.resolve(__dirname, './').split('/').at(-1);
/** 打包到上一级的跟目录 */
const outCurDirName = [process.env.OUT_DIR, currentDirName, 'src'].join('/');
/** 当前要打包的路径 */
const inCurDirName = process.env.OUT_DIR;
/** 正则, 通过这个正则来判断当前打包是 在根目录打包还是打包到上一级根目录 */
const regex = /^\.\.\//;
tsconfig.config.compilerOptions.outDir = regex.test(process.env.OUT_DIR) ? outCurDirName : inCurDirName;

fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig.config, null, 2));