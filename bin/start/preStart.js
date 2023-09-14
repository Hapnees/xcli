import chalk from 'chalk';
import { readConfig } from '../readConfig/readConfig.js';
import { init } from '../init/init.js';
import { dirname, resolve } from '../dirname/dirname.js';
import { start } from './start.js';
export const preStart = () => {
    console.log(chalk.green('===> FSD SCRIPT <===\n'));
    const { isSuccess: isSuccessReadConfig, config } = readConfig();
    if (!isSuccessReadConfig) {
        return;
    }
    const fsdPath = resolve(dirname, (config === null || config === void 0 ? void 0 : config.path) || '');
    const isSuccessInit = init(fsdPath);
    if (!isSuccessInit) {
        return;
    }
    start(fsdPath);
};
//# sourceMappingURL=preStart.js.map