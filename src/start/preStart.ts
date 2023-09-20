import chalk from 'chalk'
import { readConfig } from '@utils'
import { init } from '../init/init'
import { dirname, resolve } from '@helpers'
import { start } from './start'

export const preStart = () => {
  console.log(chalk.green('===> FSD SCRIPT <===\n'))

  const { isSuccess: isSuccessReadConfig, config } = readConfig()

  if (!isSuccessReadConfig) {
    return
  }

  const fsdPath = resolve(dirname, config?.path || '')
  const isSuccessInit = init(fsdPath)

  if (!isSuccessInit) {
    return
  }

  start(fsdPath)
}
