const general: ICommand[] = [
  {
    title: 'Create',
    desc: 'Create an element',
  },
]

const forCreate: ICommand[] = [
  {
    title: 'Shared component',
    desc: 'Create a shared component',
  },
  { title: 'Slice', desc: 'Create a slice' },
]

export const commands = { general, forCreate }
