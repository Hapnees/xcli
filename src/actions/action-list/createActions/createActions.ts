import readLine from 'readline-sync'
import { commandPrint, commands } from '@commands'
import { print } from '@utils'
import { CSCCute } from './sharedComponent/CSCCute'
import { CSCute } from './slice/CSCute'
import { start } from '../../../start/start'

const createSharedComponentVariants = ['1', 'sc', 'shared']
const createSliceVariants = ['2', 's', 'slice']

export const createActions = (fsdPath: string): boolean => {
  console.log('\n')
  commandPrint(commands.forCreate)

  const createAction = readLine.question('\nSelect what u wanna create: ')

  if (createSharedComponentVariants.includes(createAction.toLowerCase())) {
    const isSuccess = CSCCute(fsdPath)

    if (!isSuccess) {
      return createActions(fsdPath)
    }

    return start(fsdPath)
  } else if (createSliceVariants.includes(createAction.toLowerCase())) {
    const isSuccess = CSCute(fsdPath)
    if (!isSuccess) {
      return false
    }

    return start(fsdPath)
  } else if (createAction === '') {
    return start(fsdPath)
  } else if (createAction === 'cls') {
    console.clear()
    return createActions(fsdPath)
  } else {
    print.error('Incorrect choice')
    return createActions(fsdPath)
  }
}
