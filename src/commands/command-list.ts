import { ICommand } from './command.type'

const general: ICommand[] = [
  {
    title: 'Create',
    desc: 'Create an element',
  },
  { title: 'Move', desc: 'Move an element' },
]

const forCreate: ICommand[] = [
  {
    title: 'Shared component',
    desc: 'Create a shared component',
  },
  { title: 'Slice', desc: 'Create a slice' },
]

export const commands = { general, forCreate }
