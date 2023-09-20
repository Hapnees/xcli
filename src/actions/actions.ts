import { createActions } from './action-list/createActions'
import { start } from '../start/start'
import { print } from '@utils'

const createActionsVariants = ['1', 'c', 'create']

export const actions = (fsdPath: string, action: string) => {
  if (createActionsVariants.includes(action.toLowerCase())) {
    createActions(fsdPath)
  } else if (action === 'cls') {
    console.clear()
    start(fsdPath)
  } else {
    print.error('Action not found\n')
    start(fsdPath)
  }
}
