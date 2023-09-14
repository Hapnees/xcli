import fs from 'fs';
import chalk from 'chalk';
import readLine from 'readline-sync';
import { getResolve } from '../dirname/dirname.js';
import { compareAndFilter } from '../utils/array.js';
import { print } from '../print/print.js';
export const init = (fsdPath) => {
    const resolve = getResolve(fsdPath);
    const avaliableDirs = [
        'app',
        'pages',
        'widgets',
        'features',
        'entities',
        'shared',
    ];
    const existAvaliableDirs = [];
    try {
        const files = fs.readdirSync(resolve());
        for (const _file of files) {
            if (avaliableDirs.includes(_file)) {
                existAvaliableDirs.push(_file);
            }
        }
    }
    catch (e) {
        print.error(`${fsdPath} not found`);
        return false;
    }
    if (existAvaliableDirs.length === avaliableDirs.length) {
        return true;
    }
    const isNeedInit = readLine.question(chalk.yellowBright('Initialize FSD architecture? (y/n): '));
    if (isNeedInit === 'n') {
        return false;
    }
    const dirsForCreate = compareAndFilter(avaliableDirs, existAvaliableDirs);
    for (const _dir of dirsForCreate) {
        try {
            fs.mkdirSync(resolve(_dir));
        }
        catch (e) {
            print.error(`Can't create ${_dir} dir`);
            return false;
        }
    }
    console.log(chalk.greenBright('\nFSD architecture initialized\n'));
    return true;
};
//# sourceMappingURL=init.js.map