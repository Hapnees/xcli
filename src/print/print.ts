import chalk from 'chalk'

const printError = (message: string) => console.error(chalk.red(message))

export const print = { error: printError }
