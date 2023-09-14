import { createActions } from './action-list/createActions/createActions.js';
import { start } from '../start/start.js';
import { print } from '../print/print.js';
const createActionsVariants = ['1', 'c', 'create'];
export const actions = (fsdPath, action) => {
    if (createActionsVariants.includes(action.toLowerCase())) {
        createActions(fsdPath);
    }
    else if (action === 'cls') {
        console.clear();
        start(fsdPath);
    }
    else {
        print.error('Action not found\n');
        start(fsdPath);
    }
};
//# sourceMappingURL=actions.js.map