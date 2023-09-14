import fs from 'fs';
import { getResolve, dirname } from '../dirname/dirname.js';
import { print } from '../print/print.js';
export const readConfig = () => {
    const resolve = getResolve(dirname);
    try {
        const config = JSON.parse(fs.readFileSync(resolve('xcli.json'), { encoding: 'utf-8' }));
        const path = config.path;
        if (!path) {
            print.error('"path" parameter not found. Set the "path: "fsd-path" ');
            return { isSuccess: false };
        }
        return { isSuccess: true, config };
    }
    catch (e) {
        print.error('xcli.json not found or empty');
        return { isSuccess: false };
    }
};
//# sourceMappingURL=readConfig.js.map