import chalk from 'chalk';
const print = (command, index) => {
    const _index = index ? chalk.blue(`${index}.`) : '';
    console.log(_index + chalk.blue(command.title) + '\t' + chalk.magenta(command.desc));
};
export const commandPrint = (commands) => {
    if (Array.isArray(commands)) {
        for (let i = 0; i < commands.length; i++) {
            const _command = commands[i];
            print(_command, i + 1);
        }
        return;
    }
    print(commands);
};
//# sourceMappingURL=command-print.js.map