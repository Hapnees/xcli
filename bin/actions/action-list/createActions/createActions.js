import readLine from 'readline-sync';
import { commands } from '../../../commands/command-list.js';
import { commandPrint } from '../../../commands/command-print.js';
import { CSCCute } from './sharedComponent/CSCCute.js';
import { CSCute } from './slice/CSCute.js';
import { start } from '../../../start/start.js';
import { print } from '../../../print/print.js';
const createSharedComponentVariants = ['1', 'sc', 'shared'];
const createSliceVariants = ['2', 's', 'slice'];
export const createActions = (fsdPath) => {
    console.log('\n');
    commandPrint(commands.forCreate);
    const createAction = readLine.question('\nSelect what u wanna create: ');
    if (createSharedComponentVariants.includes(createAction.toLowerCase())) {
        const isSuccess = CSCCute(fsdPath);
        if (!isSuccess) {
            return createActions(fsdPath);
        }
        return start(fsdPath);
    }
    else if (createSliceVariants.includes(createAction.toLowerCase())) {
        const isSuccess = CSCute(fsdPath);
        if (!isSuccess) {
            return false;
        }
        return start(fsdPath);
    }
    else if (createAction === '') {
        return start(fsdPath);
    }
    else if (createAction === 'cls') {
        console.clear();
        return createActions(fsdPath);
    }
    else {
        print.error('Incorrect choice');
        return createActions(fsdPath);
    }
};
//# sourceMappingURL=createActions.js.map