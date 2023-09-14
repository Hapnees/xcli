import readLine from 'readline-sync';
import { commands } from '../commands/command-list.js';
import { commandPrint } from '../commands/command-print.js';
import { actions } from '../actions/actions.js';
export const start = (fsdPath) => {
    commandPrint(commands.general);
    const action = readLine.question('Select action: ');
    actions(fsdPath, action);
    return true;
};
//# sourceMappingURL=start.js.map