import readLine from 'readline-sync'
import { commandPrint, commands } from '@commands'
import { actions } from '../actions'

export const start = (fsdPath: string) => {
  commandPrint(commands.general)

  const action = readLine.question('Select action: ')
  actions(fsdPath, action)
  return true
}
