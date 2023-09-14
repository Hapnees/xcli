import readLine from 'readline-sync';
import { createSharedComponent } from './createSharedComponent.js';
export const CSCCute = (fsdPath) => {
    const componentName = readLine.question('Component name: ');
    if (!componentName) {
        return false;
    }
    const isSuccess = createSharedComponent(fsdPath, componentName);
    if (!isSuccess) {
        return false;
    }
    return true;
};
//# sourceMappingURL=CSCCute.js.map