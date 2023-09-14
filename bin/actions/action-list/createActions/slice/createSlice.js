import fs from 'fs';
import { getResolve } from '../../../../dirname/dirname.js';
export const createSlice = (fsdPath, layer, sliceName) => {
    const resolve = getResolve(fsdPath);
    try {
        fs.mkdirSync(resolve(layer, sliceName));
    }
    catch (e) { }
    try {
        fs.mkdirSync(resolve(layer, sliceName, 'ui'));
    }
    catch (e) { }
    return true;
};
//# sourceMappingURL=createSlice.js.map